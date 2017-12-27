chrome.runtime.onMessage.addListener(
		function(request, sender) {
			if(request.action == "oncopy") {
				alert(request.result);
			}
		});
/*
 *
 */
chrome.commands.onCommand.addListener(
		function (command) {
			// detect user hit Alt+C
			// TODO: generate MLA formatted annotation to the clipboard
			// TODO: IS NOT WORKING FOR ALL TEXTS (e.g. not working for text contained within span tag)
			if (command === "copied") {
				//getHLContent();
				chrome.tabs.executeScript(
						null,
						{script:"oncopy.js"}, 
						function () {
						});
			}
			else{
				alert("Unrecognized Command!!");
			}
		});
