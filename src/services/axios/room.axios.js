import { axios } from '../../configurations';

const baseUrl = process.env.REACT_APP_BASE_URL;

export default {
  getRooms: () => axios.get(`${baseUrl}/rooms`),
};
