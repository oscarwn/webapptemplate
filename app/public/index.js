function init() {
    const root = document.createElement('div');

    const submitButton = document.createElement('button');
    submitButton.id="submitButton";
    submitButton.innerHTML="submit";
    submitButton.onclick=postData;
    //submitButton.addEventListener('click',postData());
    
    const getButton = document.createElement('button');
    getButton.id="getButton";
    getButton.innerHTML="get";
    //getButton.onclick=getData;
    getButton.addEventListener('click',getData);

    const result = document.createElement('div');
    result.id="result";

    root.append(submitButton,getButton,result);
    document.body.append(root);
}

async function postData(){
    console.log("postdata called");
    const data = {};
    const options ={
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    fetch('/api',options).then(async response => {
        const json = await response.json();
        console.log(json);
    });    

}

async function getData(){
    console.log("getdata called");
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerHTML="";
        
    for (item of data){
        console.log(item);
        const root = document.createElement('div');
        const date = document.createElement('div');
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;
        
        root.append(date);
        document.getElementById("result").append(root);
    }
}

