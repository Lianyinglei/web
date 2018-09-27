import fetch from 'utils/fetch';
import Utils from 'utils/utils'

export function loginByEmail(username, password) {
      //var passWord = JSON.stringify(password);
      //var passData = Utils.encrypt(passWord,'hAw6eqnFLKxpsDv3');
      //console.log(passData);
  // const data = {
  //   username,
  //   passData
  // };
  return fetch({
   // url: '/api/auth/jwt/token?username='+username+"&password="+password,
   url: '/api/auth/jwt/token',
    method: 'post',
    data:{
      username,
      password
    }
  });
}

export function logout(token) {
  return fetch({
    url: '/api/auth/jwt/invalid',
    method: 'post',
    params: { token }
  });
}

export function getInfo(token) {
  return fetch({
    url: '/api/admin/user/front/info',
    method: 'get',
    params: { token }
  });
}

export function getMenus(token) {
  return fetch({
    url: '/api/admin/user/front/menus',
    method: 'get',
    params: { token }
  });
}

export function getAllMenus() {
  return fetch({
    url: '/api/admin/user/front/menu/all',
    method: 'get'
  });
}