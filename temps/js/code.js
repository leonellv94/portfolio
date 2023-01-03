
// -----------mobile navbar----------

document.getElementById('btn_bar').onclick = function () {activarMenu()};
document.getElementById('btn_bar2').onclick = function () {activarMenu2()};
const btnmenu = document.querySelectorAll('.btn_header');
const menu = document.getElementById('hidden_menu');
const navBarButton = document.getElementById('btn_bar')
const navBarButton2 = document.getElementById('btn_bar2')

function activarMenu() {
        menu.classList.toggle('_visible');
        navBarButton.style.display = 'none'
        navBarButton2.style.display = 'inline'
}
function activarMenu2() {
    menu.classList.toggle('_visible');
    navBarButton.style.display = 'inline'
    navBarButton2.style.display = 'none'
}

btnmenu.forEach(button => {
    button.addEventListener('click', () => {
        menu.classList.remove('_visible');
        navBarButton.style.display = 'inline'
        navBarButton2.style.display = 'none'
    })
});

// ----------desktop navbar scroll--------------

const navBar = document.querySelector('.nav_header')
const navBtn = document.querySelector('.nav__ul')
const langBtn = document.querySelector('.language_swapper')

addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        navBar.classList.add ('scroll_navBar')
        navBtn.classList.add ('scroll_navBtn')
        langBtn.classList.add ('scroll_navBtn')
    } else {
        navBar.classList.remove ('scroll_navBar')
        navBtn.classList.remove ('scroll_navBtn')
        langBtn.classList.remove ('scroll_navBtn')
    }
})

// ----------presentation text----------------

const presentation = document.querySelector('.presentation')

addEventListener('load', ()=> {
    setTimeout(()=> {
        // presentation.style.marginLeft = '0px'
        // presentation.style.marginRight = '0px'
        presentation.style.opacity = '1'
    }, 100)
})




// -----------Language change-----------

const check = document.querySelector('.check');
check.addEventListener('click', language1);

function language1() {
    let id = check.checked;
    if(id == true) {
        location.href = "en/index.html";
    } else {
        location.href = "../index.html";
    }
}

const check_mobile = document.querySelector('.check_mobile');
check_mobile.addEventListener('click', language2);

function language2() {
    let id = check_mobile.checked;
    if(id == true) {
        location.href = "en/index.html";
    } else {
        location.href = "../index.html";
    }
}

// ----------projects content--------------

const backArrow = document.getElementById('back')
const nextArrow = document.getElementById('next')
const projects = document.querySelectorAll('.project')
let value;

nextArrow.addEventListener('click', ()=>changePosition(1))
backArrow.addEventListener('click', ()=>changePosition(-1))

function changePosition(change){
    const currentElement = Number(document.querySelector('.project__active').dataset.id)
    value = currentElement
    value += change
    if(value === 0 || value == projects.length+1){
        value = value === 0 ? projects.length : 1;
    }

    projects[currentElement-1].classList.toggle('project__active')
    projects[value-1].classList.toggle('project__active')
}

// interval 



// addEventListener('load', ()=> {
//     setInterval(()=> {
//         changePosition(1)
//         function changePosition(change){
//             const currentElement = Number(document.querySelector('.project__active').dataset.id)
//             value = currentElement
//             value += change
//             if(value === 0 || value == projects.length+1){
//                 value = value === 0 ? projects.length : 1;
//             }
//             projects[currentElement-1].classList.toggle('project__active')
//             projects[value-1].classList.toggle('project__active')
//         }}, 4000)
// })

// ----------- habilities ------------ 

const programLangs = document.querySelectorAll('.habilities_content');

function toggleActive(e) {
    if (e.propertyName.includes('flex') && this.classList.contains('open-active')) {
        this.classList.add('panel-open')
    }
}

function toggleOpen() {
    this.classList.toggle('open-active')
    if (this.classList.contains ('panel-open')){
        this.classList.remove('panel-open')
    }
}


programLangs.forEach(langs => langs.addEventListener('click', toggleOpen))
programLangs.forEach(langs => langs.addEventListener('transitionend', toggleActive));





// -----------Form-----------

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mail-btn')

$form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:leonel-vilar@hotmail.com?subject=nombre: ${form.get('name')} correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
    $form.reset()
}
