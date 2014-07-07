var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var Surface = famous.core.Surface;

// create the main context
var mainContext = Engine.createContext();

// your app here
var logo = new Surface({
    size: [200, 200],
    properties: {
    	backgroundColor: "#F00"
    }
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform : function(){
        return Transform.rotateY(0.002 * (Date.now() - initialTime));
    }
});

var positioningModifier = new Modifier({
	transform: Transform.translate(0, 400, 0)
});

mainContext.add(positioningModifier).add(centerSpinModifier).add(logo);
mainContext.setPerspective(1000);