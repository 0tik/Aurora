
    // ─── HEADER SHOW ON SCROLL ───
    const header = document.getElementById('siteHeader');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 300) {
    header.classList.add('visible');
} else {
    header.classList.remove('visible');
}
    lastScroll = y;
}, { passive: true });

    // ─── INTERSECTION OBSERVER FOR REVEALS ───
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    function menuOpen () {
        document.querySelector('.mobile-nav').classList.add('open');
        document.querySelector('#siteHeader').classList.remove('visible');
    }