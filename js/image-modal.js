// TODO: Change Modal Title accordingly
$('#portfolio .portfolio-box').click(function(e){e.preventDefault(); $('#imagepreview').attr('src', $($(this).children()[0]).attr("src")); $('#imagemodal').modal('show');});