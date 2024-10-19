import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 함수 추가 작업
export const absoluteUrl = (path: string) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  return new URL(path, baseUrl).toString();
};