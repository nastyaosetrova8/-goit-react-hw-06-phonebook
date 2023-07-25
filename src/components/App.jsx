import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import Section from "./Section/Section"
import { useDispatch, useSelector } from 'react-redux'
import { add, filterContacts, remove } from 'redux/contactsSlice'


export default function App () {

const contacts = useSelector(state => state.contacts.contacts);
const filter = useSelector(state => state.contacts.filter);
const dispatch = useDispatch();

const addContact = (contactData) => {
  const existContact = contacts.find(contact => 
  contact.name === contactData.name)
  
    if (existContact) {
   alert(`${contactData.name} is already in contacts.`) 
  }
   else {
  dispatch(add(contactData));
    }
  }

const deleteContact = id => {
  dispatch(remove(id));
};

const filterContact = filterName => {
  dispatch(filterContacts(filterName));
}

const filteredContacts = contacts.filter(contact => 
  contact.name
.toLowerCase()
.includes(filter
 .toLowerCase().trim()));


  return (
<div>
  <Section title ="Phonebook">
    <ContactForm onFormSubmit={addContact}/>
    </Section>

    <Section>
    <h2>Contacts</h2>
    <Filter
    title="Find contacts by name"
    filter={filter} 
    filterContact={filterContact}
    />
    </Section>

    <ContactList 
    contacts={filteredContacts}
    deleteContact={deleteContact}
     />
     </div>
  )
};
