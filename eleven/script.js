const img =  document.getElementsByTagName('img')[0]
const body = document.querySelector('body')
img.draggable = false

let intervalID = null
let currentDeg = 1

let transX = 0 
let transY = 0

const startMoving = (event)=>{
    const main = document.querySelector('main')
    transX += event.movementX
    transY += event.movementY
    main.style.transform = `translateX(${transX}px)`
    img.style.transform = `translateY(${transY}px)`
}

const event_StartRotate = (event)=>{
    event.stopPropagation()

    const img = event.target
    let cont = currentDeg
    console.log('Starting rotate')

    intervalID = setInterval(()=>{
        const rotateCommand = `rotate(${cont}deg)`
        cont+= 0.7
        img.style.transform = rotateCommand
        if(cont >= 360)
            cont = 1
        currentDeg  =cont
    },2)

    
    body.addEventListener('mousemove',startMoving)
    
}

const eventStopRotate = (event)=>{
    clearInterval(intervalID)

    body.removeEventListener('mousemove', startMoving)
}

body.addEventListener('mouseup', eventStopRotate)
body.addEventListener('mousedown', event_StartRotate)
body.addEventListener('mouseleave', eventStopRotate)

