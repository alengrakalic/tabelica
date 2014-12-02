<h1>Overview</h1>
<p>Tabelica is a repository of jQuery plugins I coded for my own need.</p>
<p>In time some of those plugins outgrown me so I decided to share some of them with you. The list will grow in time as I prepare and document the code.</p>
<p>If you have a need for a simple plugin, it doesn't hurt to request it at grakalic.com. I might find the time to code it and add it to the repository.</p>
<p>Tabelica plugins are released under the terms of the <a href="http://en.wikipedia.org/wiki/MIT_License">MIT license</a>.</p>
<h1>Basic how-to</h1>
<p>If you are familiar with the basic usage of jQuery plugins then you already know what you need to use Tabelica's plugins. </p>
<p>However, each of the plugins found here have an useful feature, and that is self initializing. What that means is that you can initiate plugin from the HTML by the use of element's <code>data</code> attributes and this is the way to do it:</p>
<p>The self initializing data attribute's name is derived from the plugin's name. i.e. to self initialize touchmenu plugin, the correct <code>data</code> attribute to add to the element would be <code>data-touchmenu</code>.</p>
<p>You can pass options to the plugin using the "data" - plugin name - "options" construction as a name for another <code>data</code> attribute added to the element. i.e. <code>data-touchmenu-options</code>. This attribute should have options written in a JSON format.</p>
<p>Here's an example of applying <code>data</code> attributes to the <code>nav</code> element in order to initialize touchmenu plugin:</p>
<pre>
&lt;nav class=&quot;main_nav&quot; data-touchmenu data-options='{&quot;breakpoint&quot;:&quot;800&quot;}'&gt;
	&lt;ul class=&quot;main_nav_list&quot;&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt; 
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Projects&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Clients&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt; 
&lt;/nav&gt;
</pre>
<p>Additionally, some plugins are able to read specific <code>data</code> attributes and accept values as plugin options. That is done to simplify the process of passing the commonly used plugin options.</p>
<p>Here's an above example written with using the plugin specific <code>data</code> attribute:</p>
<pre>
&lt;nav class=&quot;main_nav&quot; data-touchmenu data-touchmenu-breakpoint=&quot;800&quot;&gt;
	&lt;ul class=&quot;main_nav_list&quot;&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt; 
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Projects&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Clients&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt; 
&lt;/nav&gt;
</pre>
<p>Each of the plugins comes with a simple demo page so you can see it in action.</p>
<h1>Plugins</h1>
<ul>
<li>Touchmenu - <a href="https://github.com/alengrakalic/tabelica/tree/master/touchmenu">git</a> | <a href="http://tabelica.com/touchmenu/demo.html">demo page</a></li>
</ul>
