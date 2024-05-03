const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const newArray = [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();

}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
    <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList)




const checkAllButton = document.getElementById('checkallbutton');
const menuItems = document.querySelectorAll('.plates li');

function checkAll() {
  menuItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
      const index = checkbox.dataset.index;
      items[index].done = true;
    }
  });
}

checkAllButton.addEventListener('click', checkAll)


const unCheckAllButton = document.getElementById('uncheckallbutton');

function unCheckAll() {
  menuItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = false;
      const index = checkbox.dataset.index;
      items[index].done = false;
    }
  });
}

unCheckAllButton.addEventListener('click', unCheckAll)
