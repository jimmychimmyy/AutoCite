// on copy event, send message to background.html
function onCopy(e) {
	chrome.extension.sendRequest({event: "copy"});
}

// register event listener
document.addEventListener('copy', onCopy, true);
