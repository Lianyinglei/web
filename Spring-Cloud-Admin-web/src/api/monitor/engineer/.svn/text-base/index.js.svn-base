import fetch from 'utils/fetch';

// export function getEngineer(query){
// 	return fetch({
// 		url:"/api/tenant/engineer/list",
// 		method:"get",
// 		params:query
// 	})
// }

export function putSeachData(query,obj){
	return fetch({
		url:"/api/tenant/engineer/list",
		method:"post",
		data:obj,
		params:query
	})
}


export function checkDetails(id){
	return fetch({
		url:"/api/tenant/engineer/view/"+id,
		method:"get"
	})
}