/*
---
 
name: Scrollbar-swipe

description: PowerTools/mobile for Scrollbar.

version: 2.0.0-wip

copyright: Enrique Erne (http://mild.ch/)

license: MIT License

authors:
- Enrique Erne

requires: [ScrollBar, Mobile/Mouse, Mobile/Swipe]

provides: ScrollBar.swipedElement
 
...
*/

ScrollBar.implement({
	
	attach: function(){
		this.parent();
		this.container.store('swipe:cancelVertical', true);
		this.swipedElement = this.swipedElement.bind(this);
		this.container.addEvent('swipe', this.swipedElement);
		//this.knob.addEvent('touch', this.clickedElement);
	},
	
	detach: function(){
		this.parent();
		this.container.removeEvent('swipe', this.swipedElement);
		//this.knob.removeEvent('touch', this.clickedElement);
	},
	
	swipedElement: function(event){
		//console.log(event.direction);
		var delta = event.start[this.axis] - event.end[this.axis];
		this.set(this.step + delta);
		event.stop();
	}
	
});
