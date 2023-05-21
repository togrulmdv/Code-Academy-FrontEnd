fetch('https://api.github.com/users/togrulmdv')
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-img').src = data.avatar_url;
        document.getElementById('name').textContent = data.name;
        document.getElementById('username').textContent = `@${data.login}`;
        document.getElementById('location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('follows').textContent = data.following;
        document.getElementById('github-profile').href = data.html_url;
    })
    .catch(error => console.log(error));

