// 1. Fetch Data
fetch("/api/dashboard")
.then((response) => response.json())
.then((data) => {
  console.log(data);
  // 2. Render the Data
  document.getElementById('Total-Followers').innerHTML = `
    Total ${data.primary_metrics.total.label}: ${data.primary_metrics.total.value} `;

  document.getElementById('upper-card-soc-med').innerHTML = '';
  data.primary_metrics.cards.forEach(element => {
    document.getElementById('upper-card-soc-med').innerHTML +=  `
    <div class = "social-med-card-${element.service}">
          <div class = "user">
            <img class = "logo" src="/images/icon-${element.service}.svg" alt="${element.service}-logo">
            <p class = "username">${element.username}</p>
            <p class = "numbers">${element.value}</p>
            <p class = "Followers">${element.label}</p>
            <p class = "updates-${element.metric.trend}">
             <img src="/images/icon-${element.metric.trend}.svg" alt="icon-${element.metric.trend}">
             ${element.metric.value} Today </p>
          </div>
        </div>
  `;
  });
  //Modifying contents of supporting metrics.
  document.getElementById('lower-cards-soc-med').innerHTML = "";
  data.supporting_metrics.forEach(element => {
    document.getElementById('lower-cards-soc-med').innerHTML += `
    <div class = "social-med-card-update">
    <div class = "updates">
      <p class = "statistics"> ${element.label}
        <img class = "logo" src="/images/icon-${element.service}.svg" alt="icon-${element.service}"></p>
        <p class="FB-Page Views">${element.value}</p>
        <p class="updates-${element.metric.trend}">
          <img src="/images/icon-${element.metric.trend}.svg" alt="icon-${element.metric.trend}">${element.metric.percent}%</p>
    </div>
  </div>
   `;  
});
});