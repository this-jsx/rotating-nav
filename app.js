const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('container-degree'))

close.addEventListener('click', () => container.classList.remove('container-degree'))