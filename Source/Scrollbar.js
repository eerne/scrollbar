/*
---
 
name: Scrollbar
description: A simple Apple-style productbrowser, that extends Slider using a container with Fx.Scroll.

version: 0.9.9
copyright: Enrique Erne (http://mild.ch)
license: MIT License
authors:
- Enrique Erne

requires: [Core/Class, Core/Element.Event, Core/Element.Dimensions, Core/Fx.Tween, Core/Fx.Transitions, Core/Selectors, More/Fx.Scroll, More/Slider]

provides: ScrollBar
 
...
*/

var ScrollBar = new Class({
	
	Extends: Slider,

	options: {
		scroll: {
			wheelStops: false/*
			onStart: $empty,
			onComplete: $empty*/
		},
		slider: {
			mode: 'horizontal',
			wheel: true/*
			onChange: $empty(intStep),
			onComplete: $empty(strStep)*/
		},
		knob: {/*
			onStart: $empty*/
		}
	},

	initialize: function(scroller, slider, knob, options){
		this.knob = document.id(knob).set('tween', options.knob);
		this.slider = document.id(slider);
		this.scroller = document.id(scroller);
		this.scrollElement = this.scroller.getFirst();
		this.parent(this.slider, this.knob, $extend(this.options.slider, options.slider));
		this.steps = this.scrollElement.getSize()[this.axis] - this.scroller.getSize()[this.axis];
		this.scroll = new Fx.Scroll(this.scroller, $extend(this.options.scroll, options.scroll));
		this.scroller.addEvent('mousewheel', function(event){
			this.element.fireEvent('mousewheel', event);
		}.bind(this));
		this.ratio = this.steps / (this.slider.getSize()[this.axis] - this.knob.getSize()[this.axis]);
	},
	
	move2: function(amount){
		this.set(this.knob.getPosition(this.slider)[this.axis] + amount);
	},

	set: function(position){
		if($type(position) === 'element') position = position.getPosition(this.scrollElement)[this.axis] / this.ratio;
		position = position.limit(-this.options.offset, this.full -this.options.offset);
		this.move(position * this.ratio);
		this.knob.tween(this.property, position).get('tween').chain(function(){
			this.fireEvent('complete', Math.round(position * this.ratio) + '');
		}.bind(this));
	},

	move: function(position){
		var to = $chk(position) ? position : this.step;
		if (this.options.mode === 'vertical') this.scroll.cancel().start(0, to);
		else this.scroll.cancel().start(to, 0);
	},

	draggedKnob: function(){
		this.parent();
		if (this.options.mode === 'vertical') this.scroll.cancel().set(0, this.step);
		else this.scroll.cancel().set(this.step);
	},

	clickedElement: function(event){
		if (event.target === this.knob){
			this.knob.get('tween').cancel();
			return;
		}
		var position = event.page[this.axis] - this.element.getPosition()[this.axis] - this.half;
		position = position.limit(-this.options.offset, this.full -this.options.offset);
		this.set(position);
	},
	
	scrolledElement: function(event){
		var mode = (this.options.mode == 'horizontal') ? (event.wheel < 0) : (event.wheel > 0);
		this.move2(mode ? -this.stepSize * 100 : this.stepSize * 100);
		event.stop();
	}

});
