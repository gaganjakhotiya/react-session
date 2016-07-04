(function() {
	var colors = {
		red: 0,
		green: 0,
		blue: 0
	};

	function getHexColorCode(red, green, blue) {
		return "#" + ((1 << 25) + (red << 16) + (green << 8) + (blue << 0)).toString(16).substr(1);
	}

	function updateDOM() {
		for (var key in colors) {
			document.querySelector('#' + key + '-value').innerText = colors[key];
		}
		var colorCode = getHexColorCode(colors.red, colors.green, colors.blue);
		document.querySelector("#hexcode-box").innerText = colorCode;
		document.querySelector("#color-box").style.background = colorCode;
	}

	function onColorRangeChange(e) {
		e.stopPropagation();
		colors[e.target.name] = e.target.value;
		updateDOM();
	}

	// for ie compatibility and smooth transition in chrome and safari
	var eventName = navigator.userAgent.indexOf("MSIE") != -1 ? 'change' : 'input';
	document.querySelector('#color-bars').addEventListener(eventName, onColorRangeChange, false);
	updateDOM();
})()
