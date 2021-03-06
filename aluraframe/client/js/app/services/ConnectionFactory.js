

// função anônima
var connectionFactory = (function () {


    const stores = ['negociacoes'];
    const version = 6;
    const dbName = 'aluraframe'
    var connection = null;
    var close = null;

    return class ConnectionFactory {

        constructor() {
            throw new Error('Não é possivel criar instâncias do ConnectionFactory')
        }

        static getConnection() {
            return new Promise((resolve, reject) => {

                var openRequest = window.indexedDB.open(dbName, version);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStore(e.target.result);
                };

                openRequest.onsuccess = e => {
                    if (!connection) {
                        connection = e.target.result
                        close = connection.close.bind(connection);
                        connection.close = () => { 
                            throw new Error('você não pode fechar diretamente a conexão')
                        }
                    }
                    resolve(connection)
                };

                openRequest.onerror = e => {
                    reject(e.target.error.name);
                };

            })
        }

        static _createStore(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store)
                }
                connection.createObjectStore(store, { autoIncrement: true })
            })
        }

        static _closeConnection() {
            if (connection) {
                close();
                connection = null
            }
        }
    }
})();
