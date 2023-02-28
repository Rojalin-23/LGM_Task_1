let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//add btn disabled
input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

//add new item to list
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = ` 
     <p> ${input.value}</p>
     <div class="item-btn">
         <i class="fa fa-pencil" style="font-size:26px"></i>
         <i class="fa fa-close" style="font-size:24px"></i>
     </div>
     `
        tasks.appendChild(newItem);
        input.value = '';

    } else {
        alert("Please enter a task")
    }
})

//delete item from list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-close')) {
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pencil')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})