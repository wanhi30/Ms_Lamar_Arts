document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('productSearch');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            // Select ONLY the actual product items
            let items = document.querySelectorAll('.menu-item');

            items.forEach(item => {
                let title = item.querySelector('h4').textContent;
                // Check if title contains search text
                if (title.toUpperCase().indexOf(filter) > -1) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // --- 2. TABBED FILTERS ---
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                
                // Visual: Update Active Button
                let siblings = btn.parentElement.children;
                for (let sib of siblings) sib.classList.remove('active');
                btn.classList.add('active');

                // Logic: Filter Items
                let category = btn.getAttribute('data-filter');
                let parentZone = btn.closest('.catalog-zone');
                let products = parentZone.querySelectorAll('.menu-item');

                products.forEach(prod => {
                    // Show if 'all' or matches category
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
