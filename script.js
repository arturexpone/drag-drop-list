const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Подтянуться 25 раз не покраснев',
  'Посетить силиконовую долину до <s>30ти летия</s> старости',
  'Принять участие в президентских выборах и не ошибиться',
  'Купить заднеприводного друга (BMW)',
  'Попасть на работу в качестве frontend developer',
  'Прочесть до конца "Грокаем алгоритмы"'
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

function dragStart() {
  dragStarIndex = +this.closest('li').getAttribute('data-index');
}


function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = this.getAttribute('data-index');
  swapItems(dragStarIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);

  });

}

addEventListeners();