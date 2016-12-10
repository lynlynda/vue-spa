/**
 * 解析url参数
 * @example ?id=123&a=bbbb
 * @return Object {id:123,a:bbb}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let temp = item.substring(1).split('=');
      let key = decodeURIComponent(temp[0]);
      let value = decodeURIComponent(temp[1]);
      obj[key] = value;
    });
  };
  return obj;
}