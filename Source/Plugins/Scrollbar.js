/*
Script: Scrollbar.js
    Scrollbar 0.9.1

License:
	MIT-style license.

Copyright:
	Copyright (c) 2009 Enrique Erne (http://mild.ch).

*/
var ScrollBar = new Class({

	Extends: Slider,

	options: {
		fx: {}
	},

	initialize: function(scroller, slider, knob, options){
		switch (this.options.mode){
			case 'vertical':
				this.axis = 'y';
				this.property = 'top';
				break;
			case 'horizontal':
				this.axis = 'x';
				this.property = 'left';
		}
		this.knob = document.id(knob).set('tween', options.fx);
		this.slider = document.id(slider);
		this.parent(this.slider, this.knob, options);
		this.scroller = document.id(scroller);
		this.scrollElement = this.scroller.getFirst();
		this.steps = this.scrollElement.getSize()[this.axis] - this.scroller.getSize()[this.axis];
		this.scroll = new Fx.Scroll(this.scroller, options.fx);
		/*this.addEvent('complete', function(event){
			if (event.target !== knob) this.move();
		});*/
		this.ratio = this.steps / (this.slider.getSize()[this.axis] - this.knob.getSize()[this.axis]);
	},

	set: function(position){
		if($type(position) === 'element') position = position.getPosition(this.scrollElement)[this.axis] / this.ratio;
		position = position.limit(-this.options.offset, this.full -this.options.offset);
		this.move(position * this.ratio);
		this.knob.tween(this.property, position);
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
		if (event.target == this.knob) {
			this.knob.get('tween').cancel();
			return;
		}
		var position = event.page[this.axis] - this.element.getPosition()[this.axis] - this.half;
		position = position.limit(-this.options.offset, this.full -this.options.offset);
		this.set(position);
	}

});