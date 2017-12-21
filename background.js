chrome.commands.onCommand.addListener(function (command) {
	if (command === "copied") {
		alert("copied");
		console.log("copied");
	}
});