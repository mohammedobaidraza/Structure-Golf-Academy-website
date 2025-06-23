function initMap() {
  const academy = { lat: 41.8781, lng: -87.6298 }; // Chicago coords
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: academy,
  });

  new google.maps.Marker({
    position: academy,
    map: map,
  });
}
document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Booking submitted! (Stripe integration goes here)');
});
