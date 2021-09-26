


$(document).ready(function(){
    $("#form-submit").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                lettersonly:true,


            },
            
            place:{
                required:true,
                lettersonly:true,
            },
            gender:{
                required:true
            },
            email:{
                required:true
            },
            number:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            employement:{
                required:true
            },
            education:{
                required:true
            },
            college:{
                required:true,
                lettersonly:true,
                minlength:5,
            },
            yearofgraduation:{
                required:true,
                number:true
            },
            more:{
                required:true
            
            },
            why:{
                required:true
            },
            motivate:{
                required:true
            },
            ref:{
                required:true
            },
            agree:{
                required:true,
            }


        }
       
    })

})


