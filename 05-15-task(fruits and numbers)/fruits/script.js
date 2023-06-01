const fruitInput = document.getElementById('fruit-input');
const addBtn = document.getElementById('add-btn');
const cardsContainer = document.getElementById('cards-container');
const countBtn = document.getElementById('count-btn');
const toggleBtn = document.getElementById('toggle-btn');
let fruits = [];

addBtn.addEventListener('click', () => {
    const fruitName = fruitInput.value.trim();
    if (fruitName !== '') {
        fruits.push(fruitName);
        fruitInput.value = '';
        addFruitCard(fruitName);
    }
});

countBtn.addEventListener('click', () => {
    alert(`Total fruits: ${fruits.length}`);
});

toggleBtn.addEventListener('click', () => {
    if (cardsContainer.style.display === 'none') {
        showFruitCards();
    } else {
        hideFruitCards();
    }
});

function addFruitCard(fruitName) {
    const card = document.createElement('div');
    card.className = 'fruit-card';
    card.textContent = fruitName;
    cardsContainer.appendChild(card);
}

function showFruitCards() {
    cardsContainer.style.display = 'block';
}

function hideFruitCards() {
    cardsContainer.style.display = 'none';
}