document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const carModel = document.getElementById('carModel').value;
  const bookingDate = document.getElementById('bookingDate').value;
  const serviceType = document.getElementById('serviceType').value;

  // Perform validation and booking processing (you'd need a backend for this)

  // Show confirmation message (replace with actual confirmation handling)
  alert(`Thank you, ${name}! Your booking for ${carModel} on ${bookingDate} for ${serviceType} detailing has been received.`);
});
