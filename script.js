console.log("script.js loaded");
// INSERT_YOUR_CODE
const sidemenuToggle = document.querySelector('.sidemenu-toggle');
const sidemenu = document.querySelector('.sidemenu');

sidemenuToggle.addEventListener('click', () => {
    console.log('click')

    //sidemenu をクリックした時にopenクラスを追加する
    sidemenu.classList.toggle('open')
})