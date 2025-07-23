document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('donorName').value;
  const amount = document.getElementById('amount').value;

  const entry = document.createElement('li');
  entry.textContent = `${name} donated $${amount}`;
  entry.style.cursor = 'pointer';

  // Delete on click
  entry.addEventListener('click', function () {
    this.remove();
  });

  document.getElementById('donationList').appendChild(entry);
  this.reset();
});
