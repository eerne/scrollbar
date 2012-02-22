/*
---
 
name: Scrollbar

description: A simple Apple-style productbrowser, that extends Slider using a container.

version: 2.0.0-wip

copyright: Enrique Erne (http://mild.ch/)

license: MIT License

authors:
- Enrique Erne

requires: [Core/Class, Core/Element.Event, Core/Element.Dimensions, Core/Fx.Tween, Core/Fx.Transitions, Core/Selectors, More/Slider]

provides: ScrollBar
 
...
*/

var ScrollBar = new Class({
	
	Extends: Slider,

	options: {
		onTick: function(pos){
			if (this.options.snap) pos = this.toPosition(this.step);
			if (this.knobFx && pos >= 0) this.knob.tween(this.property, pos);
			else if(pos >= 0) this.knob.setStyle(this.property, pos);
		},
		onChange: function(step){
			this.scroll(step / this.ratioScroll);
		},
		/*onComplete: function(step){},*/
		initialStep: 0,
		snap: false,
		offset: 0,
		range: false,
		wheel: true,
		steps: 100,
		mode: 'horizontal',
		scroll: {
			// onStart: function(){},
			// onComplete: function(){},
			duration: 200,
			link: 'cancel',
			transition: 'linear'
		},
		knob: {
			duration: 200,
			transition: 'linear',
			link: 'cancel'
		}
	},

	initialize: function(scroller, slider, knob, options){
		this.setOptions(options);
		this.container = document.id(scroller);
		this.scroller = this.container.getFirst();
		this.parent(slider, knob);
		
		this.scroller.set('tween', this.options.scroll);
		this.knob.set('tween', this.options.knob);
		
		this.scrollFx = this.scroller.get('tween');
		if (this.options.knob.duration || this.options.knob.transition) this.knobFx = this.knob.get('tween');
		
		if (this.options.wheel) this.container.addEvent('mousewheel', function(event){
			this.element.fireEvent('mousewheel', event);
		}.bind(this));
		
		this.ratio = this.steps / (this.element.getSize()[this.axis] - this.knob.getSize()[this.axis]);
		this.ratioScroll = this.steps / (this.scroller.getSize()[this.axis] - this.container.getSize()[this.axis]);
	},
	
	scroll: function(pos){
		if(pos >= 0) this.scroller.tween(this.property, -pos);
	},
	
	draggedKnob: function(){
		this.parent();
		this.scrollFx.cancel();
		this.scroller.setStyle(this.property, -this.step / this.ratioScroll);
	},
	
	clickedElement: function(event){
		if (this.knobFx && event.target === this.knob) this.knobFx.cancel();
		this.parent(event);
	},
	
	scrolledElement: function(event){
		if (this.knobFx) this.knobFx.cancel();
		var mode = (this.options.mode == 'horizontal') ? (event.wheel < 0) : (event.wheel > 0);
		this.set(this.step + 10 * ((mode) ? -this.stepSize : this.stepSize));
		event.stop();
	},
	
	set: function(pos){
		if (typeOf(pos) === 'element') pos = pos.getPosition(this.scroller)[this.axis] * this.ratioScroll;
		this.parent(pos);
	}

});
