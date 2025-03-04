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
        },
        schemas: {
            login: {
                $email: "usuario@mail.com",
                $password: "123456"
            },
            recovery: {
                $email: "usuario@mail.com",
            },
            User: {
                id: "2mkre4j5gPo0BFGl5pyi",
                nome: "João da Silva",
                email: "joaodasilva@mail.com",
            },
            addUser: {
                $nome: "João da Silva",
                $email: "joaodasilva@mail.com",
                $password: "123456"
            },
            updateUser: {
                $nome: "João da Silva",
                $email: "joaodasilva@mail.com",
                password: "654321"
            },
            addCompany: {
                $logomarca: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpqKKKAP/Z",
                $cpfCnpj: "15647055000165",
                $razaoSocial: "Jornada Dev Media Digital Solutions Ltda",
                $nomeFantasia: "Jornada de Programador",
                $telefone: "64999999999",
                $horarioFuncionamento: "De Seg a Sex das 08h às 18h",
                $endereco: "Rua Contrua seu Futuro, 100, Centro",
                $localizacao: "https://maps.app.goo.gl/uXL3hjfu3vR1u4uY9",
                $taxaEntrega: 9.99,
                ativa: true
            },
            updateCompany: {
                $logomarca: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpqKKKAP/Z",
                $cpfCnpj: "15647055000165",
                $razaoSocial: "Jornada Dev Media Digital Solutions Ltda",
                $nomeFantasia: "Jornada de Programador",
                $telefone: "64999999999",
                $horarioFuncionamento: "De Seg a Sex das 08h às 18h",
                $endereco: "Rua Contrua seu Futuro, 100, Centro",
                $localizacao: "https://maps.app.goo.gl/uXL3hjfu3vR1u4uY9",
                $taxaEntrega: 9.99,
                $ativa: true
            },
            addCategory: {
                $descricao: "Importados",
                ativa: true,
            },
            updateCategory: {
                $descricao: "Nacionais",
                $ativa: false,
            },
            addProduct: {
                $nome: "Smart TV Samsung 55'",
                descricao: "A maior TV do momento.",
                $preco: 5479.99,
                imagem: null,
                $categoria: {
                    $id: "2mkre4j5gPo0BFGl5pyi"
                },
                ativa: true,
            },
            updateProduct: {
                $nome: "Smart TV Samsung 55'",
                descricao: "A maior TV do momento.",
                $preco: 5479.99,
                imagem: null,
                $categoria: {
                    $id: "2mkre4j5gPo0BFGl5pyi"
                },
                $ativa: false,
            },
            addPaymentMethod: {
                $descricao: "Pix",
                ativa: true,
            },
            updatePaymentMethod: {
                $descricao: "Cartão de Crédito",
                $ativa: false,
            },
            addOrder: {
                $empresa: {
                    $id: "1SBiiMrf4JUUFG57M76F",
                },
                $cliente: {
                    $nome: "João da Silva",
                    $telefone: "11999999999",
                },
                endereco: {
                    cep: "75900000",
                    $logradouro: "Rua Xuxu Beleza",
                    $numero: "11",
                    $bairro: "Setor XPTO",
                    $complemento: "Qd 1 Lt 2",
                    $cidade: "Não-Me-Toque",
                    $uf: "RS"
                },
                cpfCnpjCupom: null,
                $isEntrega: true,
                $formaPagamento: {
                    $id: "NdmCoYl0iT3gHwhO0pyQ",
                },
                $taxaEntrega: 100,
                $items: [{
                    $produto: {
                        $id: "3UfzI8CSCaK5eC0UJ8gI",
                    },
                    $qtde: 1,
                    observacao: null,
                }],
                status: {
                    "@enum": ["pendente", null]
                },
                observacoes: null,
            },
            updateOrderStatus: {
                $status: {
                    "@enum": ["aprovado", "entrega", "concluido", "cancelado"]
                },
            },
        },
        parameters: {
            empresaId: {
                name: 'empresaId',
                in: 'query',
                description: 'Id da empresa',
                schema: {
                    type: 'string'
                }
            },
            dataInicio: {
                name: 'dataInicio',
                in: 'query',
                description: 'Data de início do filtro no formato YYYY-MM-DD',
                schema: {
                    type: 'date'
                }
            },
            dataFim: {
                name: 'dataFim',
                in: 'query',
                description: 'Data de fim do filtro no formato YYYY-MM-DD',
                schema: {
                    type: 'date'
                }
            },
            orderStatus: {
                name: 'status',
                in: 'query',
                description: 'Status do pedido',
                schema: {
                    type: 'string',
                    enum: ['pendente', 'aprovado', 'entrega', 'concluido', 'cancelado']
                }
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