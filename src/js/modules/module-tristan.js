// 1. Fetch Data
function moduleTristan(){
    
    fetch("/api/dashboard")
    .then((response) => response.json())
    .then((data) => {

        // 2. Render the Data
        console.log(data);


        
        // Getting total metrics
        document.getElementById("header2").innerHTML = ` Total ${data.primary_metrics.total.label} : ${data.primary_metrics.total.value} `;


        // Displaying Upper Card Metrics
        document.getElementById('upper-cards-container').innerHTML = "";
            data.primary_metrics.cards.forEach(card => {
            document.getElementById('upper-cards-container').innerHTML += `
        
                <div class="card-container" id="${card.service}_card">
                    <div class = card-header>
                        <img class="icon" src="../src/images/icon-${card.service}.svg">
                        <h2 class="card-heading"> ${card.username}</h2> 
                    </div>
        
                    <h2 class="total-followers"> ${card.value}</h2>
                    <h2 class="follower-label">${card.label} </h2>
                    <h2 class="daily-total">${card.metric.value} Today </h2>
                </div>
        
            `;
            });
        
        // Displaying Lower Card Metrics
        document.getElementById('lower-cards-container').innerHTML = "";
        data.supporting_metrics.forEach(element => {
            document.getElementById('lower-cards-container').innerHTML += `
            <div class="lower-card-container ">
                <div class="card-upper">
                    <h2 class="upper-card-heading">Page Views</h2>
                    <img class ="icon" src="../src/images/icon-${element.service}.svg" alt="${element.service} Icon" />
    
                </div>
                <div class="card-lower">
                <h2 class="lower-card-heading number">${element.value}</h2>
                <h2 class="lower-card-heading percentage">${element.metric.percent}</h2>
                </div> 
            </div>
            `;
        });
        
    });

}

export default moduleTristan;




