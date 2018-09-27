import fetch from 'utils/fetch';

// export function getCustomer(){
// 	return fetch({
// 		url:"/api/tenant/customer/map",
// 		method:"post",
// 	})
// }

export function getLocation(){
	return fetch({
		url:"/api/admin/dic/locations",
		method:"get"
	})
}


export function putSearch(obj){
	return fetch({
		url:"/api/tenant/customer/map",
		method:'post',
		data:obj
	})
}

export function getInstData(obj){
	return fetch({
		url:"/api/tenant/instrument/inst/distribution",
		method:'post',
		data:obj
	})
}
export function getCustData(obj){
	return fetch({
		url:"/api/tenant/instrument/cust/distribution",
		method:'post',
		data:obj
	})
}