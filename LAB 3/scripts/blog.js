console.log('blog.js loaded')
//It ensures that the code inside the function will run only when the DOM is fully loaded.
$(document).ready(function() {
  // Select the element with class .navbar-nav
    let navbarNav = $('.navbar-nav');
    // Find the first .nav-item that is a child of the navbarNav element
    let homeItem = navbarNav.find('.nav-item:first-child');
     // Find the last .nav-item that is a child of the navbarNav element
    //var contactItem = navbarNav.find('.nav-item:last-child');
    

    // Create a new li element with class .nav-item
    let blogItem = $('<li class="nav-item"></li>');
    // Create a new li element with class .nav-item
    blogItem.append('<a class="nav-link" href="./blog.html">Blog</a>');
  
    // Insert the blogItem element after the homeItem element
    blogItem.insertAfter(homeItem);

    // Set the text color, font size, and font weight of all .nav-link elements to #333, 18px, and normal, respectively
    $('.nav-link').css({
        'color': '#333',
        'font-size': '18px',
        'font-weight': 'normal'
      });

      // Set the background color of all .navbar elements to #f2f2f2
      $('.navbar').css('background-color', '#f2f2f2');

      // Add a hover effect to all .nav-link elements
      $('.nav-link').hover(function() {
        // Set the background color, font weight, and font size of the hovered .nav-link element to #ddd, bold, and 20px, respectively
        $(this).css({
          'background-color': '#ddd',
          'font-weight': 'bold',
          'font-size': '20px'
        });
      }, function() {
        $(this).css({
           // Set the background color, font weight, and font size of the .nav-link element back to transparent, normal, and 18px, respectively
          'background-color': 'transparent',
          'font-weight': 'normal',
          'font-size': '18px'
        });
      });

      // Set the font family of all .navbar-nav elements to Arial, sans-serif
      $('.navbar-nav').css('font-family', 'Arial, sans-serif');
  });




 // $(document).ready(function() {
    const makePosts = () => {
      // Create a new div element for the blog column
      let blogColumn = $('<div class="container"></div>');
    
      // Loop through the first 20 items in the data array
      for (let i = 0; i < 20; i++) {
        // Create a new div element for each blog post
        let blogPost = $('<div class="card" style="width: 18rem;"></div>');
    
        // Add the title of the blog post to the div(using template https://getbootstrap.com/docs/4.0/components/card/)
        blogPost.append(`<div class="card-body">
                            <h5 class="card-title" id="post-title-${i}"></h5>
                            <p class="card-text" id="post-body-${i}"></p>
                            <a href="#" class="btn btn-primary">Read more</a>
                         </div>`);
    
        // Get the image for the blog post (using my key from pixabay)
        fetch(`https://pixabay.com/api/?key=27430565-0fc99254b3fe93c5a19b3beb0&q=yellow+flowers&image_type=photo`)
          .then(response => response.json())
          .then(data => {
            // Add the image of the blog post to the blogPost element
            let blogImage = $(`<img id="post-image-${i}" src="${data.hits[i].webformatURL}" alt="Blog Image">`);
            blogPost.prepend(blogImage);
          });
    
        // Append the blogPost element to the blogColumn element
        blogColumn.append(blogPost);
      }
    
      // Add the Flexbox properties to the blogColumn element
      blogColumn.css({
        'display': 'flex',
        'flex-wrap': 'wrap',
        'gap': '10px 20px'
      });
    
      // Append the blogColumn element to the body of the page
      $('body').append(blogColumn);
      getText();
    };
  
    const getText = () => {
      // Use fetch to retrieve data from https://jsonplaceholder.typicode.com/posts
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          // Loop through the first 20 items in the data array
          for (let i = 0; i < 20; i++) {
            // Add the title and body of the blog post to the corresponding elements
            $(`#post-title-${i}`).text(data[i].title);
            $(`#post-body-${i}`).text(data[i].body);
          }
        });
    };
  
    makePosts();
    
