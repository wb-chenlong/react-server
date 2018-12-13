/**
 * 全局公共方法
 */

// 获取cookie
export function getCookie(cookieName) {
  const name = `${cookieName}=`;
  const cookies = document.cookie.split(';');
  // eslint-disable-next-line
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return '';
}

// 将内容进行 encode 处理，主要处理链接类
export function decodeHtml(encode) {
  return encode
    .replace(/&mdash;/g, '— ')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

// 获取自定义 url 中的对应参数
export function getUrlParameter(link, name) {
  let url = link;
  url = url.slice(url.indexOf('?'), url.length);
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = url.substr(1).match(reg);

  if (r !== null) {
    return unescape(r[2]);
  }

  return null;
}

// 获取 url 参数集合
export function getUrlParams(url) {
  const d = decodeURIComponent;
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  const obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0]; // eslint-disable-line
    const arr = queryString.split('&');
    for (let i = 0; i < arr.length; i += 1) {
      const a = arr[i].split('=');
      let paramNum;
      const paramName = a[0].replace(/\[\d*\]/, (v) => {
        paramNum = v.slice(1, -1);
        return '';
      });
      const paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = d([obj[paramName]]);
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(d(paramValue));
        } else {
          obj[paramName][paramNum] = d(paramValue);
        }
      } else {
        obj[paramName] = d(paramValue);
      }
    }
  }
  return obj;
}

// 字符串长度，中文算2个长度
export function getStrLength(str) {
  return str.replace(/[^\x00-\xff]/g, 'aa').length;
}

// 生成唯一不重复ID
export function genNonDuplicateID(length) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
