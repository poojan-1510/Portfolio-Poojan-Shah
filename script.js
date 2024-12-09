document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', function () {
        const section = document.getElementById(item.getAttribute('data-section'));

        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        section.classList.add('active');
    });
});
