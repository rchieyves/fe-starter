(function () {
    'use strict';
    // 1. Fetch Data
    fetch("/api/dashboard")//endpoint
        .then((response) => response.json())
        .then((data) => {
            // 2. Render the Data
            console.log(data)//promise
            let numFormat = new Intl.NumberFormat('en-US')
            let value = numFormat.format(parseInt(data.primary_metrics.total.value));
            let label = data.primary_metrics.total.label;
            document.getElementById("followers").innerHTML =
                `Total ${label}: ${value} `;
            for (let i = 0; i < data.primary_metrics.cards.length; i++) {
                let service = data.primary_metrics.cards[i].service;
                let username = data.primary_metrics.cards[i].username;
                let value = data.primary_metrics.cards[i].value;
                let label = (data.primary_metrics.cards[i].label).toUpperCase();
                let metricValue = data.primary_metrics.cards[i].metric.value;
                let metricTrend = data.primary_metrics.cards[i].metric.trend;
                let serviceIcon = "";
                let metricIcon = "";
                let metricColor = "";
                switch (service) {
                    case "facebook":
                        serviceIcon = "src/images/icon-facebook.svg";
                        break;
                    case "twitter":
                        serviceIcon = "src/images/icon-twitter.svg";
                        break;
                    case "instagram":
                        serviceIcon = "src/images/icon-instagram.svg";
                        break;
                    case "youtube":
                        serviceIcon = "src/images/icon-youtube.svg";
                        break;
                }
                if (metricTrend === "up") {
                    metricIcon = "src/images/icon-up.svg";
                    metricColor = "rate_green";
                } else {
                    metricIcon = "src/images/icon-down.svg";
                    metricColor = "rate_red";
                }

                document.getElementById(`${service}Service`).src =
                    `${serviceIcon}`;
                document.getElementById(`${service}Username`).innerHTML =
                    `&nbsp@${username}`;
                document.getElementById(`${service}Value`).innerHTML =
                    `${value}`;
                document.getElementById(`${service}Label`).innerHTML =
                    `${label}`;
                document.getElementById(`${service}MetricIcon`).src =
                    `${metricIcon}`;
                document.getElementById(`${service}MetricValue`).innerHTML =
                    `${metricValue} Today`;
                document.getElementById(`${service}MetricValue`).className =
                    `${metricColor}`;


            }
            for (let i = 0; i < data.supporting_metrics.length; i++) {
                let service = data.supporting_metrics[i].service;
                let value = data.supporting_metrics[i].value;
                let label = data.supporting_metrics[i].label;
                let metricPercent = data.supporting_metrics[i].metric.percent;
                let metricTrend = data.supporting_metrics[i].metric.trend;
                let serviceIcon = "";
                let metricIcon = "";
                let metricColor = "";
                switch (service) {
                    case "facebook":
                        serviceIcon = "src/images/icon-facebook.svg";
                        break;
                    case "twitter":
                        serviceIcon = "src/images/icon-twitter.svg";
                        break;
                    case "instagram":
                        serviceIcon = "src/images/icon-instagram.svg";
                        break;
                    case "youtube":
                        serviceIcon = "src/images/icon-youtube.svg";
                        break;
                }
                if (metricTrend === "up") {
                    metricIcon = "src/images/icon-up.svg";
                    metricColor = "percentage_green";
                } else {
                    metricIcon = "src/images/icon-down.svg";
                    metricColor = "percentage_red";
                }

                document.getElementById(`${service}Service${i}`).src =
                    `${serviceIcon}`;
                document.getElementById(`${service}Value${i}`).innerHTML =
                    `${value}`;
                document.getElementById(`${service}Label${i}`).innerHTML =
                    `${label}`;
                document.getElementById(`${service}MetricIcon${i}`).src =
                    `${metricIcon}`;
                document.getElementById(`${service}MetricPercent${i}`).innerHTML =
                    `&nbsp${metricPercent}%`;
                document.getElementById(`${service}MetricPercent${i}`).className =
                    `${metricColor}`;


            }


        })
    // .catch(error => console.log(error.message));


})();

function selectLabel(service) {

}


//16
