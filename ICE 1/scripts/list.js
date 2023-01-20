//console.log('Hello? Is anyone there?')

// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list = document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
// Create element
let newLastItem = document.createElement('li');
// Create text node
let newTextLast = document.createTextNode('half and half cream');
// Add text node to element
newLastItem.appendChild(newTextLast);
// Add element end of list
list.appendChild(newLastItem);
// ADD NEW ITEM START OF LIST



// Create element
let newFirstItem = document.createElement('li');

// Create text node
let newFirstText = document.createTextNode('lettuce');
// Add text node to element
newFirstItem.appendChild(newFirstText);
// Add element to list
list.insertBefore(newFirstItem, list.firstChild);


// All <li> elements
let listItems = document.querySelectorAll('li');
// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;// Counter variable
for(i=0; i < listItems.lenght; i++){// Loop through elements
    listItems[i].className = 'cool'; // Change class to cool
}
    



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading = document.querySelector('h2')
// h2 element
let headingText = heading.firstChild.nodeValue;
// h2 text
let totalElements = listItems.length;// No. of <li> elements
let newHeading = headingText + '<span>' + totalElements + '</span>';// Content
heading.innerHTML = newHeading;// Update h2 using innerHTML (not textContent) because it contains markup