function copyToClipboard(word) {
    var tempNode = document.getElementById("decrypt");
    tempNode.value = word.selectionText; // <-- Selected text
    tempNode.select();
    var status = document.execCommand('copy', false, null);

    if(status) alert('successful');

    else alert('unsuccessful');
}

chrome.contextMenus.create({
    title: "Copy decoded text",
    contexts:["selection"],
    onclick: copyToClipboard // Removed in favor of chrome.contextMenus.onClicked
});

// Register a contextmenu click handler.
// chrome.contextMenus.onClicked.addListener(copyToClipboard);
