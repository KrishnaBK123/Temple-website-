document.addEventListener("DOMContentLoaded", function() {
  // Select all the filter buttons
  const filterButtons = document.querySelectorAll('.portfolio-trigger');
  
  // Select all the portfolio items
  const portfolioItems = document.querySelectorAll('.sigma_portfolio-item');

  // Loop through the filter buttons and add a click event listener
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Get the filter value from the clicked button
          const filterValue = this.getAttribute('data-filter');

          // Remove the 'active' class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));

          // Add the 'active' class to the clicked button
          this.classList.add('active');

          // Show or hide portfolio items based on the filter
          portfolioItems.forEach(item => {
              if (filterValue === '*' || item.parentElement.classList.contains(filterValue.substring(1))) {
                  item.parentElement.style.display = 'block';
              } else {
                  item.parentElement.style.display = 'none';
              }
          });
      });
  });
});
