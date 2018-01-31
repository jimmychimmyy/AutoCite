chrome.runtime.onMessage.addListener(
	function(request) {
		if(request.action == "oncopy") {
			alert(request.result+'\n'+
					request.author+'\n'+
					request.article);
		}
	}
);
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
				//alert("Alt-C detected!");
				chrome.tabs.executeScript({file:"oncopy.js"});
			}
			else{
				alert("Unrecognized Command!!");
			}
		});
