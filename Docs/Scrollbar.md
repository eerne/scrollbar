Class: ScrollBar {#ScrollBar}
===============================

Expect some API changes, it is still BETA!

### Notes:

- ScrollBar requires the page to be in [Standards Mode](http://hsivonen.iki.fi/doctype/).

### Implements:

[Options][]
[Events][]

### Syntax:

	var myProductBrowser = new ScrollBar('products', 'bar', 'knob'[, options]);

### Arguments:

1. options  - are directly passed to the Slider call see also http://mootools.net/docs/more/Drag/Slider
2. fx  - fx is passed to Fx.Scroll for the moment but likely to change 

#### Options:

* option1 - (*integer*: defaults to 0     ) lorem ipsum.
* option2 - (*integer*: defaults to 0     ) lorem ipsum.
* option3 - (*boolean*: defaults to true  ) If set to true,  lorem ipsum.
* option4 - (*boolean*: defaults to false ) If set to true,  lorem ipsum.

### Returns:

* (*object*) A new ScrollBar instance.

## Events:

### eventName

* (*function*) Function to do stuff.

#### Signature:

	onEventName(arg1, arg2)

#### Arguments:

1. arg1 - (*object*) Lorem ipsum.
2. arg2 - (*object*) Lorem ipsum.

### Examples:

	var myProducts = new ScrollBar('products', 'bar', 'knob', {
		offset: -2,
		fx: {
			duration: 2500,
			transition: 'elastic:out'
		}
	});

### Demos:

- ScrollBar - <http://mild.ch/productslider/>
