$(function() {
    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");
    var apiKey = localStorage.getItem("apiKey");

    if(apiType === 'SERVER') {
        $('#key').prop('disabled', true);
    }

    $('#encrypt-text').click(function () {
        encryptAndVerifyDecrypt();
    });

    $('#decrypt-text').click(function () {
        decrypt();
    });

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