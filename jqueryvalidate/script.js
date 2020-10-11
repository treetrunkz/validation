
$(function() {
    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 9
            },
            confirm: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 9 characters long"
            },
            confirm: {
                required: "Please enter a confirming password.",
                equalTo: "These passwords must match."
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
