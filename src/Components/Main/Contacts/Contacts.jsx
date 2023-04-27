import React from 'react';
import './Contacts.scss'

const Contacts = () => {
  return (
    <section className='contacts'>
      <div className="container">
        <h1 className="contacts_title">
          Союз писателей Ингушетии
        </h1>
        <p className="contacts_description">
          Номер для связи: Lorem, ipsum dolor.<br />
          Почта для связи: Lorem ipsum.<br />
        </p>
      </div>
    </section>
  );
};

export default Contacts;