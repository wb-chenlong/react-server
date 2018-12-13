import fetch from 'dva/fetch';

/**
 * fetch timeout
 * 弊端：超时后，有可能还是会获取到服务端的 response
 */
// eslint-disable-next-line
function fetchTimeOut(fetch, timeout) {
  return Promise.race([
    fetch,
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('请求超时')), timeout);
    }),
  ]);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
    // 跨域请求参数
    // mode: 'no-cors',
    /* headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }, */
  };
  const newOptions = { ...defaultOptions, ...options };
  const method = ['POST', 'PUT', 'DELETE'];
  if (method.indexOf(newOptions.method) > -1) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetchTimeOut(fetch(url, newOptions), 1000 * 10)
    .then(checkStatus)
    .then(response => response.json())
    .then(data => data)
    .catch((error) => {
      if ('stack' in error && 'message' in error) {
        // alert(error.message || `请求错误: ${url}`);
      }

      return error;
    });
}
