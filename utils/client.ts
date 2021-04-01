import axios from 'axios';
import qs from 'qs';

export const API_URL = '/api';

const CustomAxios = axios.create({ baseURL: API_URL });

export const Client = {
  get: (url, options?: object) => CustomAxios.get(url, options),
  post: (url: string, data: object) => {
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    return CustomAxios.post(url, qs.stringify(data), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  },
};
