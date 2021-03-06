////////////////////////
////Add Button to Header//
//////////////////////////

$(document).ready(function() {
	var menu = $('#menu');
	if (!menu.length) return;
	//Menu Item Support
	//Change link to the name of your link
	var link = $('<li/>', {
		'class': 'menu-item',
		html: '<a class="menu-item-title" href="/">Toolbox<span class="menu-item-title-icon"></span></a><div class="menu-item-drop"><table cellspacing="0"><tbody><tr><td class="menu-item-drop-column">'+
		'<ul class="menu-item-drop-column-list">'+
		//List items
		'<li><a href="http://google.com" target="_blank"><span class="name ellipsis">Google</span></a></li>'+
		'<li><a href="http://google.com" target="_blank"><span class="name ellipsis">Google</span></a></li>'+
		//Ending
		'</ul></td></tr></tbody></table></div>'
	});
	//Change link1 to the name of your link
	var link1 = $('<li/>', {
		'class': 'menu-item',
		html: '<a class="menu-item-title" href="/">Link<span class="menu-item-title-icon"></span></a><div class="menu-item-drop"><table cellspacing="0"><tbody><tr><td class="menu-item-drop-column">'+
		//Title in dropdown menu
		'<ul class="menu-item-drop-column-list">'+
		//List items
		'<li><a href="http://google.com" target="_blank"><span class="name ellipsis">Google</span></a></li>'+
		'<li><a href="http://google.com" target="_blank"><span class="name ellipsis">Google</span></a></li>'+
		//Ending
		'</ul></td></tr></tbody></table></div>'
	});
	menu.append(link).append(link1);
})();

