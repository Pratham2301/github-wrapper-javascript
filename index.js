const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const usernameh1 = document.getElementById('usernameh1');

searchBtn.addEventListener("click", getDetails);

searchBox.onfocus = () => {
    setInterval(() => {
        let username = searchBox.value;

        if (username.length > 2) {
            searchBtn.style.display = "block";
        }
        else {
            searchBtn.style.display = "none";
        }
    }, 200);
};

function getDetails()
{
    const githubUsername = searchBox.value;
    
    console.log(githubUsername);

    window.location.replace(`/profile.html?${githubUsername}`);
    
}