/**
 * API utility functions for making HTTP requests
 */

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * Generic fetch wrapper with error handling
 */
export async function apiRequest<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;

  // Add query parameters if provided
  let fullUrl = url;
  if (params) {
    const searchParams = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    );
    fullUrl = `${url}?${searchParams.toString()}`;
  }

  // Set default headers
  const headers = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  try {
    const response = await fetch(fullUrl, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        response.status,
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, error instanceof Error ? error.message : 'Unknown error');
  }
}

/**
 * GET request
 */
export async function get<T>(url: string, options?: RequestOptions): Promise<T> {
  return apiRequest<T>(url, { ...options, method: 'GET' });
}

/**
 * POST request
 */
export async function post<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<T> {
  return apiRequest<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * PUT request
 */
export async function put<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<T> {
  return apiRequest<T>(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * DELETE request
 */
export async function del<T>(url: string, options?: RequestOptions): Promise<T> {
  return apiRequest<T>(url, { ...options, method: 'DELETE' });
}

/**
 * PATCH request
 */
export async function patch<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<T> {
  return apiRequest<T>(url, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}
