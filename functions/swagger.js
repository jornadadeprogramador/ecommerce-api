import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'E-Commerce API',
        description: 'API para gestão de dados do E-Commerce'
    },
    servers: [
        {
            url: 'http://127.0.0.1:5001/e-commerce-d1288/us-central1/api',
            description: 'Dev'
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    },
    tags: [
        {
            "name": "Auth",
            "description": "Autenticação de usuários"
        },
        {
            "name": "Users",
            "description": "Gestão de usuários"
        },
        {
            "name": "Companies",
            "description": "Gestão de empresas"
        },
        {
            "name": "Categories",
            "description": "Gestão das categorias de produtos"
        },
        {
            "name": "Products",
            "description": "Catálogo de produtos da empresa"
        },
        {
            "name": "Payment Methods",
            "description": "Gestão das formas de pagamento"
        },
        {
            "name": "Orders",
            "description": "Gestão de pedidos"
        }
    ],
};

const outputFile = './src/docs/swagger-output.json';
const routes = ['./src/routes/index.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);