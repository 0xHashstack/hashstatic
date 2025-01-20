import axiosInstance from '@/lib/axios';

export const server = {
	getUtilRate: async () => {
		const { data } = await axiosInstance.get('/metrics/urm_platform/daily');
		return data;
	},
	getTvl: async () => {
		const { data } = await axiosInstance.get('/get-main-metrics');
		return data;
	},
};
