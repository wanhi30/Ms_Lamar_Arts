document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('productSearch');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            let items = document.querySelectorAll('.prod-item');

            items.forEach(item => {
                let title = item.querySelector('h4').textContent;
                let desc = item.querySelector('p').textContent;
                
                // Search in both Title and Description
                if (title.toUpperCase().indexOf(filter) > -1 || desc.toUpperCase().indexOf(filter) > -1) {
                    item.style.display = ""; // Show
                } else {
                    item.style.display = "none"; // Hide
                }
            });
        });
    }

    // --- 2. TABBED FILTERS ---
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                
                // A. Visual: Switch Active Class
                let siblings = btn.parentElement.children;
                for (let sib of siblings) sib.classList.remove('active');
                btn.classList.add('active');

                // B. Logic: Filter the list
                let category = btn.getAttribute('data-filter');
                
                // Find which zone we are in (Business or Gifting)
                let parentSection = btn.closest('.catalog-zone');
                let products = parentSection.querySelectorAll('.prod-item');

                products.forEach(prod => {
                    // If "all" is clicked OR the product matches the category
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