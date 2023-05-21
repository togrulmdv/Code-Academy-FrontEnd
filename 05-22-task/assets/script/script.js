// Fetch data from the API endpoint
fetch('https://api.github.com/users/togrulmdv')
    .then(response => response.json())
    .then(data => {
        // Fill the profile card fields with data
        document.getElementById('profile-img').src = data.avatar_url;
        document.getElementById('name').textContent = data.name;
        document.getElementById('username').textContent = `Username: ${data.login}`;
        document.getElementById('location').textContent = `Location: ${data.location}`;
        document.getElementById('followers').textContent = `Followers: ${data.followers}`;
        document.getElementById('follows').textContent = `Follows: ${data.following}`;
        document.getElementById('github-profile').href = data.html_url;
    })
    .catch(error => console.log(error));
