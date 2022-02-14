async function get_json(){
    const response = await fetch('/api/dashboard');
    const myJson = await response.json();
    return myJson;
}

function add_trend(data){
    var elements = document.getElementsByClassName("rating");
    var list = list_trends(data);
    for (var i = 0, len = elements.length; i < len; i++) {
        if(list[i][1]==up){
            document.getElementsByClassName("rating")[i].classList.add(green);
        }
        else if(list[i][1]==down){
            document.getElementsByClassName("rating")[i].classList.add(red);
        }
    }
}

function list_trends(data){
    var list = [];
    for(var i=0; i<data[0][0].length; i++){
        list.append(data[0][0][i][1]);
    }
    for(var i=0; i<data[1].length; i++){
        list.append(data[1][1]);
    }
    return list;
}

export default get_json;