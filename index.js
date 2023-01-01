const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');


searchBox.onfocus = () => {
    setInterval(() => {
        username = searchBox.value;

        if (username.length > 2) {
            searchBtn.style.display = "block";
        }
        else {
            searchBtn.style.display = "none";
        }
    }, 200);
};