let nose = document.getElementById('register')
let nose2 = document.getElementById('sesion')
let tampoco = document.getElementById('hidden1')
let tampoco2 = document.getElementById('hidden2')
let menos = document.getElementById('conf_register')
let menos2 = document.getElementById('canc_register')
let niidea = document.getElementById('conf_sesion')
let niidea2 = document.getElementById('canc_sesion')
nose.addEventListener('click', ()=>{
    tampoco.style.left = '40%'
    tampoco.style.opacity = '1'
})
nose2.addEventListener('click', ()=>{
    tampoco2.style.left = '40%'
    tampoco2.style.opacity = '1'
})
menos.addEventListener('click', ()=>{
    tampoco.style.left = '70%'
    tampoco.style.opacity = '0'
})
menos2.addEventListener('click', ()=>{
    tampoco.style.left = '70%'
    tampoco.style.opacity = '0'
})
niidea.addEventListener('click', ()=>{
    tampoco2.style.left = '10%'
    tampoco2.style.opacity = '0'
})
niidea2.addEventListener('click', ()=>{
    tampoco2.style.left = '10%'
    tampoco2.style.opacity = '0'
})
