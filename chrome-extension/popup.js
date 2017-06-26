$(function() {
    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");
    var apiKey = localStorage.getItem("apiKey");

    $('#config').click(function(){
        window.location.replace('options.html');
    });

    $('#key').prop('disabled', true);

    if(apiType === 'LOCAL') {
        $('#key').val(apiKey);
    }

    $('#encrypt-text').click(function () {
        encryptLocalOrServer($('#text-to-decode'));
    });

    $('#decrypt-text').click(function () {
        decryptLocalOrServer($('#text-to-encode'));
    });
});