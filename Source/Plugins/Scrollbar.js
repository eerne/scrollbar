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
		this.knob = knob;
		this.parent(slider, knob, options);
		this.scroll = new Fx.Scroll(slideable, options.slideable);
		this.addEvent('complete', function(event){
			if (event.target != knob) this.move();
		});
		// this.ratio = ((2000-802)/657); // ScrollableWidth, Container, SliderWidth-KnobWidth
		this.ratio = ((slideable.getFirst().getSize().x - slideable.getSize().x) / (slider.getSize().x - knob.getSize().x)); 
	},
	set: function(step){
		this.knob.tween('left', step);
		this.move(step * this.ratio);
	},
	move: function(step){
		if (this.options.mode === 'vertical') this.scroll.cancel().start(0, step ? step : this.step);
		else this.scroll.cancel().start(step ? step : this.step);
	},
	draggedKnob: function(){
		this.parent();
		if (this.options.mode === 'vertical') this.scroll.cancel().set(0, this.step);
		else this.scroll.cancel().set(this.step);
	},
	clickedElement: function(event){
		if (event.target == this.knob) return;
		var position = event.page[this.axis] - this.element.getPosition()[this.axis] - this.half;
		position = position.limit(-this.options.offset, this.full -this.options.offset);
		this.set(position);
	}
});