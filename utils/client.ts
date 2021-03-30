import axios from 'axios';

export const API_URL =
  'https://thingproxy.freeboard.io/fetch/http://3.36.237.214';

export const Client = axios.create({ baseURL: API_URL });
