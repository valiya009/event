import React from 'react';
import './UserList.css';

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Vishal",
      email: "vishalbavaliya21@gmail.com",
      gender: "male",
      phone: "7755934563",
      profile: "/avatars/user1.png"
    },
    {
      id: 2,
      name: "uday",
      email: "u@gmail.com",
      gender: "male",
      phone: "777777777",
      profile: "/avatars/user2.png"
    },
    // Add more users as needed
  ];

  return (
    <div className="user-list-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="profile-image">
                  <img src={user.profile} alt={user.name} />
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>
                <button className="unblock-btn">Unblock</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;