import axios from 'axios';
import api from '../utils/services';

const ENDPOINTS = {
  DEVELOPERS: '/developers',
};

export const loadDevelopers = devId => {
  return axios
    .get(api.url + ENDPOINTS.DEVELOPERS, { headers: { user: devId } })
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const createDeveloper = username => {
  return axios
    .post(api.url + ENDPOINTS.DEVELOPERS, { username })
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const likeDeveloper = (loggedId, likeId) => {
  return axios
    .post(`${api.url}${ENDPOINTS.DEVELOPERS}/${likeId}/likes`, null, {
      headers: {
        user: loggedId,
      },
    })
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const dislikeDeveloper = (loggedId, dislikeId) => {
  return axios
    .post(`${api.url}${ENDPOINTS.DEVELOPERS}/${dislikeId}/dislikes`, null, {
      headers: {
        user: loggedId,
      },
    })
    .then(res => res.data)
    .catch(err => err.response.data);
};
