'use strict';

export function checkStatus(response) {
    if(response.status >= 200 && response.status < 300 || 
		response.status === 304) {
		return response;
	}

	let error =  new Error(response.statusText);
	error.response = response;
	throw error;
}