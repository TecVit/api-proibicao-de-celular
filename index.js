var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    setHeaders: {
        'Access-Control-Allow-Origin': '*', // Pode especificar um domínio específico aqui, como 'https://seu-dominio.com'
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Adicione os métodos que você deseja permitir
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type', // Adicione os cabeçalhos que você deseja permitir
    }
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});