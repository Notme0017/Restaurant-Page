export function renderContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const titleCard = document.createElement('div');
    titleCard.classList.add("card", "title-card");
    const title = document.createElement('h2');
    title.textContent = "Contact Us";
    titleCard.appendChild(title);
    content.appendChild(titleCard);

    // Staff Contacts
    const staff = [
        { role: "Mama Bear", phone: "555-555-5554", email: "mama@bearybar.com" },
        { role: "Papa Bear", phone: "555-555-5555", email: "papa@bearybar.com" }
    ];

    staff.forEach(person => {
        const contactCard = document.createElement('div');
        contactCard.classList.add("card", "contact-info");
        
        const name = document.createElement('h3');
        name.textContent = person.role;
        
        const details = document.createElement('p');
        details.innerHTML = `📞 ${person.phone}<br>✉️ ${person.email}`;
        
        contactCard.appendChild(name);
        contactCard.appendChild(details);
        content.appendChild(contactCard);
    });
}