function copyToClipboard( text ){
	var copyDiv = document.createElement('div');
	copyDiv.contentEditable = true;
	document.body.appendChild(copyDiv);
	copyDiv.innerHTML = text;
	copyDiv.unselectable = "off";
	copyDiv.focus();
	document.execCommand('SelectAll');
	document.execCommand("Copy", false, null);
	document.body.removeChild(copyDiv);
}

chrome.commands.onCommand.addListener(function (command) {
	// detect user hit Alt+C
	// generate MLA formatted annotation to the clipboard
	if (command === "copied") {
		chrome.tabs.executeScript(
				{code:"window.getSelection().toString();"},
				function(x) {
					var res = "Copied from AutoCite: ".concat(x);
					copyToClipboard(res);
					alert(res);
				});
		//alert(window.getSelection().toString());
	}
});

