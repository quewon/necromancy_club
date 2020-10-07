const CARET = {
	init: function() {
		let inputs = document.getElementsByTagName("input");
		var span = document.createElement("span");
		span.className = "caret";
		span.textContent = "_";

		for (let i=0; i<inputs.length; i++) {
			inputs[i].parentElement.appendChild(span);
			span.style.left = parseFloat(getStyle(inputs[i], "left")) + inputs[i].value.length + "ch";
			span.style.top = getStyle(inputs[i], "top");
		}
	},
	update: function() {
		let inputs = document.getElementsByTagName("input");
		for (let i=0; i<inputs.length; i++) {
			inputs[i].parentElement.querySelector(".caret").style.left = inputs[i].value.length + "ch";
		}
	}
}

function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	if(strValue == "auto"){
	   if(strCssRule == "width"){
	      strValue = oElm.offsetWidth;
	   }
	   if(strCssRule == "height"){
	      strValue = oElm.offsetHeight;
	   }
	   if(strCssRule == "top") {
	   	strValue = oElm.offsetTop;
	   }
	}
	return strValue;
}