const prompt = ({ resume, selfDescription, jobDescription }) => `
You are a STRICT JSON generator.

Your ONLY task is to return a VALID JSON object.
You are NOT allowed to return anything else.

----------------------------------------
🚫 ABSOLUTE RULES (NO EXCEPTIONS):

- Output ONLY JSON
- NO explanations
- NO markdown
- NO text before or after JSON
- NO comments
- NO trailing commas
- Use ONLY double quotes

----------------------------------------
🚫 CRITICAL STRUCTURE RULE:

ALL arrays MUST contain OBJECTS.

NEVER return flattened arrays like:
["question", "...", "intention", "..."]

THIS IS STRICTLY FORBIDDEN.

Every array must look like:
[
  {
    "field1": "value",
    "field2": "value"
  }
]

----------------------------------------
📌 REQUIRED JSON STRUCTURE:

{
  "matchScore": number,

  "technicalQuestions": [
    {
      "question": string,
      "intention": string,
      "answer": string
    }
  ],

  "behavioralQuestions": [
    {
      "question": string,
      "intention": string,
      "answer": string
    }
  ],

  "skillGaps": [
    {
      "skill": string,
      "severity": "low" | "medium" | "high"
    }
  ],

  "preparationPlan": [
    {
      "day": number,
      "focus": string,
      "tasks": [string]
    }
  ],

  "title": string
}

----------------------------------------
📌 STRICT VALIDATION RULES:

- matchScore must be between 0 and 100
- Each array must contain AT LEAST 2 objects
- severity must be EXACTLY: "low", "medium", or "high"
- preparationPlan.day must be sequential: 1,2,3...
- tasks MUST be an array of json (NOT a paragraph)

----------------------------------------
📌 CORRECT EXAMPLE:

{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "Explain REST APIs",
      "intention": "Check API knowledge",
      "answer": "Discuss HTTP methods and statelessness"
    },
    {
      "question": "What is JWT?",
      "intention": "Check authentication",
      "answer": "Explain token structure"
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Tell me about a challenge",
      "intention": "Problem solving",
      "answer": "Use STAR method"
    },
    {
      "question": "Describe teamwork",
      "intention": "Collaboration",
      "answer": "Give real example"
    }
  ],
  "skillGaps": [
    {
      "skill": "Automation Testing",
      "severity": "medium"
    },
    {
      "skill": "System Design",
      "severity": "high"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "Data Structures",
      "tasks": ["Solve problems", "Revise concepts"]
    },
    {
      "day": 2,
      "focus": "API Testing",
      "tasks": ["Practice Postman", "Test endpoints"]
    }
  ],
  "title": "API Testing Interview Preparation"
}

----------------------------------------
📌 INVALID EXAMPLE (DO NOT DO THIS):

{
  "technicalQuestions": [
    "question",
    "Explain REST API",
    "intention",
    "Check knowledge"
  ]
}

----------------------------------------
📌 INPUT DATA:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

----------------------------------------
FINAL INSTRUCTION:

Return ONLY valid JSON.
If you cannot follow the schema EXACTLY, DO NOT respond.
`;

export default prompt;