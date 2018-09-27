import fetch from 'utils/fetch';

// export function getInstrument(query){
// 	return fetch({
// 		url:"/api/tenant/instrument/list",
// 		method:"post",
// 		params: query
// 	})
// }
export function getLocation(){
	return fetch({
		url:"/api/admin/dic/locations",
		method:"get"
	})
}
export function pushSearch(query,obj){
	return fetch({
		url:"/api/tenant/instrument/list",
		method:"post",
		data:obj,
		params: query
	})
}

export function checkDetails(instrumentId){
	return fetch({
		url:"/api/tenant/instrument/view/"+instrumentId,
		method:"get"
	})
}