$(()=>{
    const inputCode = $("#code");
    const boton = $("#bt");


    inputCode.on({

        keyup: function(){
        if(inputCode.val()){
            inputCode.css("background-color", "cyan");
            inputCode.css("color", "blue")
        } else{
            inputCode.css("background-color", "white");
            inputCode.css("color", "black");
        }
    },
        focusout: function(){
            if(inputCode.val()){
                inputCode.css("background-color", "lime");
                inputCode.css("color", "green")
            }
        }
})


    boton.one({

        click: function(){
            boton.text("¿Estás SEguro?")
            boton.addClass("bg-warning");
        },

        dblclick: function(){
            boton.text("OK")
            boton.removeClass("bg-warning")
            boton.addClass("bg-primary")
        },

        mouseleave: function(){
            if(boton.text() === "OK"){
                boton.removeClass("bg-primary")
                boton.text("Comprado")
                boton.addClass("bg-success")
            }
        }

    })




})