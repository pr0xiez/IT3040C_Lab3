"use strict";

const generator = new ContactsGenerator();

const contacts = generator.generate();

const contactTable = new ContactTable(`contactsTable`, contacts);

contactTable.display();

contactTable.addContactToTable(generator.generate(1)[0]);
