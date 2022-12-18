export const ContactListItem = ({ contact, onDelete }) => {
    return (<><li > {contact.name}  {contact.number}</li><button type="button" onClick={() => onDelete(contact.id)}>Delete</button> </>)
}