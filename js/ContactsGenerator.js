
"use strict";

/**
 * @class ContactsGenerator
 * @author Andrew Lively <livelyar@ucmail.uc.edu>
 * @description This module helps to generate an array of random contacts
 */
function ContactsGenerator() {

    /**
     * @function generate
     * @description Generates an array of random contact using the constructor count or the count function argument
     * @argument {Number} count - Number of random contact to return in the array. Default is 10
     * @returns {Array}
    */
    function generate(count = 10) {
        const retval = [];

        for (let i = 0; i < count; i += 1) {
            const contact = {
                id: faker.random.number(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                avatar: faker.image.avatar()
            };

            retval.push(contact);            
        }

        return retval;
    }

    return { generate };
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ContactsGenerator;
}
