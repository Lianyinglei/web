import fetch from 'utils/fetch';

export function fetchTree(query) {
  return fetch({
    url: '/api/admin/menu/tree',
    method: 'get',
    params: query
  });
}

export function fetchAll() {
  return fetch({
    url: '/api/admin/menu/all',
    method: 'get'
  });
}
export function addObj(obj) {
  return fetch({
    url: '/api/admin/menu/save',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return fetch({
    url: '/api/admin/menu/get/' + id,
    method: 'get'
  })
}

export function delObj(obj) {
  return fetch({
    url: '/api/admin/menu/remove/'+obj,
    method: 'delete'
  })
}

export function putObj(obj) {
  return fetch({
    url: '/api/admin/menu/update',
    method: 'put',
    data: obj
  })
}
