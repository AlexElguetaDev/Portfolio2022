/*==== CHANGE BACKGROUND HEADER ====*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==== MODAL ====*/
const modalViews = document.querySelectorAll('.services__modal')
    modalBtns = document.querySelectorAll('.services__button')
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*==== SCROLL SECTIONS ACTIVE LINK ====*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*==== LIGHT DARK THEME ====*/ 

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// tema selecionado previamente
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase light-theme
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos si el usuario eligió un tema
if (selectedTheme) {
  // Si se cumple la validación, activamos o no el tema
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activar/desactivar el tema haciendo click
themeButton.addEventListener('click', () => {
    // Agregar o eliminar el tema claro
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos el tema y el icono actual que eligió el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==== SCROLL REVEAL ANIMATION ====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 500})
sr.reveal('.home__social, .home__scroll', {delay: 700, origin: 'bottom'})