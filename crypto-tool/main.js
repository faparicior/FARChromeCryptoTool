var apiType = localStorage.getItem("apiType");
var apiUrl = localStorage.getItem("apiUrl");
var apiToken = localStorage.getItem("apiToken");
var apiKey = localStorage.getItem("apiKey");

function copyToClipboard(word) {
    var itemEncoded = $('#text-to-decode');
    var itemDecoded = $('#text-to-encode');
    // var tempNode = document.getElementById("decrypt");
    // tempNode.value = word.selectionText; // <-- Selected text
    $('#key').val(apiKey);

    // console.log(itemDecoded);
    itemDecoded.on('change', function (){
        itemDecoded.focus();
        itemDecoded.select();
        var status = document.execCommand('copy', false, itemDecoded.val());
    });

    itemEncoded.val(word.selectionText);
    decryptLocalOrServer(itemDecoded);
 }

chrome.contextMenus.create({
    title: "Decode to clipboard",
    contexts:["selection"]
    // onclick: copyToClipboard // Removed in favor of chrome.contextMenus.onClicked
});

// Register a contextmenu click handler.
chrome.contextMenus.onClicked.addListener(copyToClipboard);

// document.addEventListener('copy', function(e) {
//   var textToPutOnClipboard = "some text which should appear in clipboard";
//   e.clipboardData.setData('text/plain', textToPutOnClipboard);
//   e.preventDefault();
// });