import fetch from 'utils/fetch';

// export function getQualityData(query){
// 	return fetch({
// 		url:"/api/tenant/quality/list",
// 		method:"get",
// 		params:query
// 	})
// }

export function getLocation(){
	return fetch({
		url:"/api/tenant/admin/dic/locations",
		method:"get"
	})
}

export function putSearchData(query,obj){
	return fetch({
		url:"/api/tenant/quality/list",
		method:"post",
		data:obj,
		params:query
	})
}

export function checkDetails(id){
	return fetch({
		url:"/api/tenant/quality/view/"+id,
		method:"get"
	})
}