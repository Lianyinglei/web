import fetch from 'utils/fetch';

// export function getCalibration(query){
// 	return fetch({
// 		url:"/api/tenant/calibration/list",
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

export function putSearchData(obj){
	return fetch({
		url:"/api/tenant/calibration/list",
		method:"post",
		data:obj
	})
}

export function checkDetails(id){
	return fetch({
		url:"/api/tenant/calibration/view/"+id,
		method:"get"
	})
}