document.querySelector(".btn-convert").addEventListener("click", function () {
    //gets user value and parse it to integer
	let userInput = parseInt(document.querySelector(".input-number").value);
    
    //read dropdown selection
    let dropDownFrom = document.querySelector(".convert-from");
    let dropDownFromValue = dropDownFrom.options[dropDownFrom.selectedIndex].value;
    
    let dropDownTo = document.querySelector(".convert-to");
    let dropDownToValue = dropDownTo.options[dropDownTo.selectedIndex].value;
    
    //checks first dropdown and calls appropriate function
	const result = document.getElementById("result");
    if (dropDownFromValue === "mb") {
        result.textContent = mbConverter(userInput, dropDownToValue);
    } else if (dropDownFromValue === "kb") {
        result.textContent = kbConverter(userInput, dropDownToValue);
    } else if (dropDownFromValue === "gb") {
        result.textContent = gbConverter(userInput, dropDownToValue);
    } else if (dropDownFromValue === "tb") {
        result.textContent = tbConverter(userInput, dropDownToValue);
    } 
});

//converting functions
function kbConverter (input, to) {
	if (to === "mb") {
		return input / 1000 + " MB";
	} else if (to === "gb") {
		return input / 10000 + " GB";
	} else if (to === "tb") {
		return input / 1000000 + " TB";
	} else {
        return "Chose another unit";
    }
}

function mbConverter (input, to) {
	if (to === "kb") {
		return input * 1000 + " KB";
	} else if (to === "gb") {
		return input / 1000 + " GB";
	} else if (to === "tb") {
        return input / 1000000 + " TB";
    } else {
        return "Chose another unit";
    }
}

function gbConverter (input, to) {
	if (to === "kb") {
		return input * 1000000 + " KB";
	} else if (to === "mb") {
		return input * 1000 + " MB";
	} else if (to === "tb") {
        return input / 1000 + " TB";
    } else {
        return "Chose another unit";
    }
}

function tbConverter (input, to) {
	if (to === "kb") {
		return input * 1000000000 + " KB";
	} else if (to === "mb") {
		return input * 1000000 + " MB";
	} else if (to === "gb") {
        return input * 1000 + " GB";
    } else {
        return "Chose another unit";
    }
}

//disabling BUTTONS of e,.-+ (input type number prevents other keys)
function disableKey(event) {
	var x = event.keyCode;
	if (x == 69) {
		event.preventDefault();
	} else if (x == 190) {
		event.preventDefault();
	} else if (x == 189) {
		event.preventDefault();
	} else if (x == 188) {
		event.preventDefault();
	} else if (x == 187) {
		event.preventDefault();
	}
}








