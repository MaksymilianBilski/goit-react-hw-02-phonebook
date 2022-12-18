import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from './ContactsList.module.css'

export const ContactsList = ({ bookArray, filter, onDelete }) => {
    const filteredArray = bookArray.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (<ol className={css.list}><h5 >Contacts</h5>{filteredArray.map(({ id, name, number }) => (
        <ContactListItem
            key={id}
            contact={{ id, name, number }}
            onDelete={onDelete} />))}</ol>)
}