const quickRecipes = document.querySelectorAll('.quick-recipes');
const quickContainer = document.getElementById('quick-container');
const previousArrow = document.querySelector(".previous");
const nextArrow = document.querySelector(".next");
const listButtton = document.querySelector("#add-to-shopping-list");
const shoppingListItems = document.getElementById('shopping-items');
const clearListButton = document.querySelector('#clear-shopping-list');
const shoppingList = document.getElementById('shopping-list');
const closeListButton = document.querySelector('#close-shopping-list');
const viewListButton = document.querySelector('#view-shopping-list');
const printButton = document.querySelector('#print');
const printList = document.querySelector('#printing-list');

let presentIndex = 0;
 
function updateDisplay() {
    quickRecipes.forEach((recipe, index) => {
        if (index === presentIndex) {
            recipe.style.display = 'block';
          } else {
            recipe.style.display = 'none';
          }
    });
};

updateDisplay();

function navigatePrevious(){
    if (presentIndex > 0) {
        presentIndex--;
        updateDisplay();
    }
};
previousArrow.addEventListener('click', navigatePrevious);
previousArrow.addEventListener("keydown", function(event){
    if ( event.key === "Enter"){
        navigatePrevious();
    }
});

function navigateNext(){
    if (presentIndex < quickRecipes.length - 1) {
        presentIndex++;
        updateDisplay();
    }
};

nextArrow.addEventListener('click', navigateNext);
nextArrow.addEventListener("keydown", function(event){
    if ( event.key === "Enter"){
        navigateNext();
    }
});

quickRecipes.forEach(recipe => {
    const listItems = recipe.querySelectorAll('ul li');
    listItems.forEach(item => {
        function toggleMarked(){
            item.classList.toggle('marked');
        }
        item.addEventListener('click', toggleMarked);

        item.addEventListener('keydown', event => {
            if (event.key === "Enter"){
                toggleMarked();
            }
        });

        item.setAttribute("tabindex", "0");
    });
});

listButtton.addEventListener('click', function(){
    quickRecipes.forEach(recipe => {
        const markedItems = recipe.querySelectorAll('ul li.marked');
        markedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.textContent;
            shoppingListItems.appendChild(listItem);
            item.classList.remove('marked');
        });
    });
});

viewListButton.addEventListener('click', function(){
    shoppingList.style.display = "block";
});

clearListButton.addEventListener('click', function(){
    shoppingListItems.innerText = "";
});


closeListButton.addEventListener('click', function(){
    shoppingList.style.display = "none";
});


printButton.addEventListener('click', function(){
    const printWindow = window.open('', '', 'height=500,width=800');
    printWindow.document.write(printList.innerHTML);
    printWindow.document.close();
    printWindow.print();
});

