import fetch from 'utils/fetch';

// export function getConsumable(query){
// 	return fetch({
// 		url:"/api/tenant/expend/list",
// 		method:"get",
// 		params:query
// 	})
// }

export function getLocation(){
	return fetch({
		url:"/api/admin/dic/locations",
		method:"get"
	})
}

export function putSeachData(query,obj){
	return fetch({
		url:"/api/tenant/expend/list",
		method:"post",
		data:obj,
		params:query
	})
}

export function checkDetails(id){
	return fetch({
		url:"/api/tenant/expend/view/"+id,
		method:'get'
	})
}