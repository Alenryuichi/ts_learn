import axios from 'axios';
import '@mock/user';

// 获取用户信息
axios.get('/api/user')
  .then(response => {
    const userInfo = response.data.data;
    const userInfoElement = document.getElementById('user-info');
    if (!userInfoElement) {
      return;
    }
    userInfoElement.innerHTML = `
      <h2>用户信息</h2>
      <p>ID：${userInfo.id}</p>
      <p>姓名：${userInfo.name}</p>
      <p>年龄：${userInfo.age}</p>
      <p>性别：${userInfo.gender}</p>
    `;
  })
  .catch(error => {
    console.error(error);
  });

// 获取用户列表
axios.get('/api/user/list')
  .then(response => {
    const userList = response.data.data;
    const userListElement = document.getElementById('user-list');
    if (!userListElement) {
      return;
    }
    userListElement.innerHTML = `
      <h2>用户列表</h2>
      <ul>
        ${userList.map((user : {name : string} ) => `<li>${user.name}</li>`).join('')}
      </ul>
    `;
  })
  .catch(error => {
    console.error(error);
  });