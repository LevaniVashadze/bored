function random_item(items) {

            return items[Math.floor(Math.random() * items.length)];

        }

document.addEventListener('DOMContentLoaded', function () {
    fetch("activities.json")
            .then(response => response.json())
            .then(json => {
                document.querySelector('h1').innerHTML = random_item(json)['activity'];
            });
})