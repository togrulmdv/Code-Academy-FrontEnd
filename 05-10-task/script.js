const arr = ["Bread", "Milk", "Apples", "Grapefruit", "Cat food", "Cheese", "Wine"];
const body= document.getElementsByName("body");
const shoppingList = document.getElementById("shopping-list");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const clearBtn = document.getElementById("clear-btn");
const emptyText = document.getElementById("empty-text");


addBtn.addEventListener("click", () => {
    const index = shoppingList.childElementCount;
    if (index < arr.length) {
        const item = arr[index];
        const li = document.createElement("li");
        li.innerText = " • " + item;
        shoppingList.appendChild(li);
        emptyText.style.display = "none";
    }
});


removeBtn.addEventListener("click", () => {
    shoppingList.removeChild(shoppingList.lastElementChild);
    if (shoppingList.childElementCount === 0) {
        emptyText.style.display = "block";
    }
});


clearBtn.addEventListener("click", () => {
    shoppingList.innerHTML = "";
    emptyText.style.display = "block";
});