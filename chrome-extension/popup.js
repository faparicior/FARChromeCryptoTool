$(function() {
    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");
    var apiKey = localStorage.getItem("apiKey");

    if(apiType === 'SERVER') {
        $('#key').prop('disabled', true);
    }

    $('#encrypt-text').click(function () {
        if(apiType === "LOCAL") {
            localEncryptAndVerifyDecrypt();
        } else {
            encryptAndVerifyDecrypt();
        }
    });

    $('#decrypt-text').click(function () {
        if(apiType === "LOCAL") {
            localEncrypt();
        } else {
            decrypt();
        }
    });

    function localEncryptAndVerifyDecrypt()
    {
        var keyText = $('#key').val();
        var textToEncode = $('#text-to-encode').val();

        var key = CryptoJS.lib.WordArray.create(keyText);
        // var key = CryptoJS.lib.WordArray.random(16);
        // var key = CryptoJS.enc.Hex.parse(keyText);
        console.log(key.toString());
        var iv  = CryptoJS.lib.WordArray.random(16);

        var encrypted = iv + CryptoJS.AES.encrypt(textToEncode, key, { iv: iv });

        $('#text-to-decode').val(encrypted);

        var ivToExtract = encrypted;
        var iv2 = CryptoJS.enc.Hex.parse(ivToExtract.substring(0, 32));
        var textEncrypted = ivToExtract.substring(32);

        var decrypted = CryptoJS.AES.decrypt(textEncrypted, key, { iv: iv2 });
        console.log(decrypted.toString(CryptoJS.enc.Utf8));
    }

    function encryptAndVerifyDecrypt()
    {
        // apiUrl = 'http://localhost:3000/main.php';
        // apiToken = 'test_token';
    
        var textToEncode = $('#text-to-encode').val();

        $.ajax({
            type: "POST",
            url: apiUrl,
            data: {
                action: 'encode',
                textToEncode: textToEncode,
                token: apiToken
            },
            success: function(data, textStatus, jqXHR)
            {
                if(data === 'Incorrect token!!!') {
                    $('#text-to-decode').val(data);
                    return;
                }

                // TODO: Verify decrypt
                $('#text-to-decode').val(data);

                decrypt(function(data) {
                    if(textToEncode !== data) {
                        $('#text-to-decode').val('Error encoding!!!');
                    }
                });
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                alert('Server error encoding!!!');
            }
        });
    }

    function decrypt(callback)
    {
        // apiUrl = 'http://localhost:3000/main.php';
        // apiToken = 'test_token';

        $.ajax({
            type: "POST",
            url: apiUrl,
            data: {
                action: 'decode',
                textToDecode: $('#text-to-decode').val(),
                token: apiToken
            },
            success: function(data, textStatus, jqXHR)
            {
                if(callback) {
                    callback(data);
                    return;
                }
                $('#text-to-encode').val(data);
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                alert('Server error decoding!!!');
            }
        }); 
    }
});