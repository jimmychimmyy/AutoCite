/**
// on copy event, send message to background.html
function onCopy(e) {
chrome.extension.sendRequest(
{event: "copy"});
}

// register event listener
document.addEventListener('copy', onCopy, true);

*/

/*
 * grabs the user-highlighted content
 * TODO: Add content into hello.html
 * TODO: Find a way to get the citation
 */
function getHLContent() {
	var x = window.getSelection().toString();
	// callback function, copies the highlighted string 
	// into clipboard
	if(x === undefined) {
		alert("Could not copy highlighted text!");
		return "";
	}
	else {
		var res = "Copied from AutoCite: ".concat(x);
		copyToClipboard(res);
	}
	return x;
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
function getAuthor() {
	var authorMeta = document.getElementsByName("author");
	if(authorMeta) 
		return authorMeta.content;
}

// function to get title of article/page
function getArticle() {
	var articleTitle = document.getElementsByTagName("title");
	if(articleTitle)
		return articleTitle[0].innerHTML;
}

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


chrome.runtime.sendMessage({
	action: "oncopy", 
	result: getHLContent(), 
	author: getAuthor(),
	article: getArticle()
});
