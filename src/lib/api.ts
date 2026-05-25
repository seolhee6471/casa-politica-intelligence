/**
 * HTTP 클라이언트 설정 (Axios, fetch wrapper 등)
 * 예: import axios from "axios";
 * export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
 */

const defaultHeaders = {
  "Content-Type": "application/json",
} as const;

export async function fetchApi<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: { ...defaultHeaders, ...options?.headers },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
