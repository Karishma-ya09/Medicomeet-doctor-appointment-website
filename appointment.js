document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let patientId = document.getElementById('patient-id').value;
    let doctorId = document.getElementById('doctor-id').value;
    let appointmentDate = document.getElementById('appointment-date').value;
  
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  
    appointments.push({ patientId, doctorId, appointmentDate });
  
    localStorage.setItem('appointments', JSON.stringify(appointments));
  
    // Clear the form
    document.getElementById('appointment-form').reset();
  
    alert('Appointment booked successfully!');
});
