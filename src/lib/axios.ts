import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { METRIX_API_URL } from '@/constants/config.constant';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: METRIX_API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.error('Response Error:', error.response.data);
		} else if (error.request) {
			// The request was made but no response was received
			console.error('Request Error:', error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.error('Error:', error.message);
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
