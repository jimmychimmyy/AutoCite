chrome.commands.onCommand.addListener(function (command) {
	if (command === "copied") {
		alert(window.getSelection().toString());
	}
});