function generate_cards(data){
    generate_card_big(data);
    generate_card_small(data);
}

function generate_card_big(data){
    var data_big_cards = data["primary_metrics"]["cards"];
    for (var i = 0, len = data_big_cards.length; i < len; i++) {
        var tempdata = data_big_cards[i];

        /* div big cards*/
        const card = document.createElement("div");
        card.classList.add("card", "card_big", tempdata["service"].toString() );
        document.getElementsByTagName("BODY")[0].insertBefore(card, document.getElementById("overview"));
        

        /* trend images */
        const up = document.createElement("img");
        up.src = "./src/images/icon-up.svg";
        up.classList.add("trend_image");
        const down = document.createElement("img");
        down.src = "./src/images/icon-down.svg";
        down.classList.add("trend_image")

        /* name */
        var name = document.createElement("span");
        var logo = document.createElement("img");
        name.appendChild(logo);
        if(tempdata["service"]=="youtube"){
            name.append(tempdata["username"]);
        }else{
            name.append("@"+tempdata["username"]);
        }
        name.classList.add("grey", "small");
        logo.src="./src/images/icon-"+tempdata["service"]+".svg";
        logo.classList.add("logo");
        card.appendChild(name);

        /* number */
        var number = document.createElement("h1");
        number.append(tempdata["value"]);
        card.appendChild(number);

        /* followers */
        var followers = document.createElement("p");
        followers.append(tempdata["label"]);
        followers.classList.add("grey", "card_followers");
        card.appendChild(followers);

        /* rating */
        var rating = document.createElement("p");
        rating.append(tempdata["metric"]["value"]+" Today");
        if(tempdata["metric"]["trend"]=="up"){
            rating.classList.add("green");
            rating.insertBefore(up,rating.firstChild);
        }
        else if(tempdata["metric"]["trend"]=="down"){
            rating.classList.add("red");
            rating.insertBefore(down,rating.firstChild);
        }
        rating.classList.add("rating");
        card.appendChild(rating);
    }
}

function generate_card_small(data){
    var data_small_cards = data["supporting_metrics"];
    for (var i = 0, len = data_small_cards.length; i < len; len--) {
        var tempdata = data_small_cards[len-1];

        /* div small cards*/
        const card = document.createElement("div");
        card.classList.add("card", "card_small");
        document.getElementById("overview").parentNode.insertBefore(card,document.getElementById("overview").nextSibling);
        

        /* trend images */
        const up = document.createElement("img");
        up.src = "./src/images/icon-up.svg";
        up.classList.add("trend_image");
        const down = document.createElement("img");
        down.src = "./src/images/icon-down.svg";
        down.classList.add("trend_image")

        /* Views or Likes */
        var views = document.createElement("span");
        views.classList.add("left", "grey", "sub");
        views.append(tempdata["label"]);
        card.appendChild(views)

        /* logo */
        var img_span = document.createElement("span");
        var logo = document.createElement("img");
        img_span.appendChild(logo);
        img_span.classList.add("right");
        logo.src="./src/images/icon-"+tempdata["service"]+".svg";
        card.appendChild(img_span);

        /*breaks*/
        card.appendChild(document.createElement("br"));
        card.appendChild(document.createElement("br"));

        /* number */
        var number = document.createElement("span");
        number.append(tempdata["value"]);
        number.classList.add("left","card_small_number")
        card.appendChild(number);

        /* rating */
        var rating = document.createElement("span");
        rating.append(tempdata["metric"]["percent"]+"%");
        if(tempdata["metric"]["trend"]=="up"){
            rating.classList.add("green");
            rating.insertBefore(up,rating.firstChild);
        }
        else if(tempdata["metric"]["trend"]=="down"){
            rating.classList.add("red");
            rating.insertBefore(down,rating.firstChild);
        }
        rating.classList.add("rating","right");
        card.appendChild(rating);
    }
}

export default generate_cards;