document.addEventListener('DOMContentLoaded', function() {
    let appointmentList = document.getElementById('appointment-list');
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  
    appointments.forEach(function(appointment, index) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.patientId}</td>
            <td>${appointment.doctorId}</td>
            <td>${appointment.appointmentDate}</td>
            <td>Pending</td>
            <td>
                <button class="success" onclick="markAppointment(${index}, 'Successful')">Mark Successful</button>
                <button class="unsuccess" onclick="markAppointment(${index}, 'Unsuccessful')">Mark Unsuccessful</button>
            </td>
        `;
        appointmentList.appendChild(row);
    });
});

function markAppointment(index, status) {
    let appointments = JSON.parse(localStorage.getItem('appointments'));
    appointments[index].status = status;
    localStorage.setItem('appointments', JSON.stringify(appointments));
    location.reload(); // Reload the page to reflect changes
}
