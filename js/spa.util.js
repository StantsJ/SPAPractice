/*
 * File: js/spa.util.js
 * General javascript utilities
 *
 * Michael S. Mikowski - mmikowski at gmail dot com
 * These are routines I have created, compiled, and updated
 * since 1998, with inspiration from around the web.
 *
 * MIT License
 *
*/

/*jshint        browser:true,
  devel:true,   indent:2,     maxerr:50,
  newcap:true,  nomen:true,   plusplus:true,
  regexp:true,  white:true, laxbreak:true
*/
/*global $, spa */    

spa.util = (function () {
//---------- BEGIN MODULE SCOPE VARIABLES ----------
var makeError, setConfigMap;
//---------- END MODULE SCOPE VARIABLES ----------
	
//---------- BEGIN UTILITY METHODS ----------
//---------- END UTILITY METHODS ----------

//---------- BEGIN DOM METHODS ----------
//---------- END DOM METHODS ----------

//---------- BEGIN EVENT HANDLERS ----------
//---------- END EVENT HANDLERS ----------

//---------- BEGIN PUBLIC CONSTRUCTOR ----------
// Begin public construtor /makeError/
// Purpose		: a convenience wrapper to create an error object
// Arguments	: 
//	* name_text - the error name
//	* msg_text - the error message
//	* data - optional data attached to the error object
// Returns		: newly constructed error object
// Throws			: none
//
makeError = function ( name_text, msg_text, data ) {
	var error = new Error();
	error.name = name_text;
	error.message = msg_text;

	if ( data ){ error.data = data; }

	return error;
};
// End public constructor /makeError/
//---------- END PUBLIC CONSTRUCTOR ----------

//---------- BEGIN PUBLIC METHODS ----------
// Begin Public method /setConfigMap/
// Purpose		: Common code to set configs in feature modules
// Arguments	: 
//	* input_map - map of key-values to set in config
//	* settable_map - map of allowable keys to set
//	* config_map - map to apply settings to
// Returns		: true
// Throws			: none
//
setConfigMap = function ( arg_map ) {
	var
		input_map = arg_map.input_map,
		settable_map = arg_map.settable_map,
		config_map = arg_map.config_map,
		key_name, error;

	for ( key_name in input_map ){
		if ( input_map.hasOwnProperty( key_name ) ){
			if ( settable_map.hasOwnProperty( key_name ) ) {
				config_map[key_name] = input_map[key_name];
			}
			else {
				error = makeError( 'Bad Input', 
					'Setting config key |' + key_name + '| is not supported');
				throw error;
			}
		}
	}
};
// End public method /setConfigMap/

return {
	makeError : makeError,
	setConfigMap : setConfigMap
};
//---------- END PUBLIC METHODS ----------
})();
