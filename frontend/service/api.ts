import axios from 'axios';
import to from 'await-to-js';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
});

export interface RequestParams<T> {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  url: string;
  data?: T;
}

export async function request<R, T = undefined>(params: RequestParams<T>) {
  const { method, url, data } = params;

  const [err, result] = await to(
    instance.request<R>({
      method,
      url,
      data: method === 'get' ? undefined : data,
      params: method !== 'get' ? undefined : data,
    })
  );

  if (err) {
    return Promise.reject(err);
  }

  return result.data;
}
