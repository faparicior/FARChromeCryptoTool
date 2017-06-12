$(function() {
    $('#radioBtn a').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);
        
        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    })

    
    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");

    if (apiType) {
        $("api-type").val(apiType);
    }
    if (apiUrl) {
        $("api-url").val(apiUrl);
    }
    if (apiToken) {
        $("api-token").val(apiToken);
    }
});
