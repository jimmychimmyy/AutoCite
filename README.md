## Auto Cite

This is a chrome extension that automatically generates a MLA citation when you copy text from a web page.

We will use Alt+C to copy the text then generate the citation and copy it to the clipboard

For now, it will be best to offload the citation generation to some third party site

possible APIs to use:
desktopCapture - capture content of windows/tabs
devtools.inspectedWindow - obtain list of resources within page
pageAction - (maybe), actions that can be taken on current page
permissions - self exlpanatory

TODO:
OK, we need to implement a copy functionality. I have set up Alt+C to copy text but it does not actually copy anything.
