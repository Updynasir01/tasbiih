let tasbiih = document.querySelector("#Tasbiih")
let resetbutton = document.querySelector("#resetbtn")
let increasebutton = document.querySelector("#increasbtn")



let initialvalue = 0

increasebutton.addEventListener("click", function(){
    initialvalue++
    tasbiih.innerHTML = initialvalue
  
 if(initialvalue ==4){
        document.body.style.backgroundColor = "red"
    }
    else if(initialvalue ==5){
        document.body.style.backgroundColor = "blue"
    }
   else if(initialvalue ==6){
        document.body.style.backgroundColor = "green"
    }
   else if(initialvalue ==7){
        document.body.style.backgroundColor = "orange"
    }
   else if(initialvalue ==8){
        document.body.style.backgroundColor = "yellow"
    }

    else{
        document.body.style.backgroundColor = ""
    }
    
    

   
})

resetbutton.addEventListener("click", function(){
    initialvalue = 0
    tasbiih.innerHTML = initialvalue


})

