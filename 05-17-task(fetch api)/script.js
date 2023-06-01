document.addEventListener("DOMContentLoaded", getData);

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  const userList = document.getElementById("userList");

  const users = {};

  data.forEach(item => {
    const { userId, title } = item;
    users[userId] = users[userId] || [];
    users[userId].push(title);
  });

  for (const userId in users) {
    const tasks = users[userId];
    const userItem = document.createElement("li");
    const userHeading = document.createElement("h2");
    userHeading.textContent = "User " + userId;
    userItem.appendChild(userHeading);

    const taskList = document.createElement("ul");
    tasks.forEach(title => {
      const taskItem = document.createElement("li");
      taskItem.textContent = title;
      taskList.appendChild(taskItem);
    });

    userItem.appendChild(taskList);
    userList.appendChild(userItem);
  }
}
