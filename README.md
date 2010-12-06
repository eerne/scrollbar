MooTools Scrollbar
==================

A simple Apple-style productbrowser (extends Slider) for MooTools 1.3.x.

![Screenshot](http://www.mild.ch/assets/images/scrollbar/snip.png)

### Features

 * mouse wheel support
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

see [Slider](http://mootools.net/docs/more/Drag/Slider)

### Additional

 * **scroll**: (Object) options for the container's Tween instance
 * **knob**: (Object) options for the slider knob's Tween instance, see [Fx](http://mootools.net/docs/core/Fx/Fx) and [Fx.Tween](http://mootools.net/docs/core/Fx/Fx.Tween)

Todo
----

 * code review
 * discuss API
 
Changelog
---------

 * removed Fx.Scroll dependency
 * updated to MooTools 1.3 (without compatibility)
 * added mouse wheel support
 * backported to MooTools 1.11
 * added to MooTools 1.3 ßeta 1 example
