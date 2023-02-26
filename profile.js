const usernameheading = document.getElementById('usernameheading');

//******************************** Functions *****************************// 



function updateProfile(data) 
{
    console.log(data);

    const login = data.login;
    const url = data.html_url;
    const avatar_url = data.avatar_url;
    const name = data.name;
    const followers = data.followers;
    const following = data.following;
    const public_repos = data.public_repos;
    const repos_url = data.repos_url;

    document.getElementById('usernameheading').innerHTML = login;
    document.getElementById('avatarurl').src = avatar_url;
    document.getElementById('profileurl').href = url;
    document.getElementById('fullname').innerHTML = name;
    document.getElementById('repocount').innerHTML = public_repos;
    document.getElementById('followercount').innerHTML = followers;
    document.getElementById('followingcount').innerHTML = following;

}


function updateRepoList(data) 
{
    // console.log(data);

    // const login = data.login;

    // document.getElementById('usernameheading').innerHTML = login;


}

function uodateStatsCars(data) 
{
    console.log(data);

    const login = data.login;

    document.getElementById('st1img').src = `https://github-readme-stats.vercel.app/api/top-langs?username=${login}&show_icons=true&locale=en&layout=compact&theme=radical`;


    document.getElementById('st2img').src = `https://github-readme-stats.vercel.app/api?username=${login}&show_icons=true&locale=en&theme=radical`;

    document.getElementById('st3img').src = `https://github-readme-streak-stats.herokuapp.com/?user=${login}&theme=radical`;


}






async function fetchDataFromApi(username) {
    let URL = `https://api.github.com/users/${username}`;

    const response = await fetch(URL);
    // waits until the request completes...
    const data = await response.json();

    updateProfile(data);
    updateRepoList(data);
    uodateStatsCars(data);
}






function getUsernameFromUrl() {

    // http://127.0.0.1:5500/profile.html?Pratham2301

    let url = document.URL;
    let userid = url.split("/profile.html?")[1];
    usernameheading.innerHTML = userid;
    return userid;
}

//******************************** Main Code *****************************// 


const username1 = getUsernameFromUrl();
// console.log(username1);
fetchDataFromApi(username1);
