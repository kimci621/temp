import type { NextResponse } from 'next/server';
import useSWR from 'swr';
import fetcher from './use-fetcher';

interface UseApiOptions {
  errorMessage?: string;
}

export function useApi<T>(url: string, { errorMessage }: UseApiOptions = {}) {
  const { data, error, isLoading } = useSWR<T>(url, fetcher);

  const response: {
    data: T | null;
    error: string | null;
    isLoading: boolean;
  } = {
    data: null,
    error: null,
    isLoading: false,
  };

  if (data) response.data = data;
  if (error) response.error = errorMessage || 'error';
  if (isLoading) response.isLoading = true;

  return response;
}
