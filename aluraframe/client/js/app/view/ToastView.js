class ToastView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(message) {
        if(typeof message == typeof 'string') {
            return `<p class='alert alert-success'>${message}</p>`;
        } else {
            return `<p></p>`;
        }
    }

}