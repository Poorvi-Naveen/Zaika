document.addEventListener('DOMContentLoaded', async () => {
    const userTableBody = document.querySelector('#userTable tbody');
  
    try {
      const response = await fetch('/admin/users');
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
  
      const users = await response.json();
  
      users.forEach(user => {
        const row = document.createElement('tr');
        const activity = user.activity.map(log => `${log.action} (${new Date(log.timestamp).toLocaleString()})`).join('<br>');
  
        row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${activity}</td>
          <td>${user.status}</td>
        `;
  
        userTableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  });
  