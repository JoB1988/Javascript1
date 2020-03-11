class ProxyFactory {
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop, receiver) {
        if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
          return function() {
            Reflect.apply(target[prop], target, arguments);
            return acao(target);
          };
        }
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        if (prop.includes(prop)) {
          acao(value);
          target(prop) = value;
        }
        return Reflect.get(target, prop, value, receiver);
      }
    });
  }
  static _isFunction(func) {
    return typeof (func == typeof Function);
  }
}
