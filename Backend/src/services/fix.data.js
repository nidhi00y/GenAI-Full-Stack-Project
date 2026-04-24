export function transformInterviewReport(raw) {
  function groupQA(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 6) {
      result.push({
        question: arr[i + 1],
        intention: arr[i + 3],
        answer: arr[i + 5],
      });
    }
    return result;
  }

  function groupSkills(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 4) {
      result.push({
        skill: arr[i + 1],
        severity: arr[i + 3],
      });
    }
    return result;
  }

  function groupPlan(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 6) {
      result.push({
        day: arr[i + 1],
        focus: arr[i + 3],
        tasks: [arr[i + 5], arr[i + 6]].filter(Boolean),
      });
    }
    return result;
  }

  return {
    matchScore: raw.matchScore,
    technicalQuestions: groupQA(raw.technicalQuestions),
    behavioralQuestions: groupQA(raw.behavioralQuestions),
    skillGaps: groupSkills(raw.skillGaps),
    preparationPlan: groupPlan(raw.preparationPlan),
    title: raw.title,
  };
}