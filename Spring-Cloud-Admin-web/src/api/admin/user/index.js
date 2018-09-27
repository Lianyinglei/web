import fetch from 'utils/fetch';

export function page(query) {
  return fetch({
    url: '/api/admin/user/page',
    method: 'get',
    params: query
  });
}

export function addObj(obj) {
  return fetch({
    url: '/api/admin/user/save',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return fetch({
    url: '/api/admin/user/user/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return fetch({
    url: '/api/admin/user/remove/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return fetch({
    url: '/api/admin/user/update/info',
    method: 'put',
    data: obj
  })
}

export function checkData(username){
  return fetch({
    url:"/api/admin/user/check?username="+username,
    method:"get",
  })
}
export function checkEmail(email){
  return fetch({
    url:"/api/admin/user/check?email="+email,
    method:'get'
  })
}

export function getArea(){
  return fetch({
    url:'/api/tenant/address/auth/area/tree',
    method:'get'
  })
}

export function getDictory(){
  return fetch({
    url:"/api/admin/group/drop",
    method:"get"
  });
}

export function getDepartment(){
  return fetch({
    url:"/api/admin/depart/drop",
    method:"get"
  })
}


export function putPassWord(obj){
  return fetch({
    url:"/api/admin/user/update/pwd",
    method:'put',
    data:obj
  })
}

// 获取当前用户信息
export function getCurrentUserInfo(){
  return fetch({
    url:"/api/admin/user/current",
    method:'get'
  })
}