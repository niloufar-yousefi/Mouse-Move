let _mouse = document.getElementById('_mouse')
let _main = document.getElementsByTagName('main')[0]
let x = 0
let y = 0
let _menu = document.querySelectorAll('._menu')


//setting mouse
_main.addEventListener('mousemove', (e) => {   
    x = e.clientX
    y = e.clientY
    _mouse.classList.remove('hidden')  
    // _mouse.style.transform ='translateY('+ y + 'px) translateX('+ x + 'px)'
    _mouse.style.top=y+'px'
    _mouse.style.left=x+'px'
    })

//setting mouse click 
_main.addEventListener('mouseleave', () => {    
    _mouse.classList.add('hidden')  
})

//setting mouse click 
_menu.forEach(element => {
   element.addEventListener("mouseenter", function(){
    _mouse.classList.remove('h-[30px]','w-[30px]')    
    _mouse.classList.add('w-[60px]','h-[60px]','transition-all','duration-500')    
    setTimeout(() => {
        _mouse.classList.remove('transition-all','duration-500')
    }, 100);
   })
})

_menu.forEach(element => {
    element.addEventListener("mouseleave", function(){
    _mouse.classList.remove('h-[60px]','w-[60px]')    
    _mouse.classList.add('w-[30px]','h-[30px]')  
        
    })
 });


 



