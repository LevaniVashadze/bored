document.addEventListener('DOMContentLoaded', function () {
    fetch('http://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
            document.querySelector('h1').innerHTML = data.activity
        })
})
