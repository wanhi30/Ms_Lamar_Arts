document.addEventListener('DOMContentLoaded', () => {
    
    // --- SEARCH ---
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            let items = document.querySelectorAll('.menu-item'); // Updated class name

            items.forEach(item => {
                let title = item.querySelector('h4').textContent;
                if (title.toUpperCase().indexOf(filter) > -1) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // --- FILTERS ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let siblings = btn.parentElement.children;
                for (let sib of siblings) sib.classList.remove('active');
                btn.classList.add('active');

                let category = btn.getAttribute('data-filter');
                let parentSection = btn.closest('.catalog-zone');
                let products = parentSection.querySelectorAll('.menu-item'); // Updated class name

                products.forEach(prod => {
                    if (category === 'all' || prod.getAttribute('data-category') === category) {
                        prod.style.display = 'flex';
                    } else {
                        prod.style.display = 'none';
                    }
                });
            });
        });
    }
});
