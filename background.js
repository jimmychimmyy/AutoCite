chrome.commands.onCommand.addListener(function (command) {
	// detect user hit Alt+C
	// generate MLA formatted annotation to the clipboard
	// IS NOT WORKING FOR ALL TEXTS (e.g. not working for text contained within span tag)
	if (command === "copied") {
		chrome.tabs.executeScript(
				{code:"window.getSelection().toString();"},
				function(x) {
					alert(x);
				});
		//alert(window.getSelection().toString());
	}
});

/*
* Meta data we need: URL, website title, article title, date published, date accessed, author/contributor, publisher/sponser, (medium? - is source pdf, word doc, ebook, etc?)
*
*
* MLA 8 citation structure: author name, title of article/page, website title, publisher name, date of publication, URL
*
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

