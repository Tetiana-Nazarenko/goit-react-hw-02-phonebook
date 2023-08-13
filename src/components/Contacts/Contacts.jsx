import { ContactsList, DeleteButton, ContactItem } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => (
  <ContactsList>
    {contacts.map(contact => (
      <ContactItem key={contact.id}>
        {contact.name}: {contact.number}
        <DeleteButton onClick={() => onDelete(contact.id)}>Delete</DeleteButton>
      </ContactItem>
    ))}
  </ContactsList>
);
