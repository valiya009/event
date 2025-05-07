import React from 'react';
import './ContactList.css';

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      fullName: "sparks user",
      email: "spark@gmail.com",
      mobile_no: "8989898989",
      message: "new contact"
    },
    {
      id: 2,
      fullName: "",
      email: "ssc786@gmail.com",
      mobile_no: "",
      message: ""
    },
    {
      id: 3,
      fullName: "uday shrimali",
      email: "udshrimali@gmail.com",
      mobile_no: "7676767676",
      message: "New Contact"
    },
    {
      id: 4,
      fullName: "uday",
      email: "udayshrimali@gmail.com",
      mobile_no: "777777777",
      message: "hello admin!!"
    },
    {
      id: 5,
      fullName: "uday",
      email: "udayshrimali@gmail.com",
      mobile_no: "777777777",
      message: "hello admin!!"
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <i className="fas fa-lock"></i>
        <h2>Contact List</h2>
      </div>

      <div className="contact-list">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>fullName</th>
              <th>email</th>
              <th>mobile_no</th>
              <th>message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile_no}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;