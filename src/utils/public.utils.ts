import { BASE_PATH } from '@/constants/config.constant';
import { mergeTwoString } from './string.utils';

export const getPublicPath = mergeTwoString(BASE_PATH);
