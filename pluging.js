
let usd = document.querySelector(".usd")
let yer = document.querySelector(".yer")
let btnChange= document.querySelector(".btn-change")
let boxWraper= document.querySelector(".wraper")


btnChange.addEventListener("click",function(){
    boxWraper.classList.toggle("active")
    yer.classList.toggle("active")
    usd.classList.toggle("active")
})

yer.addEventListener("input", function(){
    usd.value=((yer.value /600)).toFixed(2)
})
usd.addEventListener("input", function(){
    yer.value=((usd.value * 600)) 
})