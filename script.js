document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('right');
    const toggle = document.querySelector('.inputFixed');
    const cross = document.querySelector('cross');
    let change = false;
   
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

    searchInput.addEventListener('click', () => {
        console.log('block');
        change = true;
        if (change) {
            toggle.style.display = 'block';
        }
    });

    // Optional: Hide the search button when clicking outside the search input
    toggle.addEventListener('click', (event) => {
        change= false
      
            toggle.style.display = 'none';
           // Reset change to false when clicking outside the search input
        
    });

    cross.addEventListener('click', (event) => {
        change= false
      
            toggle.style.display = 'none';
           // Reset change to false when clicking outside the search input
        
    });


    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});


