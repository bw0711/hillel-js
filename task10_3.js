const contactBook = {
    contacts: [
        {name: 'John', phone: '123-111-2222', email: 'john@email.com'},
        {name: 'Jane', phone: '123-333-4444', email: 'Jane@email.com'}
    ],

    findContactByName(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    },

    addContact(name, phone, email) {
        this.contacts.push({ name, phone, email })
    }
};

contactBook.addContact("Alice Johnson", "555-555-5555", "alice.johnson@example.com");
const foundContact = contactBook.findContactByName("Jane");
