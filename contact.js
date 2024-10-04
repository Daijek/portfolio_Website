const contact_inputs = document.querySelectorAll(".form_container form div")


contact_inputs.forEach((input) => {
    try{
        const current_input = input.querySelector("input")
        
        const current_placeholder = input.querySelector("div")
        current_input.addEventListener("focus", () => {
            current_placeholder.classList.remove("placeholder")
            current_placeholder.classList.add("placeholder_text_present")
        })
    }
    catch(err){
        
    }

    try{
        const current_input = input.querySelector("input")
        
        const current_placeholder = input.querySelector("div")
        current_input.addEventListener("blur", () => {
            console.log("I am here rerer")
        if (current_input.value == ""){
            console.log(current_input.value == "")
            current_placeholder.classList.remove("placeholder_text_present")
            current_placeholder.classList.add("placeholder")
        }
        else{
            current_placeholder.classList.remove("placeholder")
            current_placeholder.classList.add("placeholder_text_present")
        } 
        })
    }

    catch(err){
        
    }
})

const contact_texarea = document.querySelector(".form_container form .message_container textarea")
const current_textarea_placeholder = document.querySelector(".form_container form .message_container div")

contact_texarea.addEventListener("focus", () => {
    current_textarea_placeholder.classList.remove("placeholder")
    current_textarea_placeholder.classList.add("placeholder_text_present")
})

contact_texarea.addEventListener("blur", () => {
    if (contact_texarea.value == ""){
        current_textarea_placeholder.classList.remove("placeholder_text_present")
        current_textarea_placeholder.classList.add("placeholder")
    }
    else{
        current_textarea_placeholder.classList.remove("placeholder")
        current_textarea_placeholder.classList.add("placeholder_text_present")
    }
    
})

document.querySelector("#contact_form").addEventListener("submit", (e) =>{
    setTimeout(() => {
        document.querySelector("#name").value = ""
        document.querySelector("#email").value = ""
        document.querySelector("#phone").value = ""
        document.querySelector("#message").value = ""
    }, 200)
})