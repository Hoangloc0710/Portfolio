window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(function(section) {
        var top = section.offsetTop - 100;
        var bottom = top + section.clientHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= top && scrollPosition < bottom) {
            var id = section.getAttribute('id');
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Thiết lập trạng thái Active cho liên kết "Home" khi trang được tải lần đầu
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks[0].classList.add('active'); // Giả sử liên kết "Home" là phần tử đầu tiên
});
