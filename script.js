const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Mark Zuckerberg',
  'Larry Page'
];

const listItems = [];

let dragStarIndex;

createList();

function createList() {
  [...richestPeople]
    .map(a => ({value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, i) => {
      console.log(person)
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', i);

      listItem.innerHTML = `
        <span class='number'>${i + 1}</span>
        <div class='draggable' draggable='true'>
          <p class='person-name'>${person}</p>
          <i class='fas fa-grip-lines'></i>
        </div>
        `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}