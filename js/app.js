let btn = document.querySelector(".btn")

let off = document.querySelector(".off")

let swt = document.querySelector(".switch")

let on = document.querySelector(".on")

let body = document.querySelector("body")

let img = document.querySelector("img")


let x = 1
function btnon () {
    if (x == 1) {
        on.className = "width on"

        off.className = "off"

        btn.style = "background-color: #fff;"

        body.style = "background-color: #fff"

        img.src = "./img/on.png"
        
        x = x - 1

        console.log(x)
    }else if (x == 0){
        on.className = "on"

        off.className = "off width"

        btn.style = "background-color: #474747;"

        body.style = "background-color: #000"

        img.src = "./img/off.png"

        x = x + 1

        console.log(x)
    }

}

btn.addEventListener("click", btnon)
