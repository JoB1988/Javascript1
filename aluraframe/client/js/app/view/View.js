class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(modelo) {
        this._elemento.innerHTML = this._template(modelo);
    }

    _template() {
        // Obriga o filho a implementar esse método. Seria como se fosse uma abstrac class
        throw new Error('O Método _template() deve ser implementado')
    }

}