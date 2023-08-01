let slider =document.querySelector('.slider')

let slide = document.querySelectorAll('.slide')
let slideArray = Array.from(slide)
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


next.addEventListener('click',function(){
    function next(){
        let active = document.querySelector('.active')
        let currentIndex = slideArray.indexOf(active)
        if(currentIndex == slideArray.length - 1){
            next = slideArray[0]
            active.classList.remove('active')
            next.classList.add('active')
        }else{
            next = slideArray[ currentIndex + 1 ]
            active.classList.remove('active')
            next.classList.add('active')
        }
    }
    next()
})

prev.addEventListener('click',function(){
    function prev(){
        let active = document.querySelector('.active')
        let currentIndex = slideArray.indexOf(active)
        if(currentIndex == 0){
            prev = slideArray[ slideArray.length - 1 ]
            active.classList.remove('active')
            prev.classList.add('active')
        }else{
            prev = slideArray[ currentIndex -1]
            active.classList.remove('active')
            prev.classList.add('active')
        }
    }
    prev()
})