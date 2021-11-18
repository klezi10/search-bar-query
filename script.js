// grab search input value and console log it - add eventlistener, keyup
// show whole list
// loop through list
// search name through loop list using includes()
// show searched users, if yes, display block. if no, display none.

document
  .getElementById('searchInput')
  .addEventListener('keyup', function (event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNames = document.getElementsByClassName('name');

    for (let counter = 0; counter < allNames.length; counter++) {
      const currentName = allNames[counter].textContent.toLowerCase();

      if (currentName.includes(searchQuery)) {
        allNames[counter].style.display = 'block';
      } else {
        allNames[counter].style.display = 'none';
      }
    }
  });
