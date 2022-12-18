import { AddContacts } from "./Form/Form";
import { Section } from "./Section/Section";
import { SearchForm } from "./SearchByName/SearchForm";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactsList/ContactsList";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }
  onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.elements.name
    const number = form.elements.number

    if (this.state.contacts.find(contact => contact.name === name.value && contact.number === number.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    form.reset()
  }

  onChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <AddContacts onSubmit={this.onSubmit} />
        </Section>
        <SearchForm value={this.state.filter} onChange={this.onChange} />
        <ContactsList bookArray={this.state.contacts} filter={this.state.filter} onDelete={this.onDelete} />
      </div >
    );
  }
};
