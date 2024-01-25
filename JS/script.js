        const form = document.getElementsByTagName('form')[0];
        const inputs = document.querySelectorAll('.inputs');
        const spans_error = document.querySelectorAll('.error');
        const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        form.addEventListener('submit',(event) =>{
            event.preventDefault()
            validate_name()
            validate_last_name()
            validate_email()
            validate_password()
        })


        function set_error(index){
            inputs[index].style.border = "1px solid red"
            spans_error[index].style.display = "block"   
            inputs[index].placeholder = ""  
        }

        function remove_error(index){
            inputs[index].style.border = ""
            spans_error[index].style.display = ""
        }


        function validate_name(){
            if(inputs[0].value.length < 3){
                set_error(0)
            }
            else{
                remove_error(0)
            }
        }

        function validate_last_name(){
            if(inputs[1].value.length < 3){
                set_error(1)
            }
            else{
                remove_error(1)
            }
        }

        function validate_email(){
            if(!email_regex.test(inputs[2].value)){
                const email_error = document.getElementById("email")
                email_error.placeholder = 'email@exemple.com.br';
                email_error.classList.add("email-error")
                set_error(2)
            }
            else{
                remove_error(2)
                const email_error = document.getElementById("email")
                email_error.classList.remove("email-error")
            }
        }

        function validate_password(){
            if(inputs[3].value.length < 8){
              set_error(3)
            }
            else{
                remove_error(3)
            }
        }
       
       

      
    // get_email.innerHTML = "<input type='email' id='email' name='email'  placeholder='email.exemple@'>"
           