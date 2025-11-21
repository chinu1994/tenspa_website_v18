document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 992) {
        const toggles = document.querySelectorAll('#insabhiNavbarCollapse .dropdown-toggle[data-nav-url]');

        toggles.forEach(toggle => {
            let isSecondClick = false;

            toggle.addEventListener('click', function(e) {
                const url = this.getAttribute('data-nav-url');

                if (isSecondClick && this.getAttribute('aria-expanded') === 'true') {
                    e.preventDefault();
                    window.location.href = url;
                    isSecondClick = false;
                } else {
                    setTimeout(() => {
                        if (this.getAttribute('aria-expanded') === 'true') {
                            isSecondClick = true;
                        }
                    }, 50);
                }
            });

            if (typeof jQuery !== 'undefined') {
                $(toggle).on('hidden.bs.dropdown', function () {
                    isSecondClick = false;
                });
            }
        });
    }
});