import axios from 'axios';

export const get = (url, params) => {
  return axios({
    method: 'get',
    url,
    params,
  }) 
}

export const post = (url, params) => {
  return axios({
    method: 'post',
    url,
    data: params,
  }) 
}