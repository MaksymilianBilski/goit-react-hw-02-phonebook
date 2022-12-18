import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactsList = ({ bookArray, filter, onDelete }) => {
    const filteredArray = bookArray.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (<ul><h5>Contacts</h5>{filteredArray.map(({ id, name, number }) => (
        <ContactListItem
            key={id}
            contact={{ id, name, number }}
            onDelete={onDelete} />))}</ul>)
}