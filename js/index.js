const items = document.getElementById('nav-items')

function menuClick (index) {
    for(let i=0; i<items.children.length; i++) {
        if(i === index) {
            items.children[i].style.transition = 'all 0.3s esac'

            items.children[i].classList.add('active')
            items.children[i].children[0].classList.add('active-link')
        } else {
            items.children[i].classList.remove('active')
            items.children[i].children[0].classList.remove('active-link')
        }
        

    }
    
}