## Auto Cite

This is a chrome extension that automatically generates a MLA citation when you copy text from a web page.

## Getting Started

Download Zip or clone.

Navigate to chrome://extensions in your browser

Check the box for Developer Mode

Select Load Unpacked Extension and select the directory for AutoCite

For more informtion: https://developer.chrome.com/extensions


## TODO

need to implement a copy functionality. Alt+C should copy and store the highlighted text

We will use Alt+C to copy the text then generate the citation and copy it to the clipboard

For now, it will be best to offload the citation generation to some third party site

possible APIs to use:
desktopCapture - capture content of windows/tabs

devtools.inspectedWindow - obtain list of resources within page

pageAction - (maybe), actions that can be taken on current page

permissions

## Issues

Alt+C (on mac at least) auto scrolls to bottom of the page

## Q&A
*Q: How can we extract the raw HTML from the current tab?*
A: Inject a script using chrome.tab.executeScript, and write a script(onCopy.js) to scrape the data. 
	Message the result back to bacjground.js
	Source: https://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension

*Q: How can we dynamically update hello.html to include all citations and copied text?*
A: chrome.extension.sendMessage??
	use document.getElementByID("Sources")
	use document.createElement to make a new entry
	use document.createTextNode to add content to created element
	use document.appendChild to add the new entry to the .html
	use document.removeChild to remove citation that has been deleted
