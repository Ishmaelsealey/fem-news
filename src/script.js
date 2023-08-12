const hamburgerMenu = document.querySelector('.hamburger-menu')
const menuItems = document.querySelector('.mobile-nav')
const menuIconClose = document.querySelector('.close')
const menuIconOpen = document.querySelector('.open')

hamburgerMenu.addEventListener('click', () => {
	if (menuItems.style.display == 'grid') {
		menuItems.style.display = 'none'
		menuIconClose.style.display = 'none'
		menuIconOpen.style.display = 'block'
	} else {
		menuItems.style.display = 'grid'
		menuIconOpen.style.display = 'none'
		menuIconClose.style.display = 'block'
	}
})
