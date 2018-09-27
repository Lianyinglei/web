import fetch from 'utils/fetch';

// export function getMaintence(query){
// 	return fetch({
// 		url:"/api/tenant/maintence/list",
// 		method:'get',
// 		params:query
// 	})
// }

export function getLocation(){
	return fetch({
		url:"/api/admin/dic/locations",
		method:"get"
	})
}

export function putSearchData(query,obj){
	return fetch({
		url:"/api/tenant/maintence/list",
		method:'post',
		data:obj,
		params:query
	})
}

export function checkDetails(id){
	return fetch({
		url:"/api/tenant/maintence/view/"+id,
		method:"get"
	})
}