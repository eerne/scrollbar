/*
Script: Scrollbar.js
    Scrollbar

License:
	MIT-style license.

Copyright:
	Copyright (c) 2009 Enrique Erne (http://mild.ch).

*/
var ScrollBar = new Class({
	Extends: Slider,
	options: {
		slideable: {}
	},
	initialize: function(slideable, slider, knob, options){
		this.parent(slider, knob, options);
		this.scroll = new Fx.Scroll(slideable, options.slideable);
		this.addEvent('complete', function(event){
			if (event.target != knob) this.move();
		});
	},
	set: function(step){
		this.parent(step);
		if (this.options.mode === 'vertical') this.scroll.cancel().start(0, step ? step : this.step);
		else this.scroll.cancel().start(step ? step : this.step);
	},
	move: function(step){
		if (this.options.mode === 'vertical') this.scroll.cancel().start(0, step ? step : this.step);
		else this.scroll.cancel().start(step ? step : this.step);
	},
	draggedKnob: function(){
		this.parent();
		if (this.options.mode === 'vertical') this.scroll.cancel().set(0, this.step);
		else this.scroll.cancel().set(this.step);
	}
});