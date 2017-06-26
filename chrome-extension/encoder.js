function encryptLocalOrServer(item)
{
    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");
    var apiKey = localStorage.getItem("apiKey");

    var keyText = $('#key').val();

    var textToEncode = $('#text-to-encode').val();
    var encrypted = '';

    if(apiType === "LOCAL") {
        item.val(localEncryptAndVerifyDecrypt(keyText, textToEncode));
    } else {
        encrypted = encryptAndVerifyDecrypt(textToEncode, item);
    }

    return encrypted;
}

function decryptLocalOrServer(item)
{
    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");
    var apiKey = localStorage.getItem("apiKey");

    var keyText = $('#key').val();
    var textToDecode = $('#text-to-decode').val();
    var decrypted = '';

    if(apiType === "LOCAL") {
        item.val(localDecrypt(keyText, textToDecode));
        item.change();
    } else {
        decrypted = decrypt(textToDecode, item);
    }

    return decrypted;    
}

function localEncryptAndVerifyDecrypt(keyText, textToEncode)
{
    var key = CryptoJS.lib.WordArray.create(keyText);
    var iv  = CryptoJS.lib.WordArray.random(16);
    var encrypted = iv + CryptoJS.AES.encrypt(textToEncode, key, { iv: iv });

    var ivToExtract = encrypted;
    var iv2 = CryptoJS.enc.Hex.parse(ivToExtract.substring(0, 32));
    var textEncrypted = ivToExtract.substring(32);

    var decrypted = CryptoJS.AES.decrypt(textEncrypted, key, { iv: iv2 });

    if (decrypted.toString(CryptoJS.enc.Utf8) === textToEncode) {
        return encrypted;
    }

    return "Error encrypting..."
}

function localDecrypt(keyText, textToDecode)
{
    var key = CryptoJS.lib.WordArray.create(keyText);
    var iv = CryptoJS.enc.Hex.parse(textToDecode.substring(0, 32));

    var textEncrypted = textToDecode.substring(32);
    var decrypted = CryptoJS.AES.decrypt(textEncrypted, key, { iv: iv });

    return decrypted.toString(CryptoJS.enc.Utf8);
}

function encryptAndVerifyDecrypt(textToEncode, item)
{
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");

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
                item.val(data);
            }

            decrypt(data, item, function(dataDecoded) {
                if(textToEncode !== dataDecoded) {
                    item.val('Error encoding!!!');
                }
                return data;
            });
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            item.val('Server error encoding!!!');
        }
    });
}

function decrypt(textToDecode, item, callback)
{
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");

    $.ajax({
        type: "POST",
        url: apiUrl,
        data: {
            action: 'decode',
            textToDecode: textToDecode,
            token: apiToken
        },
        success: function(data, textStatus, jqXHR)
        {
            if(callback) {
                item.val(callback(data));
            } else {
                item.val(data);
            }
            item.change();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            item.val('Server error decoding!!!');
            item.change();
        }
    }); 
}
