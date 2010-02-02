MooTools Scrollbar
==================

A simple Apple-style productbrowser, that extends Slider using a container with Fx.Scroll.

![Screenshot](http://mild.ch/assets/images/scrollbar/snip.png)

### Features

 * **new** mouse wheel support
 * Animated scrolling
 * Flexible
 * Lightweight
 * Cross-Browser Compatible

How to use
----------

	var myProductbrowser = new ScrollBar('products', 'bar', 'knob'[, options]);

First argument should contain an element with an overflow, for example all your products. Bar and knob are used for the Slider instance.

### Options

Split into three parts

 * **scroll**: see [Fx.Scroll](http://mootools.net/docs/more/Fx/Fx.Scroll)
 * **slider**: see [Slider](http://mootools.net/docs/more/Drag/Slider)
 * **knob**: options for the Tween instance of the slider knob, see [Fx.Tween](http://mootools.net/docs/core/Fx/Fx.Tween) and [Fx](http://mootools.net/docs/core/Fx/Fx)

Todo
----

 * code review (anyone?)
 * discuss API
 * mooshell demo
 
Changelog
---------

 * added mouse wheel support
 * backported to MooTools 1.11