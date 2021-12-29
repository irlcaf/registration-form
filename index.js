function validation(){  
    $("form[name='registration']").validation({
        rules: {
            first_name: "required",
            last_name:"required",
            email:"required",
            title_picture:"required",
            picture_description:"not required",
            upload_picture:"required",
        },
        messages:{
            first_name: "Please enter your name",
            last_name:"Please enter your last name",
            email:"Please enter a valid email address",
            title_picture:"Please enter the name of the piece of art",
            picture_description:"not required",
            upload_picture:"Please upload a valid format",
        },

        function(form){
            form.submit();
        }
    })
}

function nameValidation(){
    $("input[name='first_name']")
}



$(document).ready(function(){

    $('form').on('change', "input[name='email']", function(e){
        let valid_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if ( valid_pattern.test(registration.email.value)){
            return (true)
        }else{
            alert("You have entered an invalid email address!")
            return (false)
        }
    });

});