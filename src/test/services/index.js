import qs from 'qs';
import request from '../../utils/request';

export async function fetchTestGet(params) {
  return request(`/test.json?${qs.stringify(params)}`);
}

export async function fetchTestPost(params) {
  return request('/test1.json', {
    method: 'POST',
    body: params,
  });
}
