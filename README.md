MooTools Scrollbar
==================

A simple Apple-style productbrowser, that extends Slider using a container with Fx.Scroll.

![Screenshot](http://www.mild.ch/assets/images/scrollbar/snip.png)

### Features

 * **new** mouse wheel support
 * Animated scrolling
 * Flexible
 * Lightweight
 * Cross-Browser Compatible

### Submit examples on the wiki 

If you have a working scrollbar online add your link to [github.com/eerne/scrollbar/wiki](http://github.com/eerne/scrollbar/wiki)

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

 * code review
 * discuss API
 * remove Fx.Scroll dependecy (Version 2.0)
 * update to MooTools 1.3 (without compatibility)
 
Changelog
---------

 * added mouse wheel support
 * backported to MooTools 1.11
 * added to MooTools 1.3 ßeta 1 example