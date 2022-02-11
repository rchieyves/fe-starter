// 1. Fetch Data
fetch("/api/dashboard")
  .then((response) => response.json())
  .then((data) => {
    // document.getElementById('total-value').innerHTML = data.primary_metrics.total.value;
    // document.getElementById('total-value').innerHTML = 2000;
    console.log(data.primary_metrics.total.value);
  });
