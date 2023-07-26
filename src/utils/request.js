import axios from 'axios';
import _get from 'lodash/get';
const request = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const handlerError = async error => {
  const response = _get(error, 'response') || {};
  const { status } = response;
  return { statusCode: status };
};

request.interceptors.request.use(config => {
  return config;
});

request.interceptors.response.use(reponse => {
  return reponse;
}, handlerError);

export default request;