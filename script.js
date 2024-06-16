document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('right');
    const toggle = document.querySelector('.inputFixed');
    const cross = document.querySelector('.cross');
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
  
    document.addEventListener('click', (event) => {
      if (!searchInput.contains(event.target)) {
        change = false;
        toggle.style.display = 'none';
      }
    });
  
    cross.addEventListener('click', (event) => {
      change = false;
      toggle.style.display = 'none';
    });

    
  
    const postsContainer = document.querySelector('.news-item');
    const apiUrl = 'https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
  
        // Slice the data to get only the first 6 items
        const limitedData = data.news.slice(0, 6);
        console.log('Limited data (should be 6 items):', limitedData); // Log the limited data
  
        // Clear the container before adding new items
        postsContainer.innerHTML = '';
  
        // Use map to create an array of HTML strings
        const htmlStrings = limitedData.map(post => {
          // Trim title to 10 words
          
          return `
            <div class="newsRowItem">
              <div class="insideNewsRowItem">
                <div class="newsImage">
                  <img src="${post.image}" alt="">
                </div>
                <div class="data-contents">
                  <h3>${post.title.substring(0,30)}</h3>
                  <p>${post.content}</p>
                  <span>Learn More <i class="fa-solid fa-arrow-right" style="color: #1D6FA3;"></i></span>
                </div>
              </div>
            </div>
          `;
        });
  
        // Append the HTML strings to the container
        postsContainer.innerHTML = htmlStrings.join('');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  