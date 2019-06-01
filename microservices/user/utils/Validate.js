const messages = require('./messages');

class Validate {
    constructor(body = Request) {
        this._body = body;
        this._error = {};
    }

    setStatus(type) {
        if (this.error.status != type) {
            this.error.status = type;
        }
    }

    setErrorAttribute(attr) {
        if (!this.error[attr]) this.error[attr] = {};
    }

    isEmpty(fields = ['']) {
        fields.map(field => {
            if (!this.body[field]) {
                this.setStatus('error');
                this.setErrorAttribute('empty');
                this.error.empty[field] = messages.empty[field];
            }
        });
    }

    get body() {
        return this._body;
    }

    get error() {
        return this._error;
    }

    set error(error) {
        this._error = error;
    }
}

module.exports = Validate;