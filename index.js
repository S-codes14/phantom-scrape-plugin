'use strict';

const Promise = require('bluebird');
const getPhantomHtml = require('./src/get-phantom-html.js');

/**
 * Makes phantom request if response contains html, returns original response body otherwise
 * @param {Object} response - response object from `request` module
 * @return {Promise} - resolved with body if success, rejected if error
 */
function handleResponse (response) {
	const contentType = response.headers['content-type'];
	const isHtml = contentType && contentType.split(';')[0] === 'text/html';
	if (isHtml) {
		return getPhantomHtml(response.request.href);
	} else {
		return Promise.resolve(response.body);
	}
}

class AfterResponsePhantomPlugin {
	apply(registerAction) {
		registerAction('afterResponse', ({response}) => handleResponse(response));
	}
}

module.exports = AfterResponsePhantomPlugin;
