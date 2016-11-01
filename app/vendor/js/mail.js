$(function () {
    // $('#contact-form').validator();
    console.log("paprike");
    $('#mailMe').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
        var url = "/mail.php";
        $.ajax({
            type: "POST",
            url: url,
            data: $('#mailMe').serialize(),
            success: function (data){
              console.log(data);
            },
            error: function(xhr, textStatus, error){
              console.log(xhr.statusText);
               console.log(textStatus);
               console.log(error);
           }
            // {
            //     var messageAlert = 'alert-' + data.type;
            //     var messageText = data.message;
            //
            //     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            //     if (messageAlert && messageText) {
            //         $('#mailMe').find('.messages').html(alertBox);
            //         $('#mailMe')[0].reset();
            //     }
            // }
        });
        return false;
    }
  })
});
