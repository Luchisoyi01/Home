document.addEventListener('DOMContentLoaded', function(){
  // Render a simple line chart using Chart.js
  const ctx = document.getElementById('trafficChart').getContext('2d');
  const trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Oct 15','Oct 16','Oct 17','Oct 18','Oct 19','Oct 20','Oct 21'],
      datasets: [
        {
          id: 'visitors',
          label: 'Visitors',
          data: [1200, 1500, 1100, 1800, 1700, 1900, 2100],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37,99,235,0.08)',
          tension: 0.3,
          fill: true,
        },
        {
          id: 'sales',
          label: 'Sales',
          data: [120, 150, 110, 180, 170, 190, 210],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0.08)',
          tension: 0.3,
          fill: true,
          hidden: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Force chart to resize when window changes, with debounce
  let resizeTimer = null;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
      trafficChart.resize();
    }, 120);
  });

  // Sidebar menu switching
  const menuItems = Array.from(document.querySelectorAll('.menu-item'));
  menuItems.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const dataset = btn.getAttribute('data-dataset');
      // toggle active class
      menuItems.forEach(b=>b.classList.toggle('active', b===btn));
      // show/hide datasets accordingly
      trafficChart.data.datasets.forEach(ds=>{
        ds.hidden = ds.id !== dataset;
      });
      trafficChart.update();
    });
  });

  // Simple table search
  const search = document.getElementById('search');
  const rows = Array.from(document.querySelectorAll('#users tbody tr'));
  search.addEventListener('input', function(){
    const q = this.value.trim().toLowerCase();
    rows.forEach(r=>{
      const text = r.innerText.toLowerCase();
      r.style.display = text.includes(q) ? '' : 'none';
    });
  });
});
