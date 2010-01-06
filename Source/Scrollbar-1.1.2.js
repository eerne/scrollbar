/*
---
 
name: Scrollbar-1.1.2
description: A simple Apple-style productbrowser, that extends Slider using a container with Fx.Scroll.

version: 0.9.4
copyright: Enrique Erne (http://mild.ch)
license: MIT License
authors:
- Enrique Erne

requires:

provides: ScrollBar
 
...
*/



var ScrollBar = Slider.extend({
	
	/*Extends: Slider,*/

	options: {
		scroll: {/*
			onStart: $empty,
			onComplete: $empty,*/
			duration: 500
		},
		slider: {/*
			onChange: $empty(intStep),
			onComplete: $empty(strStep)*/
		},
		knob: {/*
			onStart: $empty,*/
			duration: 500
		}
	},

	initialize: function(scroller, slider, knob, options){
		this.setOptions(options);
		this.knob = $(knob);
		this.slider = $(slider);
		this.scroller = $(scroller);
		this.scrollElement = this.scroller.getFirst();
		this.parent(this.slider, this.knob, options.slider);
		this.steps = (this.scrollElement.getSize().size[this.z] - this.scroller.getSize().size[this.z]);
		this.ratio = this.steps / (this.slider.getSize().size[this.z] - this.knob.getSize().size[this.z] + 2*this.options.offset);
		this.options.scroll.duration = this.options.scroll.duration;
		this.scroll = new Fx.Scroll(this.scroller, options.scroll);
		this.knob.fx = new Fx.Style(this.knob, this.p, options.knob);
		this.knob.fx.set(-this.options.offset);
	},

	set: function(position){
		this.scroll.options.duration = this.options.scroll.duration;
		//if($type(position) === 'element') position = (position.getPosition()[this.z] - this.scroller.getPosition()[this.z]) / this.ratio;
		position = position.limit(-this.options.offset, this.max -this.options.offset);
		this.move((position * this.ratio) + (2 * this.options.offset));
		this.knob.fx.stop().start(this.knob.fx.now, position).chain(function(){
			this.fireEvent('complete', Math.round(position * this.ratio) + '');
		});
	},

	move: function(position){
		var to = $chk(position) ? position : this.step;
		if (this.options.mode === 'vertical') this.scroll.stop().scrollTo(0, to);
		else this.scroll.stop().scrollTo(to, 0);
	},

	draggedKnob: function(){
		this.knob.fx.stop();
		this.parent();
		var position = this.drag.value.now[this.z] * this.ratio;
		this.scroll.options.duration = 0;
		if (this.options.mode === 'vertical') this.scroll.scrollTo(0, position + this.options.offset);
		else this.scroll.scrollTo(position + 2*this.options.offset, 0);
		this.knob.fx.now = (position) / this.ratio;
	},

	clickedElement: function(event){
		this.knob.fx.stop();
		if (event.target === this.knob) {
			return;
		}
		this.scroll.options.duration = this.options.scroll.duration;
		var position = event.page[this.z] - this.element.getPosition()[this.z] - this.half;
		position = position.limit(-this.options.offset, this.max -this.options.offset);
		//console.log(position);
		this.set(position);
	}

});