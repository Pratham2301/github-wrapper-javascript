const usernameh1 = document.getElementById('usernameh1');



const username = getUsernameFromUrl();
// console.log(username);
fetchDataFromApi(username);




//******************************** Functions *****************************// 

function updateHTML(data){
    console.log("update");
    console.log(data);
    console.log(data.bio);
}


function fetchDataFromApi(username) {

    // fetch(`https://api.github.com/users/${username}`)
    // .then(res => res.json())
    // .then(data => updateHTML(data));

    fetch("https://api.github.com/users/Pratham2301")
        .then(res => res.json())
        .then(data => updateHTML(data));
}

function getUsernameFromUrl() {

    // http://127.0.0.1:5500/profile.html?Pratham2301

    let url = document.URL;
    let userid = url.split("/profile.html?")[1];
    usernameh1.innerHTML = userid;
    return userid;
}

