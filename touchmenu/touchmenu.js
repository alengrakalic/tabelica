/*

* Tabelica.com
* touchmenu.js
*
* requires specific structure
*	nav 
*		ul
*			li
*
*

*/

(function($){
		  
	$.fn.touchmenu = function(options){
		
		return this.each(function() {
			new module(this,options);
		});	
		
	};
	
	function module(element,options){
		
		this.element = $(element);
		this.defaults = {	
			breakpoint: 780,
			menuclass: 'touchmenu',	
			toggler: 'touchmenu_toggler',	
			collapsed: 'touchmenu_collapsed',
			expanded: 'touchmenu_expanded',
			onshow: function(){},
			onhide: function(){}
		}; 
		this.options = $.extend(this.defaults,options);
		this.init();
	};
	
	module.prototype.init = function(){
		
		var self = this;
		this.html = this.element.html();
		this.menu = $('<nav class="'+ this.options.menuclass +'" />').html(this.html).hide().prependTo('body');
		this.menulist = this.menu.find('ul:first');
		this.menuitems = this.menulist.find('li');
		this.toggler = $('<span class="'+ this.options.toggler +'" />').prependTo(this.menu).click(function(){ self.toggle() });		
		this.menuitems.each(function(){ self.submenu(this); });
		this.display();
		$(window).resize(function(){ self.display(); });		
		
	};
	
	module.prototype.display = function(){							
		if (this.getclientwidth() <= this.options.breakpoint){			
			this.element.hide(); this.menu.show(); 
		} else {
			this.element.show(); this.menu.hide(); 
		};		
	};
	
	module.prototype.toggle = function(){
		if( $(this.menulist).is(':visible') ){ 
			
			$(this.menulist).hide(); this.options.onhide(); 
		} else { 
			
			$(this.menulist).show(); this.options.onshow(); 
		}
	};
	
	module.prototype.submenu = function(li){
		var self = this;
		if( $(li).children('ul').length > 0 ){ 
			var ul = $(li).children('ul');
			var span = $('<span class="'+ self.options.collapsed +'" />').prependTo(li).click(function(){ self.expand(this,ul); });						
		};
	};
		
	module.prototype.expand = function(expander,ul){
		var self = this;
		if( $(ul).is(':visible') ){ 
			$(ul).hide(); $(expander).addClass(self.options.collapsed).removeClass(self.options.expanded);			
		} else { 
			$(ul).show(); $(expander).addClass(self.options.expanded).removeClass(self.options.collapsed);			
		};
	};
	
	module.prototype.getclientwidth = function(){
		var self = this;
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		return width;
	};
	
	// self initializing plugin
		
	$(function(){
		$('[data-touchmenu]').each(function(){				
			$(this).touchmenu( $(this).data('touchmenu-options') );		
		});
	});
	
	
})(jQuery);