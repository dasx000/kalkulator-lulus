document
  .getElementById('graduation-calculator')
  .addEventListener('submit', function (event) {
    // Mencegah form dari dikirim
    event.preventDefault();
    let graduationDate = new Date(
      document.getElementById('graduation-date').value
    );
    let startDate = new Date(document.getElementById('start-date').value);

    let differenceDate = graduationDate - startDate;

    let years = differenceDate / (1000 * 60 * 60 * 24 * 365);
    console.log(years);

    document.getElementById('result').innerHTML = years.toFixed(2) + ' Tahun';
    console.log('program selesai');
  });
