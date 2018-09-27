import fetch from 'utils/fetch';

export function getDictoryData(query){
  return fetch({
    url:"/api/tenant/dic/search",
    method:"get",
    params:query
  })
}

export function addObj(obj){
  obj.isPost=1;
  return fetch({
    url:"/api/tenant/dic/update",
    method:'post',
    data:obj
  })
} 

export function getObj(id){
  return fetch({
    url:"/api/tenant/dic/" + id,
    method:'get'
  })
}

export function delObj(id){
  return fetch({
    url:"/api/tenant/dic/" + id,
    method:'delete'
  })
}

export function putObj(obj){
  return fetch({
    url:"/api/tenant/dic/update",
    method:'post',
    data:obj
  })
}

// 查询字典表中的code编码是否存在
export function checkData(code, parentId){
  return fetch({
    url:"/api/tenant/dic/check/code/"+code+"/"+parentId,
    method:'get'
  })
}