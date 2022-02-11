// 1. Fetch Data
fetch("/api/dashboard")
  .then((response) => response.json())
  .then((data) => {
    
    //Modifying Total Metrics
    document.getElementById('follower-count').innerHTML = `
      Total ${data.primary_metrics.total.label}: ${data.primary_metrics.total.value}
    `;

    //Modifying Contents of primary metrics
    document.getElementById('upper-main-container').innerHTML = "";
    data.primary_metrics.cards.forEach(card => {
      document.getElementById('upper-main-container').innerHTML += `
        <div class="box" id="${card.service}_box">
          <p class="username">
            <img class="logo" src="/api/images/icon-${card.service}.svg" 
              alt="${card.service} Icon" />
              ${card.username}
          </p>
          <p class="number" id="value" >${card.value}</p>
          <p class="metrics">${card.label}</p>
          <p class="updates trend-${card.metric.trend}">
            <img src="/api/images/icon-${card.metric.trend}.svg" alt="${card.metric.trend}" />
            ${card.metric.value} Today
          </p>
        </div>
      `;
    });

    //Modifying contents of supporting metrics.
    document.getElementById('lower-main-container').innerHTML = "";
    data.supporting_metrics.forEach(element => {
      document.getElementById('lower-main-container').innerHTML += `
      <div class="box">
        <h3 class="metrics">${element.label}</h3>
        <img class="logo" src="/api/images/icon-${element.service}.svg" 
          alt="${element.service} Icon" />
        <p class="number">${element.value}</p> 

        <div class="update">
          <p class="updates trend-${element.metric.trend}">
            <img src="/api/images/icon-${element.metric.trend}.svg" />
            ${element.metric.percent}%
          </p>
        </div>
      </div>
      
      `;
    });
  });
