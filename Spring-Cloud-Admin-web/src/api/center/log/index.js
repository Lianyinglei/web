import fetch from 'utils/fetch';

export function getLogData(query){
	return fetch({
		url:"/api/tenant/log/list",
		method:"get",
		params:query
	})
}

export function getLocation(){
	return fetch({
		url:"/api/admin/dic/locations",
		method:"get"
	})
}

export function putSearchData(query,obj){
	return fetch({
		url:"/api/tenant/log/list",
		method:"post",
		data:obj,
		params:query
	})
}