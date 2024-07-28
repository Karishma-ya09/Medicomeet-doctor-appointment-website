/* public/js/scripts.js */
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#doctor-list')) {
      fetch('/api/doctors')
        .then(response => response.json())
        .then(doctors => {
          const doctorList = document.querySelector('#doctor-list');
          doctors.forEach(doctor => {
            const li = document.createElement('li');
            li.textContent = `Dr. ${doctor.name} - ${doctor.specialty}`;
            doctorList.appendChild(li);
          });
        });
    }
  
    if (document.querySelector('#appointment-form')) {
      document.querySelector('#appointment-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const patientId = document.querySelector('#patient-id').value;
        const doctorId = document.querySelector('#doctor-id').value;
        const date = document.querySelector('#appointment-date').value;
  
        const response = await fetch('/api/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ patientId, doctorId, date, status: 'booked' })
        });
        const data = await response.json();
        alert('Appointment booked successfully!');
      });
    }
  });
  