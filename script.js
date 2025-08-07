const form = document.getElementById('admissionForm');
const tableBody = document.querySelector('#dataTable tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;
  const dob = document.getElementById('dob').value;

  // Validation
  if (!name || !email || !phone || !course || !dob) {
    alert("Please fill all fields.");
    return;
  }

  // Add new row
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${course}</td>
    <td>${dob}</td>
  `;
  tableBody.appendChild(newRow);

  // Clear form
  form.reset();
});