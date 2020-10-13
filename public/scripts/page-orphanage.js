const map = L.map('mapid').setView([-27.2205149,-49.6462334], 16);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    miniWidth: 240,
    miniHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class=""choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

L.marker([-27.2205149,-49.6462334], { icon })
.addTo(map)
.bindPopup(popup)
    