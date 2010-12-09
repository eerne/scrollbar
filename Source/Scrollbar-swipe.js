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

provides: ScrollBarSwipe
 
...
*/

ScrollBar.implement({
	
	attach: function(){
		this.parent();
		this.container.store('swipe:cancelVertical', true);
		this.container.addEvent('swipe', function(event){
			//event.direction
			console.log(event.start.x - event.end.x);
			this.fireEvent('mousewheel', event);
		});
	}
	
});