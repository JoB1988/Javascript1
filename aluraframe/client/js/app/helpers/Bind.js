class Bind {
    // ...prop é o REST operator, significa que do 3º parâmetro em diante, os valores serão organizados
    // em prop como um array. pode ser 1 item ou 1milhao. O rest operator tem que ser sempre o último
  constructor(object, view, ...prop) {
    let proxy = ProxyFactory.create(object, prop, model => view.update(model));
    view.update(object);
    return proxy;
  }
}
