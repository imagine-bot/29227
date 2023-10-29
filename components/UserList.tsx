import React from 'react';

type User = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type UserListProps = {
  users: User[];
};

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};