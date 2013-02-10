(function(){
	var box = document.getElementById("box");
})()

function color (clr) {
	box.style.backgroundColor = clr;
}

function move (dir) {
    box.style[dir] = "0px";
	switch(dir) {
		case "right"		: {
			box.style.left = "50px";
			break;
		}
		case "left"			: {
			box.style.right = "50px";
			break;	
		}
		case "top"			: {
			box.style.bottom = "50px";
			break;
		}
		case "bottom"		: {
			box.style.top = "50px";
			break;
		}
	}
}

function shape (shap) {
	if(shap === "square") {
		box.style.borderRadius = "0%";
	}

	else if(shap === "circle") {
		box.style.borderRadius = "50%";	
	}
}

function sayThis(str){
    $("p.cmd em").text("\"" + str + "\"");
	console.log("Command: " + str);
	var words = str.split(" ");
	words.forEach(function(x){
		switch(x) {
			case "red"		:
			case "green"	:
			case "blue"		:
			case "yellow"	:
			case "brown"	:
			case "orange"	:
			case "cyan"		:
			case "gray"		:
			case "pink"		:
			case "purple"	:
			case "violet"	:
			case "yellow"	:
			case "black"	:
			case "white"	: {
				color(x);
				break;
			}

			case "right"	: {
				move("right");
				break;
			}
			case "left"		: {
				move("left");
				break;
			}
			
			case "up"		:
			case "top"		: {
				move("top");
				break;
			}

			case "down"		:
			case "bottom"	: {
				move("bottom");
				break;
			}

			case "circle"	:
			case "circles"	:
			case "round"	: {
				shape("circle");
				break;
			}

			case "box"		:
			case "square"	: {
				shape("square");
				break;
			}

			default			: {
				console.log("'" + x + "' not recognised!");
			}
		}

	});
}