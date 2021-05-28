

var placeNode = document.getElementById("position");
mapboxgl.accessToken = 'pk.eyJ1IjoibWNkNDI5MHRlYW0yMyIsImEiOiJjazh6c2d3a2Ixd2NvM21qc3BtZXdieHE4In0.J7tVV-uVFBIHY0WN_xSCPw';


let caulfield = [145.0420733, -37.8770097];

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 1.5,
    center: caulfield
});
map.addControl(new mapboxgl.FullscreenControl());
var popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Portsea Pier'
);
var popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Port Phillip Bay '
);
var popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Bicheno'
);
var popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Eagle Hawk Neck '
);
var popup5 = new mapboxgl.Popup({ offset: 25 }).setText(
    'The Great Barrier Reef'
);
var popup6 = new mapboxgl.Popup({ offset: 25 }).setText(
    'SS Yongala Wreck'
);
var popup7 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Wolf Rock'
);
var popup8 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Ningaloo Reef'
);
var popup9 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Rowley Shoals' //-17.33345570902817, 119.16666666842299
);
function findIt() {

    var marker1 = new mapboxgl.Marker({
        color: 'black'
    }).setLngLat([144.71337249780652, -38.318978972972545])
        .setPopup(popup1)
        .addTo(map);
    var marker2 = new mapboxgl.Marker({
        color: 'black'
    }).setLngLat([144.878790379738, -38.14951345236091])
        .setPopup(popup2)
        .addTo(map);
    var marker3 = new mapboxgl.Marker({
        color: 'blue'
    }).setLngLat([148.29900858989078, -41.83896083586426])
        .setPopup(popup3)
        .addTo(map);
    var marker4 = new mapboxgl.Marker({
        color: 'blue'
    }).setLngLat([147.92486738667625, -43.01466899699725])
        .setPopup(popup4)
        .addTo(map);
    var marker5 = new mapboxgl.Marker({
        color: 'green '
    }).setLngLat([146.83360111038948, -18.000896951650287])
        .setPopup(popup5)
        .addTo(map);
    var marker6 = new mapboxgl.Marker({
        color: 'green '
    }).setLngLat([147.62410031175025, -19.304680111040177])
        .setPopup(popup6)
        .addTo(map);
    var marker7 = new mapboxgl.Marker({
        color: 'green '
    }).setLngLat([153.1964809126559, -25.913770998205838])
        .setPopup(popup7)
        .addTo(map);
    var marker8 = new mapboxgl.Marker({
        color: 'red'
    }).setLngLat([113.78711265984869, -23.08374833432098])
        .setPopup(popup8)
        .addTo(map);
    var marker9 = new mapboxgl.Marker({
        color: 'red'
    }).setLngLat([119.16666666842299, -17.33345570902817])
        .setPopup(popup9)
        .addTo(map);
}


  
