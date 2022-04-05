import AxiosClient from 'lib/AxiosClient';

const flightsApi = {
  getInfiny: () => {
    return AxiosClient.get('/infiny');
  },
  getOrderByMadh: (madh) => {
    return AxiosClient.get(`/api/orders/${madh}`);
  },
  getOrders: () => {
    return AxiosClient.get('api/orders');
  },
};
export default flightsApi;
