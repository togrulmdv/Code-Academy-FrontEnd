document.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log(error));
}

function displayData(data) {
    const userList = document.getElementById("userList");

    // User'lar üçün variable yaradır
    const users = {};
    data.forEach(item => {
        if (!users[item.userId]) {
            users[item.userId] = [];
        }
        users[item.userId].push(item);
    });

    // User'ları və task'larını display edir
    for (const userId in users) {
        const tasks = users[userId];
        const userItem = document.createElement("li");
        const userHeading = document.createElement("h2");
        userHeading.textContent = "User " + userId;
        userItem.appendChild(userHeading);

        const taskList = document.createElement("ul");
        tasks.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task.title;
            taskList.appendChild(taskItem);
        });

        userItem.appendChild(taskList);
        userList.appendChild(userItem);
    }
}
