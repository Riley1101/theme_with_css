let root = document.querySelector(':root')
let toggleBtn = document.querySelector('.header__nav__theme__toggle')
let theme;

window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('web-theme')) {
        theme = localStorage.getItem('web-theme')
    } else {
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            theme = 'dark'
            toggleBtn.checked = true
        } else {
            theme = 'light'
            toggleBtn.checked = false
        }
    }

    root.setAttribute('theme', theme)
})

toggleBtn.addEventListener('click', function () {
    if (theme === 'dark') {
        root.setAttribute('theme', 'light')
        toggleBtn.checked = false
        theme = 'light'
        localStorage.setItem('web-theme', 'light')
    } else {
        root.setAttribute('theme', 'dark')
        toggleBtn.checked = true
        theme = 'dark'
        localStorage.setItem('web-theme', 'dark')
    }
})