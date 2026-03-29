export function renderMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    // Title Card
    const titleCard = document.createElement('div');
    titleCard.classList.add("card", "title-card");
    const title = document.createElement('h2');
    title.textContent = "Beary's Menu";
    titleCard.appendChild(title);
    content.appendChild(titleCard);

    // Beverages Section
    const drinkSection = document.createElement('div');
    drinkSection.classList.add("card");
    const drinkTitle = document.createElement('h3');
    drinkTitle.textContent = "Beverages";
    drinkSection.appendChild(drinkTitle);

    const drinks = [
        { name: "Honey Tea", price: "$3", desc: "Warm, soothing tea with local honey." },
        { name: "Beary Berry Juice", price: "$5", desc: "A blend of seasonal wild berries." }
    ];

    drinks.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add("menu-item");
        itemDiv.innerHTML = `<strong>${item.name}</strong> (${item.price})<p>${item.desc}</p>`;
        drinkSection.appendChild(itemDiv);
    });

    content.appendChild(drinkSection);

    // Main Dishes Section
    const foodSection = document.createElement('div');
    foodSection.classList.add("card");
    const foodTitle = document.createElement('h3');
    foodTitle.textContent = "Main Dishes";
    foodSection.appendChild(foodTitle);

    const dishes = [
        { name: "The Big Bear Breakfast", price: "$12", desc: "3 eggs, bacon, toast, and porridge." },
        { name: "Goldilocks Porridge", price: "$8", desc: "Not too hot, not too cold. Just right." }
    ];

    dishes.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add("menu-item");
        itemDiv.innerHTML = `<strong>${item.name}</strong> (${item.price})<p>${item.desc}</p>`;
        foodSection.appendChild(itemDiv);
    });

    content.appendChild(foodSection);
}