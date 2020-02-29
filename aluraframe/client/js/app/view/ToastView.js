class ToastView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(message) {
        return `<p class='alert alert-info'>${message}</p>`
    }

}