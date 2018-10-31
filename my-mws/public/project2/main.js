var mymap = L.map('mapid').setView([-6.886826, 107.613938], 13);
var marker = L.marker([-6.886826, 107.613938]).addTo(mymap);
var circle = L.circle([-6.886826, 107.613938], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGlraXNwIiwiYSI6ImNqbWxwbXljNDA5enkzcXI4aDRyazdkaWwifQ.jYyATN9AThHHcEOfmvbK-w', {
    maxZoom: 18,
    style: 'mapbox://styles/mapbox/satellite-v9',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

marker.bindPopup("CodeLabs Unikom").openPopup();

var popup = L.popup()
    .setLatLng([-6.886826, 107.613938])
    .setContent("Tempat belajar terbaik disini.")
    .openOn(mymap);

function onMapClick(e) {
    console.log("Peta diklik pada posisi " + e.latlng);
}
mymap.on('click', onMapClick);

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lokasi yang dipilih: " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

L.accessToken = 'pk.eyJ1IjoiZGlraXNwIiwiYSI6ImNqbWxwbXljNDA5enkzcXI4aDRyazdkaWwifQ.jYyATN9AThHHcEOfmvbK-w';
var mapid = new L.Map({
    container: 'mapid',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 13
});

mapid.addControl(new MapboxGeocoder({
    accessToken: L.accessToken
}));
