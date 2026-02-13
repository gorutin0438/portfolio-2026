console.log("script.js loaded");
// INSERT_YOUR_CODE
const sidemenuToggle = document.querySelector('.sidemenu-toggle');
const sidemenu = document.querySelector('.sidemenu');

if (sidemenuToggle && sidemenu) {
    sidemenuToggle.addEventListener('click', () => {
        console.log('click');
        sidemenu.classList.toggle('open');
    });
}

// 詳細ページからトップへ戻る際のなめらかな遷移
if (document.body.classList.contains('detail-page')) {
    const logoLink = document.querySelector('.header-logo-small a[href="index.html"]');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            const href = logoLink.getAttribute('href');
            document.body.classList.add('page-transition-exit');
            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    }
}