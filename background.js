chrome.commands.onCommand.addListener(function (command) {
	// detect user hit Alt+C
	// generate MLA formatted annotation to the clipboard
	if (command === "copied") {
		chrome.tabs.executeScript(
				{code:"window.getSelection().toString();"},
				function(x) {
					alert(x);
				});
		//alert(window.getSelection().toString());
	}
});

