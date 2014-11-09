/*
 * File: js/spa.shell.js
 * Root namespace module
*/

/*jslint        browser:true, continue:true,
  devel:true,   indent:2,     maxerr:50,
  newcap:true,  nomen:true,   plusplus:true,
  regexp:true,  sloppy:true,   vars:true,
  white:true
*/
/*global $, spa */    

spa.shell = (function(){
	//---------- Begin Module Scope Variables ----------
	var
		configMap = {
			main_html: String()
 				 + '<div id="spa">'
 					 + '<div class="spa-shell-head">'
 						 + '<div class="spa-shell-head-logo"></div>'
 						 + '<div class="spa-shell-head-acct"></div>'
 						 + '<div class="spa-shell-head-search"></div>'
 					 + '</div>'
 					 + '<div class="spa-shell-main">'
 						 + '<div class="spa-shell-main-nav"></div>'
 						 + '<div class="spa-shell-main-content"></div>'
 					 + '</div>'
 					 + '<div class="spa-shell-foot"></div>'
 					 + '<div class="spa-shell-chat"></div>'
 						 + '<div class="spa-shell-modal"></div>'
 				 + '</div>'
		},
		stateMap = { $container: null },
		jquery = {},

		setJqueryMap, initModule;
	//---------- End Module Scope Variables ----------
	
	//---------- Begin Utility Methods ----------
	//---------- End Utility Methods ----------

	//---------- Begin Utility Methods ----------
	// Begin DOM Method /setJqueryMap/
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = { $container: $container}
	}
	//---------- End Utility Methods ----------
}());
