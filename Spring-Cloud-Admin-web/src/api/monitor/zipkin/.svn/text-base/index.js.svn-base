import fetch from 'utils/fetch';

// export function getCustomer(){
// 	return fetch({
// 		url:"/api/tenant//customer/list",
// 		method:"get"
// 	})
// }
export function getLocation(){
	return fetch({
		url:"/api/admin/dic/locations",
		method:"get"
	})
}
export function putSearch(query,obj){
	return fetch({
		url:"/api/tenant/customer/list",
		method:'post',
		data:obj,
		params:query
	})
}
export function exportData(obj){
	return fetch({
		url:"/api/tenant/customer/excel/export",
		method:"post",
		data:obj
	})
}

export function checkDetails(id){
	return fetch({
		url:"/api/tenant/customer/view/"+id,
		method:"get"
	})
}

export function getProvinceData(){
	return fetch({
		url:"/api/tenant/address/all/province",
		method:'get'
	})
}
export function getCityData(provincecode){
	return fetch({
		url:"/api/tenant/address/all/city?provincecode="+provincecode,
		method:"get"
	})
}

export function getCountyData(citycode){
	return fetch({
		url:"/api/tenant/address/all/county?citycode="+citycode,
		method:'get'
	})
}

export function addNewForm(obj){
	return fetch({
		url:"/api/tenant/customer/save",
		method:'post',
		data:obj
	})
}


export function getDetailData(id){
	return fetch({
		url:"/api/tenant/customer/view?id="+id,
		method:"get"
	})
}


export function getdicLevel(parentId){
	return fetch({
		url:"/api/tenant/dic/nodes?parentId="+parentId,
		method:"get"
	})
}