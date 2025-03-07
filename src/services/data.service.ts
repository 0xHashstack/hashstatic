import { rpcProvider } from '@/constants/rpc-provider.constant';
import axiosInstance from '@/lib/axios';
import { Contract, uint256 } from 'starknet';
import metricsAbi from '@/constants/abi/metrics.abi.json';

/**
 * Formats a BigInt number to a human-readable string with B, M, or K suffix
 * @param value - The BigInt value to format
 * @param tokenDecimals - Number of decimals in the token (default: 18)
 * @param displayPrecision - Number of decimal places to show in the result (default: 2)
 * @returns Formatted string with appropriate suffix
 */
export const formatBigNumber = (
	value: bigint,
	tokenDecimals: number = 18,
	displayPrecision: number = 2
): string => {
	// Create a precision factor for calculations
	const factor = 1000000n;

	// Create divisor based on token decimals
	const divisor = 10n ** BigInt(tokenDecimals);

	// Scale the value with high precision to avoid floating point issues
	const scaledValue = (value * factor) / divisor;

	// Convert to a number for formatting
	const preciseValue = Number(scaledValue) / Number(factor);

	// Define thresholds for different formats
	const billion = 1000000000;
	const million = 1000000;
	const thousand = 1000;

	// Format based on size with the specified number of decimal places
	let formattedValue: number;
	let suffix = '';

	if (Math.abs(preciseValue) >= billion) {
		formattedValue = preciseValue / billion;
		suffix = 'B';
	} else if (Math.abs(preciseValue) >= million) {
		formattedValue = preciseValue / million;
		suffix = 'M';
	} else if (Math.abs(preciseValue) >= thousand) {
		formattedValue = preciseValue / thousand;
		suffix = 'K';
	} else {
		formattedValue = preciseValue;
	}

	// Truncate to the desired precision (similar to Math.floor in parseAmount)
	const multiplier = 10 ** displayPrecision;
	formattedValue = Math.floor(formattedValue * multiplier) / multiplier;

	// Format to fixed decimal places and add suffix
	return formattedValue.toFixed(displayPrecision) + suffix;
};

export const server = {
	getUtilRate: async () => {
		const { data } = await axiosInstance.get('/metrics/urm_platform/daily');
		return data;
	},
	getTvl: async () => {
		const metricsContract = new Contract(
			metricsAbi,
			'0x548f38cb45720a101a1ec2edfaf608b47d2b39d137d0d3134087315f1b5f4a5',
			rpcProvider
		);

		const { protocol_reserves }: any = await metricsContract.call(
			'get_protocol_reserves',
			[],
			{
				blockIdentifier: 'pending',
			}
		);
		if (!protocol_reserves)
			throw new Error('Failed to get protocol reserves');
		const { total_reserves } = protocol_reserves;
		const totalReserveParsed = uint256.uint256ToBN(total_reserves);
		// Using token decimals of 18 and display decimals of 2
		const formattedReserves = formatBigNumber(totalReserveParsed, 8, 2);

		return formattedReserves;
	},
};
