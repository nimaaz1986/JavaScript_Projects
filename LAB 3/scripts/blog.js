console.log('blog.js loaded')
//It ensures that the code inside the function will run only when the DOM is fully loaded.
$(document).ready(function() {
  // Select the element with class .navbar-nav
    var navbarNav = $('.navbar-nav');
    // Find the first .nav-item that is a child of the navbarNav element
    var homeItem = navbarNav.find('.nav-item:first-child');
     // Find the last .nav-item that is a child of the navbarNav element
    var contactItem = navbarNav.find('.nav-item:last-child');
    

    // Create a new li element with class .nav-item
    var blogItem = $('<li class="nav-item"></li>');
    // Create a new li element with class .nav-item
    blogItem.append('<a class="nav-link" href="#">Blog</a>');
  
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


  