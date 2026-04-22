import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not defined');
}
if(!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not defined');
}
if(!process.env.GEMINI_API_KEY) {
  throw new Error('API_KEY environment variable is not defined');
}

const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY
};

export default config;

