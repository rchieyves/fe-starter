
async function get_json(){
    return fetch('/api/dashboard')
    .then((response)=>response.json())
    .then((responseJson)=>{return responseJson});
}

export default get_json;