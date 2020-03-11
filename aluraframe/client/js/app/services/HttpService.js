class HttpService {
  get(url, error) {
    // Requisição AJAX
    return new Promise((resolve, reject) => {
      let AJAX = new XMLHttpRequest();
      AJAX.open("GET", `${url}`);
      AJAX.onreadystatechange = () => {
        if (AJAX.readyState == 4) {
          if (AJAX.status == 200) {
            resolve(JSON.parse(AJAX.responseText));
          } else {
            reject(error);
          }
        }
      };
      AJAX.send();
    });
  }
  save(url, data, error) {
    // Requisição AJAX
    return new Promise((resolve, reject) => {
      let AJAX = new XMLHttpRequest();
      AJAX.open("POST", `${url}`, data);
      AJAX.setRequestHeader("Content-type", "application/json");
      AJAX.onreadystatechange = () => {
        if (AJAX.readyState == 4) {
          if (AJAX.status == 200) {
            resolve(JSON.parse(AJAX.responseText));
          } else {
            reject(error);
          }
        }
      };
      AJAX.send(JSON.stringify(data));
    });
  }
}
