//--------------Home--------------------

export function renderHome()
{
    const content = document.getElementById("content");
    content.innerHTML = "";

    //<---------Title----------->
    const name = document.createElement('div');
    name.id = "title";
    name.classList.add("card", "title-card");

    const title = document.createElement('h2')
    title.textContent = "Beary's Breakfast Bar"

    name.appendChild(title);
    content.appendChild(name);


    //<--------Introduction------->
    const introduction = document.createElement('div');
    introduction.setAttribute("id", "introduction");
    introduction.classList.add("card");

    const introPara1 = document.createElement('p');
    introPara1.textContent = "lorem25";

    const introPara2 = document.createElement('p');
    introPara2.textContent = "Goldilocks";

    introduction.appendChild(introPara1);
    introduction.appendChild(introPara2);
    content.appendChild(introduction);


    //<--------Schedule-------->
    const schedule = document.createElement('div');
    schedule.id = "schedule";
    schedule.classList.add("card");

    const schedulePara = document.createElement('p');
    schedulePara.textContent = "Hours"

    const scheduleDays = document.createElement('div');
    schedule.id = "days";

    for(let i = 0; i < 7; i++)
    {
        const daysPara = document.createElement('p');
        daysPara.textContent = `Days${i}`;
        scheduleDays.appendChild(daysPara);
    }

    schedule.appendChild(schedulePara);
    schedule.appendChild(scheduleDays);
    content.appendChild(schedule);


    //<--------Location----------->
    const location = document.createElement('div');
    location.id = "location";
    location.classList.add("card");

    const locationHead = document.createElement('p');
    locationHead.textContent = "Location";

    const address = document.createElement('p');
    address.id = "address"
    address.textContent = "123 Enchanted Forest Lane, Somewhere, PNW";

    location.appendChild(locationHead);
    location.appendChild(address);
    content.appendChild(location);

}
