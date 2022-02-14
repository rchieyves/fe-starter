function add_trend(data){
    var elements = document.getElementsByClassName("rating");
    var list = list_trends(data);
    for (var i = 0, len = elements.length; i < len; i++) {

        const up = document.createElement("img");
        up.src = "./src/images/icon-up.svg";
        up.style.width="7px";
        up.style.height="5px";
        up.style.marginRight="2px";
        up.style.marginBottom="2px";

        const down = document.createElement("img");
        down.src = "./src/images/icon-down.svg";
        down.style.width="7px";
        down.style.height="5px";
        down.style.marginRight="2px";
        up.style.marginBottom="2px";

        var tempElement = document.getElementsByClassName("rating")[i];

        if(list[i]["trend"]=="up"){
            tempElement.classList.add("green");
            tempElement.insertBefore(up,tempElement.firstChild);
        }
        else if(list[i]["trend"]=="down"){
            tempElement.classList.add("red");
            tempElement.insertBefore(down,tempElement.firstChild);
        }
    }
}

function list_trends(data){
    var list = [];
    for(var i=0; i<data["primary_metrics"]["cards"].length; i++){
        list.push(data["primary_metrics"]["cards"][i]["metric"]);
    }
    for(var i=0; i<data["supporting_metrics"].length; i++){
        list.push(data["supporting_metrics"][i]["metric"]);
    }
    return list;
}

export default add_trend;