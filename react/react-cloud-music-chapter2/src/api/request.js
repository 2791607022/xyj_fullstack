import {axiosInstance} from './config';

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
}
 