
import React from 'react';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactFrom />
      <SearchBox />
      <ContacList />
    </div>
  );
};

export default App;
 
