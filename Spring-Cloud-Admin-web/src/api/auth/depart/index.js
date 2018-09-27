import fetch from 'utils/fetch';

export function fetchTree(query){
	return fetch({
		url:"/api/admin/depart/tree",
		method:"get",
		params:query
	})
}

export function getUserData(query){
	return fetch({
		 url:"/api/admin/user/departId/users",
		 method:"post",
		 params:query
	})
}

export function getPositionData(query){
	return fetch({
		url:"/api/admin/depart/search",
		method:'post',
		params:query
	})
}

export function addUser(userId,departmentId){
	return fetch({
		url:"/api/admin/depart/relation/user?userId="+userId+"&departmentId="+departmentId,
		method:'post'
	})
}

// 添加/修改到树状结构中
export function addPos(obj){
	return fetch({
		url:"/api/admin/depart/update?isPost=2",
		method:'post',
		data:obj
	})
}

// 获取一个部门
export function getOne(id){
	return fetch({
		url:"/api/admin/depart/get/" + id,
		method:'get'
	})
}

// 删除一个部门
export function removeDepart(id){
	return fetch({
		url:"/api/admin/depart/remove/" + id,
		method:'delete'
	})
}

// 检查code是否存在
export function checkCode(id){
	return fetch({
		url:"/api/admin/depart/ss/" + id,
		method:'delete'
	})
}