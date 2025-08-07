// src/config.ts
import dotenv from 'dotenv';
dotenv.config();

// Проверяем, что переменные есть в окружении
if (!process.env.OPENROUTER_API_KEY) {
  throw new Error('Missing OPENROUTER_API_KEY in .env');
}
if (!process.env.DOLLY_API_KEY) {
  console.warn('DOLLY_API_KEY not set; findHelpers может упасть');
}

export const ORS_API_KEY = process.env.OPENROUTER_API_KEY;
export const DOLLY_API_KEY = process.env.DOLLY_API_KEY || '';
export const THUMBTACK_API_KEY = process.env.THUMBTACK_API_KEY || '';
export const TURO_API_KEY = process.env.TURO_API_KEY || '';
export const HIREAHELPER_KEY = process.env.HIREAHELPER_KEY || '';
export const TASKRABBIT_KEY = process.env.TASKRABBIT_KEY || '';
