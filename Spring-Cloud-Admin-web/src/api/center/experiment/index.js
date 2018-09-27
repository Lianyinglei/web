import fetch from 'utils/fetch';

export function getTestItem(query){
	return fetch({
		url:"/api/tenant/testItem/list",
		method:"get",
		params:query
	})
}

// export function getLocation(){
// 	return fetch({
// 		url:"/api/admin/dic/locations",
// 		method:"get"
// 	})
// }

export function putSearchData(query,obj){
	return fetch({
		url:"/api/tenant/testitem/list",
		method:"post",
		data:obj,
		params:query
	})
}