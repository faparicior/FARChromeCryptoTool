$(function() {

    var apiType = localStorage.getItem("apiType");
    var apiUrl = localStorage.getItem("apiUrl");
    var apiToken = localStorage.getItem("apiToken");

    $('#radioBtn a').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);

        localStorage.setItem("apiType", sel);

        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    })

    $('#radioBtn').find('[data-title="' + apiType + '"]').click();

    if (apiType) {
        $("#api-type").val(apiType);
    }
    if (apiUrl) {
        $("#api-url").val(apiUrl);
    }
    if (apiToken) {
        $("#api-token").val(apiToken);
    }

    $('#api-type').change(function(e){
        console.log(e.target);
        localStorage.setItem("apiType", $(e.target).val());
    });

    $('#api-url').change(function(e){
        console.log(e.target);
        localStorage.setItem("apiUrl", $(e.target).val());
    });

    $('#api-token').change(function(e){
        console.log(e.target);
        localStorage.setItem("apiToken", $(e.target).val());
    });
});
