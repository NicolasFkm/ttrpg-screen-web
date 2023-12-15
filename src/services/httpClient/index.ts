import configs from '../../configs';
import axios from 'axios';

const BASE_URL = configs.env.HTTP_BASE_URL;

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
