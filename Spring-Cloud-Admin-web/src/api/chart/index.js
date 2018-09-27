import fetch from 'utils/fetch';

export function lineData(obj){
	return fetch({
		url:"/api/tenant/expend/broken",
		method:'post',
		data:obj
	})
}


export function  anylicData(obj){
	return fetch({
		url:"/api/tenant/expend/expend/count",
		method:'post',
		data:obj
	})
}

export function pieData(obj){
	return fetch({
		url:"/api/tenant/expend/project/count",
		method:'post',
		data:obj
	})
}
