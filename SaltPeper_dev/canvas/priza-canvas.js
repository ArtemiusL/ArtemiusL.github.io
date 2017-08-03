(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 79,
	height: 76,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F97563").ss(1,1,1).p("AAKgDQgDACgCABAgJgDQABADACAE");
	this.shape.setTransform(-0.1,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F97563").ss(1.2,1,1).p("AACBPQAEhKAwg2QASgUAOgFQASgIAeAFIAMADQAGACAFADQAMAGADAKQAEAIAAAHQAAAIgEAIQgCAFgEAFQgFAGgDADQgDADgJAFQgFADgPAHQgLAGgLAIQgSALggAQQgfAQgOAHAgFBPQgBgTgLgYQgMgbgGgMQgGgQgEgIQgNgWgXgMQgUgLgdAAQgLAAgEABIgPAIQgJAGgDAFQgFAJAFAJQAAAAALAQQAkAjAoASIAmAPQAWAJALAPQACADACAC");
	this.shape_1.setTransform(0,-23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E66154").s().p("AgnCAIAAi9IBOhCIAAD/g");
	this.shape_2.setTransform(-0.2,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F97563").s().p("AgniPIAfAAIAFAAIAHAAIAHAAIgGAEIAGgEIAcAAIAADcIhOBCgAgFiHIgDgIIADAIgAALiPg");
	this.shape_3.setTransform(-0.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-32.9,37.3,64.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AiGBzIENjl");
	this.shape.setTransform(17,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC152").s().p("AkwBzIAAjlIJhAAIkPDlg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9AD44").s().p("AiGBzIENjlIAADlg");
	this.shape_2.setTransform(17,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-12.5,62,25);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AiSB8IEOjkIAXgT");
	this.shape.setTransform(-11.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEEgIIAAARAkDAJIAAgR");
	this.shape_1.setTransform(0,-11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCC152").s().p("AiGhxIENAAIkNDjg");
	this.shape_2.setTransform(-12.4,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9AD44").s().p("AkDByIENjjID6AAIAADjg");
	this.shape_3.setTransform(0,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8A5E3B").s().p("AAKAJIAYgRIgYARIkNAAIAAgRIElAAIDiAAIAAARg");
	this.shape_4.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-13.4,54,26.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-11.5,61.1,23.1);


// stage content:
(lib.prize = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(40.1,34.9,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.95,y:36.6},0).wait(1).to({scaleY:0.89,y:38.4},0).wait(1).to({scaleY:0.84,y:40.2},0).wait(1).to({scaleY:0.78,y:41.9},0).wait(1).to({scaleY:0.81,y:40},0).wait(1).to({scaleY:0.83,y:38},0).wait(1).to({scaleY:0.85,y:36},0).wait(1).to({scaleY:0.88,y:34.1},0).wait(1).to({scaleY:0.9,y:34.3},0).wait(1).to({scaleY:0.93,y:34.4},0).wait(1).to({scaleY:0.95,y:34.6},0).wait(1).to({scaleY:0.97,y:34.8},0).wait(1).to({scaleY:1,y:34.9},0).wait(11));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(39.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.3,scaleY:0.95,x:39.8,y:32.8},0).wait(1).to({scaleY:0.89,y:34.8},0).wait(1).to({scaleY:0.84,y:36.8},0).wait(1).to({scaleY:0.78,y:38.8},0).wait(1).to({scaleY:0.81,y:36.7},0).wait(1).to({regX:0,scaleY:0.83,x:39.5,y:34.7},0).wait(1).to({regX:0.3,scaleY:0.85,rotation:-0.5,x:39.6,y:32.9},0).wait(1).to({scaleY:0.88,rotation:-1,x:39.4,y:31.1},0).wait(1).to({scaleY:0.9,rotation:0,x:40,y:31.2},0).wait(1).to({scaleY:0.93,rotation:1,x:40.6,y:31.3},0).wait(1).to({scaleY:0.95,rotation:0.7,x:40.3,y:31.2},0).wait(1).to({scaleY:0.97,rotation:0.3,x:40.1,y:31.1},0).wait(1).to({scaleY:1,rotation:0,x:39.8,y:31},0).wait(11));

	// Слой 5
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(39.5,54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:0.95,y:55.4},0).wait(1).to({scaleY:0.89,y:56.1},0).wait(1).to({scaleY:0.84,y:56.8},0).wait(1).to({scaleY:0.78,y:57.5},0).wait(1).to({scaleY:0.81,y:56},0).wait(1).to({scaleY:0.83,y:54.6},0).wait(1).to({scaleY:0.85,y:53.2},0).wait(1).to({scaleY:0.88,y:51.7},0).wait(1).to({scaleY:0.9,y:52.3},0).wait(1).to({scaleY:0.93,y:53},0).wait(1).to({scaleY:0.95,y:53.6},0).wait(1).to({scaleY:0.97,y:54.2},0).wait(1).to({scaleY:1,y:54.8},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,40.7,61.1,64.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;