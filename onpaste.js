/**
	// on copy event, send message to background.html
function onCopy(e) {
chrome.extension.sendRequest(
{event: "copy"});
}

// register event listener
document.addEventListener('copy', onCopy, true);

*/

function getCitation() {
	return "No Citation Generated"
}

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
		//alert(x);
		copyToClipboard(x);
		//copyToClipboard(res);
	}
	return x;
	//alert(window.getSelection().toString());
}

/*
 * copies the text into the system clipboard
 */
function copyToClipboard( text ){
	document.execCommand("copy");
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
	var doc = document.documentElement.innerHTML;
	return doc;
}

// function to get author name
function getAuthor() {
	try {
		var authorMeta = document.getElementsByName("author");
		if(authorMeta) 
			return authorMeta[0].getAttribute('content');
	} catch (e) {
		return "could not find author: " + e;
	}

}

// function to get title of article/page
function getArticle() {
	var articleTitle = document.getElementsByTagName("title");
	if(articleTitle)
		return articleTitle[0].innerHTML;
}

// function to website title
function getSite() {
	return document.title();
}

// function to get publisher
function getPublisher() {}

// function to get publication date
// TODO - may need to implement a more general query selector
function getPubDate() {
	var element = document.querySelector('meta[property="article:published"]');
	if (element)
		return element.getAttribute("content");
}

// we can grab the url ourselves

// function to generate citation
function generateCitation() {}


chrome.runtime.sendMessage({
	action: "onpaste",
	result: getCitation(),
});
