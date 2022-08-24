class ClientRecord {
    constructor(obj) {
        const {name} = obj;

        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new Error('Imię musi być tekstem o długości min. 3 znaków');
        }

        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;
    }
}

module.exports = {
    ClientRecord,
}