var map = L.map('map').setView([-25.5389328, -49.3648834], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.5389328, -49.3648834]).addTo(map)
    .bindPopup('UNIFACEAR')
    .openPopup();