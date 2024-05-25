// obtener cada boton por su id 
let nose = document.getElementById('register')
let nose2 = document.getElementById('sesion')
let menos = document.getElementById('conf_register')
let menos2 = document.getElementById('canc_register')
let niidea = document.getElementById('conf_sesion')
let niidea2 = document.getElementById('canc_sesion')
// obtener la sesion y registro por su id 
let tampoco2 = document.getElementById('hidden2')
let tampoco = document.getElementById('hidden1')
// estos son los botones iniciales 
nose.addEventListener('click', ()=>{
    tampoco.style.display = 'flex'
    setTimeout(()=>{
        if(window.innerWidth>1000){
            tampoco.style.left = '40%'
        } else {
            tampoco.style.left = '10%'
        }
        tampoco.style.opacity = '1'
    },0)
})
nose2.addEventListener('click', ()=>{
    tampoco2.style.display = 'flex'
    setTimeout(()=>{
        if(window.innerWidth>1000){
            tampoco2.style.left = '40%'
        } else {
            tampoco2.style.left = '10%'
        }
        tampoco2.style.opacity = '1'
    },0)
})
// estos dos botones son para registro 
menos.addEventListener('click', ()=>{
    tampoco.style.left = '70%'
    tampoco.style.opacity = '0'
    setTimeout(() => {
        tampoco.style.display = 'none'
    },600);
})
menos2.addEventListener('click', ()=>{
    tampoco.style.left = '70%'
    tampoco.style.opacity = '0'
    setTimeout(() => {
        tampoco.style.display = 'none'
    },600);
})
// estos dos botones son para sesion 
niidea.addEventListener('click', ()=>{
    tampoco2.style.left = '10%'
    tampoco2.style.opacity = '0'
    setTimeout(() => {
        tampoco2.style.display = 'none'
    },600);
})
niidea2.addEventListener('click', ()=>{
    tampoco2.style.left = '10%'
    tampoco2.style.opacity = '0'
    setTimeout(() => {
        tampoco2.style.display = 'none'
    },600);
})
