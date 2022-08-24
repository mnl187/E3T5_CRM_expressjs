const {ValidationError} = require("../utils/error");

class ClientRecord {
    constructor(obj) {
        const {id, name, mail, nextContactAt, notes} = obj;

        if(!id || typeof id !== 'string') {
            throw new ValidationError('ID musi być nie pustym tekstem');
        }

        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new ValidationError('Imię musi być tekstem o długości min. 3 znaków');
        }

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
            throw new ValidationError('E-mail nieprawidłowy');
        }

        if (typeof nextContactAt !== 'string') {
            throw new ValidationError('Data następnego kontaktu musi być tekstem');
        }

        if (typeof notes !== 'string') {
            throw new ValidationError('Data następnego kontaktu musi być tekstem');
        }

        this.name = name;
        this.mail = mail;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
    ClientRecord,
}