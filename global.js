

var map;								// initialize the variable to hold the map

var MAP_CENTER = [21.05,-100.65];		// Set all map starting parameters
var MAP_MIN_ZOOM = 2;
var MAP_MAX_ZOOM = 18;
var MAP_INIT_ZOOM = 10;


var STAMEN_MAP_TYPE = "toner";		// Set which type of stamen map we want as a base layer.
										// 	options include: "terrain", "watercolor", and "toner"	

var DATA_URL = "https://dl.dropboxusercontent.com/s/w2le11pok7c781e/munis.geojson";					
	
var NO_MUN_SELECTED = -1;	
var mun = NO_MUN_SELECTED; 								// holds the user's selected municipality
var geojson; 											// global to hold the geojson dataset
	
var click_type = "single"; 										// global to parse single and double clicks
// MAYBE THE STUFF BELOW IS UNNECESSARY... //
										
										
										
var POPUP_OFFSET = [88, 6]; 			// offset of the popup from the point
var SPIDER_Z_OFFSET = 100; 				// define the z-axes for the various layers, spidered points			
var BASE_Z_OFFSET = 10; 				//	and base points. 
var SPIDER_LABEL_OFFSET = [-50, -8];	// offset for spider date labels 
var X_OFFSET = 999999;					// The x-index-offset for the x-out button

