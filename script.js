let arrObj = [
    {
        "id": 1,
        "title": "Object 1",
        "status": "editable",
    },
    {
        "id": 2,
        "title": "Object 2",
        "status": "editable",
    },
    {
        "id": 3,
        "title": "Object 3",
        "status": "editable",
    },
    {
        "id": 4,
        "title": "Object 4",
        "status": "restorable",
    },
    {
        "id": 5,
        "title": "Object 5",
        "status": "restorable",
    },
    {
        "id": 6,
        "title": "Object 6",
        "status": "restorable",
    }
]

const container = document.getElementById('cardList');

document.addEventListener("DOMContentLoaded", () => {
    arrObj.forEach(element => {
        const card = document.querySelector('template').content.cloneNode(true);
        card.querySelector('#header').textContent = element.title;

        const action = card.querySelector('#action');
        action.setAttribute("data-id", element.id);

        // dynamically adding Event Handler method to dropdown item according to element.status
        if (element.status == 'editable') {
            action.addEventListener('click', (e) => { remove(e) });
            action.textContent = "Remove";
        } else if (element.status == 'restorable') {
            action.addEventListener('click', (e) => { restore(e) });
            action.textContent = "Restore";
        }
        container.appendChild(card);
    });
});


function remove(event) {
    const item = arrObj.filter(item => { return item.id === event.target.dataset.id });
    item.status = "restorable";
    event.target.textContent = "Restore";
    // other server interactions

    // <code to change the event handler function for this event.target(dropdown button) from 'remove' to 'restore'>
    console.log(`Removing ${event.target.dataset.id}`);
}

function restore(event) {
    const item = arrObj.filter(item => { return item.id === event.target.dataset.id });
    item.status = "editable";
    event.target.textContent = "Remove";
    // other server interactions

    // <code to change the event handler function for this event.target(dropdown button) from 'restore' to 'remove'>
    console.log(`Restoring ${event.target.dataset.id}`);
}