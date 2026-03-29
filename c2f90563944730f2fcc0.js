import { renderMenu } from "./menu.js";
import { renderContact } from "./contacts.js";
import { renderHome } from "./home.js";
import "./style.css";

function clearContent()
{
    const content = document.getElementById('content');
    content.innerHTML = '';
}

renderHome();

document.getElementById('home-btn').addEventListener('click', () =>{
    clearContent();
    renderHome();
})

document.getElementById('menu-btn').addEventListener('click', () =>{
    clearContent();
    renderMenu();
})

document.getElementById('contact-btn').addEventListener('click', () =>{
    clearContent();
    renderContact();
})