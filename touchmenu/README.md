<h1>Overview</h1>
<p>Touchmenu plugin is a solution for responsive navigation. The plugin is applied to your main navigation container, it creates a duplicate navigation element available for separate treatment and styling for resolutions below a certain breakpoint. </p>
<h1>How it Works</h1>
<p>Let's say you have your desktop ready navigation and it's placement in the document and structure doesn't allow you to achieve the effect you wish for the smaller screen sizes. This plugin creates a duplicate of your navigation element and prepends it to the <code>body</code>. Based on a given breakpoint parameter, it toggles the visibilty of these two navigation elements: on screen resolutions below a certain breakpoint it will hide the original navigation and show the newly created, smaller resolution frendly navigation - and vice versa. </p>
<p>The plugin takes care of the DOM element manipulation and the proper <code>class</code> attribute asignment. The positioning and transitions are done via CSS so make sure you study the CSS file well as this is where you will have to make modifications in order to make the navigation fit into your document. </p>
<h1>Using the Plugin</h1>
<p>In order to use this plugin, you will need a reference to jQuery library and a link to the touchmenu.js. You can initialize the plugin the &quot;usual way&quot;:</p>
<pre>jQuery(function($){
	
	$('.main_nav').touchmenu({breakpoint:800});
	
})</pre>

... but the suggested way to initialize is by using the <code>data-touchmenu</code> attribute on the <strong>navigation container</strong>. 

<pre>&lt;nav class=&quot;main_nav&quot; data-touchmenu data-touchmenu-breakpoint=&quot;800&quot;&gt;
	&lt;ul class=&quot;main_nav_list&quot;&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt; 
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Projects&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Clients&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt; 
&lt;/nav&gt;</pre>

<p><strong>Important</strong> thing to note is a structure of the navigation. The contents of the navigation container must be an unordered list UL. Since this has become some sort of a standard for navigation elements, I have used it as a starting point for this plugin.</p>
<p>So, based on the example above, the plugin will duplicate the UL, create a new navigation element and prepend it to the BODY.</p>
<p>The generated markup will look something like this:</p>
<pre>&lt;span class=&quot;touchmenu_toggler&quot;&gt;&lt;/span&gt;
&lt;nav class=&quot;touchmenu_nav touchmenu_inactive&quot;&gt;
	&lt;ul class=&quot;touchmenu_list&quot;&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Projects&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Clients&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt; 
&lt;/nav&gt;</pre>
<p>As you can notice, a SPAN element is added. This element acts as a toggler, user can click on it to show or hide the navigation.</p>
<p>Plugin also assigns a class name <code>touchmenu_close</code> or <code>touchmenu_open</code> to the BODY element, so we can use the CSS descendant selectors to modify each of the involved element's appearance.</p>
<h1>Options</h1>
<p>Available options are:</p>
<ul>
	<li>
		<p><strong>breakpoint</strong><br>
		default value: 780</p>
		<p>Screen size in pixels. Below this breakpoint, the newly created navigation will show and the original will be hide. Since this is the most commonly used parameter, there is an option of passing the values via specific data attribute: <code>data-touchmenu-breakpoint</code>.</p>
	</li>
	<li>
		<p><strong>class_prefix</strong><br>
		default value: 'touchmenu'</p>
		<p>Used for class name structuring. i.e. "touchmenu_nav" or "touchmenu_toggler". If you for some reason need to change the class names for the newly created elements, you can use this option to do so.</p>
	</li>
	<li>
		<p><strong>toggler_text</strong><br>
		default value: ''</p>
		<p>Use this option to add text to the toggler SPAN element. ie. <code>&lt;span class=&quot;touchmenu_toggler&quot;&gt;Menu&lt;/span&gt;</code></p>
	</li>
	<li>
		<p><strong>onshow</strong><br>
		default value: function(){}</p>
		<p>Callback function fired on menu show event.</p>
	</li>
	<li>
		<p><strong>onhide</strong><br>
		default value: function(){}</p>
		<p>Callback function fired on menu hide event.</p>
	</li>
</ul>