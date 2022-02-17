//  1. Fetch Data
// fetch("/api/dashboard")
//   .then((response) => response.json())
//   .then((data) => {
//       console.log(data)
//      2. Render the Data
//   });

//current
//test1
// C:/Users/user/Development/fe-starter/src/js/scripts.js
// npm run watch-js
// Do not edit scripts.js in public dist folder. only in the js file in the root folder.
// test 1

async function init() {

    const $content = document.querySelector('.content');
    const $total = $content.querySelector('.total');
    const $primaryCards = $content.querySelector('.primary-cards');
    const $supportingCards = $content.querySelector('.supporting-cards');

    const response = await fetch("/api/dashboard");
    const data = await response.json();

    console.log(data);

    const { primary_metrics, supporting_metrics: supportingCards } = data;
    const { total, cards: primaryCards } = primary_metrics;

    // 1. render the total header text
    $total.textContent = `Total ${total.label}: ${total.value}`;

    // 2. render the primary cards
    primaryCards.forEach(card => {
        $primaryCards.innerHTML += renderPrimaryCard(card);
    })

    // 3. render the supporting cards
    supportingCards.forEach(card => {
        $supportingCards.innerHTML += renderSupportingCard(card);
    })
}

function renderPrimaryCard(card) {
    const { service, username, value, label, metric} = card;
    const { trend, value: trendValue } = metric;

    return `
    <article class="card service-${service}">
      <div class="card-user">
        <img src="./src/images/icon-${service}.svg" alt="${service}">
        ${username ? `<p>@${username}</p>` : ''}
      </div>

      <div class="card-main">
        <p class="card-number">${value}</p>
        <p class="card-label">${label}</p>
      </div>

      <div class="card-metric is-${trend}">
        <img src="./src/images/icon-${trend}.svg" alt="${trend}">
        ${trend == "up" ? `<p class ="trend-up">${trendValue} Today</p>`: `<p class="trend-down">${trendValue} Today</p>`} 
      </div>
    </article>
  `;
}

function renderSupportingCard(card){
    const { service, value, label, metric} = card;
    const { trend, percent} = metric;

    return `
    <article class="card service-${service}">
      <div class="card-info">
        <p class ="card-value">${label}</p>
        <img src="./src/images/icon-${service}.svg" alt="${service}">
      </div>

      <div class="card-main">
        <p class="card-number">${value}</p>
        <div class="card-metric is-${trend}">
          <img src="./src/images/icon-${trend}.svg" alt="${trend}">
          ${trend == "up" ? `<p class ="trend-up">${percent}%</p>`: `<p class="trend-down">${percent}%</p>`} 
        </div>
      </div>
    </article>
  `;
}

init();
