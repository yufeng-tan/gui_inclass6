// ADD NEW ITEM START OF LIST
var list = document.getElementsByTagName('ul')[0];
var first = document.createElement('li');
var first_first = document.createTextNode('kale');

first.appendChild(first_first);
list.insertBefore(first, list.firstChild);

// ADD NEW ITEM TO END OF LIST
var last = document.createElement('li');
var last_next = document.createTextNode('cream');

last.appendChild(last_next);
list.appendChild(last);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var el = document.querySelectorAll('li');
for (var i = 0; i < el.length; i++) {
  el[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var heading_text = heading.firstChild.nodeValue;
var li_length = el.length;
var new_heading = heading_text + '<span>' + li_length + '</span>';
heading.innerHTML = new_heading;
