/*
 *
 */
chrome.commands.onCommand.addListener(
		function (command) {
			// detect user hit Alt+C
			// TODO: generate MLA formatted annotation to the clipboard
			// TODO: IS NOT WORKING FOR ALL TEXTS (e.g. not working for text contained within span tag)
			if (command === "copied") {
				getHLContent();
			}
			else{
				alert("Unrecognized Command!!");
			}
		});

/*
 * grabs the user-highlighted content
 * TODO: Add content into hello.html
 * TODO: Find a way to get the citation
 */
function getHLContent() {
	// inject script to grab user highlighted text
	chrome.tabs.executeScript(
			{code:"window.getSelection().toString();"},
			// callback function, copies the highlighted string 
			// into clipboard
			function(x) {
				if(x === undefined) 
					alert("Could not copy highlighted text!");
				else {
					var res = "Copied from AutoCite: ".concat(x);
					copyToClipboard(res);
					chrome.browserAction.getPopup(
							function(x) {
								console.log(x);
							});
					alert(res);
				}
			});
	//alert(window.getSelection().toString());
}

/*
 * copies the text into the system clipboard
 */
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


/*
 * Meta data we need: 
 * 		URL, website title, article title, date published, date accessed, 
 * 		author/contributor, publisher/sponser, (medium? - is source pdf, 
 * 		word doc, ebook, etc?)
 *
 * MLA 8 citation structure: author name, title of article/page, website title,
 * 	 publisher name, date of publication, URL
 */

// function to get contents of html page
function getContent(url, callback) {
	var request = new XMLHttpRequest();
	request.onload = function() {
		if (callback && typeof(callback) === 'function') {
			callback(this.responseXML);
		}
	}

	request.open('GET', url);
	request.responseType = 'document';
	request.send();
}

// function to get author name
function getAuthor() {}

// function to get title of article/page
function getArticle() {}

// function to website title
function getSite() {}

// function to get publisher
function getPublisher() {}

// function to get publication date
function getPubDate() {}

// we can grab the url ourselves

// function to generate citation
function generateCitation() {}

// function to add citation to clipboard
function toClipboard() {}















