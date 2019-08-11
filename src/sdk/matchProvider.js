import axios from 'axios';

const ENDPOINTS = {
  DEVELOPERS: '/developers',
};

export const loadDevelopers = () => {
  return axios
    .get(api.url + ENDPOINTS.DEVELOPERS)
    .then(res => res.data)
    .catch(err => err.response.data);
};
