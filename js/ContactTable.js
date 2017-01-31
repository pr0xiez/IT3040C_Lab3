/**
 * @class ContactTable
 * @author Alex Hall <hall3ad@mail.uc.edu>
 * @description Use an existing table and populate it with provided contacts data
 */
class ContactTable {
    constructor(id, contacts = []) {
        if (!id) {
            throw new Error(`Must provide table id`);
        }

        // TODO: Use id to select element and set to internal element
        const table = document.getElementById(id);

        // TODO: Add the contactsTable class to the selected element
        table.addClass('contactsTable');

        // TODO: Set contacts to internal contacts variable
        this._contacts = contacts;

    }

    _createTableContactRow(contact) {
        // TODO: Create and return DOM element for tr
        const tr = document.createElement('tr');
        return tr;

    }

    _createTableDataCell(content) {
        // TODO: Create and return DOM element for td which includes the provided content argument as its content
        const td = document.createElement('td').innerHTML(content);
        return td;
    }

    _createTableDataCellImage(url) {
        let img = document.createElement('img').src(url);
        return img;
    }

    _clearTable() {
        // TODO: Implement
    }

    display() {
        // TODO: Clear the table and render contacts in table using selected element and contacts
    }

    addContactToTable(contact) {
        // TODO: Implement
    }
}
