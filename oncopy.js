// on copy event, send message to background.html
function onCopy(e) {
	chrome.extension.sendRequest({event: "copy"});
}

// register event listener
document.addEventListener('copy', onCopy, true);

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
