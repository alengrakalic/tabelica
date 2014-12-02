// touchmenu.js // (c) 2014 Alen Grakalic // tabelica.com 

;(function($){
	
	'use strict';
		  
	$.fn.touchmenu = function(options){
		
		return this.each(function() {
			new module(this,options);
		});	
		
	};
	
	function module(element,options){
		
		this.element = $(element);
		this.defaults = {	
			breakpoint: 780,
			class_prefix: 'touchmenu',
			toggler_text: '',	
			onshow: function(){},
			onhide: function(){}
		}; 
		this.options = $.extend(this.defaults,options);
		this.init();
		
	};
	
	module.prototype.init = function(){
		
		var self = this;
		
		this.body = $('body').addClass(this.options.class_prefix + '_closed');	;
		this.html = this.element.html();
		this.menu = $('<nav class="'+ this.options.class_prefix +'_nav '+ this.options.class_prefix +'_inactive" />').html(this.html).prependTo(this.body);
		this.menu.find('*').removeClass(); // remove all copied class names to avoid problems with the styling
		this.menu_list = this.menu.find('ul:first').addClass(this.options.class_prefix + '_list');
		this.menu_items = this.menu_list.find('li');
		this.toggler = $('<span class="'+ this.options.class_prefix +'_toggler">'+ this.options.toggler_text +'</span>').prependTo(this.body).click(function(){ self.toggle() });				
		
		this.menu_items.each(function(){ self.submenu( $(this) ); });		
		this.show();
		$(window).resize(function(){ self.show(); });		
		
	};

	// check to see if we need to show the touchmenu or not	
	module.prototype.show = function(){			
					
		if(this.getclientwidth() <= this.options.breakpoint){		
			this.element.hide();
			this.menu.show();
			this.toggler.show(); 
			this.body.addClass(this.options.class_prefix + '_closed');
		} else {
			this.element.show();
			this.menu.hide();
			this.toggler.hide(); 
			this.body.removeClass(this.options.class_prefix + '_open ' + this.options.class_prefix + '_closed');
		};		
	
	};
	
	// toggle the menu list
	module.prototype.toggle = function(){	
		
		if( !$(this.body).hasClass(this.options.class_prefix + '_open') ){ 			
			this.body
				.addClass(this.options.class_prefix + '_open')	
				.removeClass(this.options.class_prefix + '_closed');	 
			this.options.onshow(); 
		} else { 						
			this.body
				.addClass(this.options.class_prefix + '_closed')
				.removeClass(this.options.class_prefix + '_open');	 
			this.options.onhide(); 			
		};
		
	};
	
	// handle submenus
	module.prototype.submenu = function(li){
		
		var self = this;
		
		if( li.children('ul').length > 0 ){ 			
			var ul = li.children('ul').addClass(this.options.class_prefix + '_sub_list');
			var span = $('<span class="'+ this.options.class_prefix + '_sub_toggler' +'" />').prependTo(li).click(function(){ self.submenu_expand(this,ul,li); });						
		};
		
	};
	
	// expande/collapse submenus	
	module.prototype.submenu_expand = function(expander,child,parent){
		
		var self = this;
		
		if( !parent.hasClass(this.options.class_prefix + '_sub_active') ){ 
			parent.addClass(this.options.class_prefix + '_sub_active');					
		} else { 
			parent.removeClass(this.options.class_prefix + '_sub_active');		
		};
		
	};
	
	// get the viewport width
	module.prototype.getclientwidth = function(){
		
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		return width;
	
	};
	
	// self initializing plugin		
	$(function(){
		$('[data-touchmenu]').each(function(){	
			var elem = $(this);
			var opts = elem.data('touchmenu-options') || {};	
			if( elem.data('touchmenu-breakpoint') ) opts.breakpoint = elem.data('touchmenu-breakpoint');
			elem.touchmenu(opts);			
		});
	});
	
	
})(jQuery);