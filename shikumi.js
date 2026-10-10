/* スクロールして画面に入ったら、ふわっと出すしくみ */
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
