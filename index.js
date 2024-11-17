import express from 'express';

const app = express();

app.use(express.urlencoded({extend: true}));

const porta = 3000;
const host = '0.0.0.0';

var listaUsuarios = [];

function cadastroEmpresarial(req, resp){
    resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Cadastrar Empresa</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
                <style>
                    body {
                        background-color: #BFBFBF;
                        font-family: Arial, sans-serif;
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        margin: 0;
                    }

                    .navbar {
                        background-color: #BFBFBF;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    .navbar-brand, .nav-link {
                        font-family: 'Cinzel', serif;
                        font-weight: bold;
                        color: #0A8081 !important;
                    }

                    .navbar-brand:hover, .nav-link:hover {
                        color: #066666 !important;
                    }

                    .container-content {
                        max-width: 1000px;
                        width: 90%;
                        margin: 40px auto;
                        padding: 20px;
                        background-color: white;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                        border-radius: 10px;
                    }

                    h1 {
                        font-family: 'Cinzel', serif;
                        color: #0A8081;
                        text-align: center;
                    }

                    .btn-primary {
                        background-color: #0A8081;
                        border-color: #0A8081;
                    }

                    .footer {
                        background-color: #BFBFBF;
                        color: #fff;
                        font-size: 14px;
                        padding: 20px 0;
                        text-align: center;
                        margin-top: auto;
                    }

                    footer a {
                        text-decoration: none;
                        color: #fff;
                        transition: color 0.3s;
                    }

                    footer a:hover {
                        color: #066666;
                    }

                    footer .social-icons i {
                        font-size: 20px;
                        transition: transform 0.3s;
                    }

                    footer .social-icons i:hover {
                        transform: scale(1.1);
                    }

                    .form-label {
                        text-align: left;
                    }

                </style>
            </head>
            <body>

                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            PortalEmpresarial
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Voltar ao Menu</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="container-content">
                    <h1>Cadastre Sua Empresa</h1>
                <form action="/cadastrar" method="POST">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cnpj" class="form-label">CNPJ</label>
                            <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder="Digite o CNPJ" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="razaoSocial" class="form-label">Razão Social</label>
                            <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" placeholder="Razão Social ou Nome do Fornecedor" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="nomeFantasia" class="form-label">Nome Fantasia</label>
                            <input type="text" class="form-control" id="nomeFantasia" name="nomeFantasia" placeholder="Nome Fantasia" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="seuemail@exemplo.com" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="telefone" class="form-label">Telefone</label>
                            <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="(00)00000-0000" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="endereco" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua, número, bairro" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Cidade" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="uf" class="form-label">UF</label>
                            <input type="text" class="form-control" id="uf" name="uf" placeholder="Estado (UF)" required>
                        </div>
                    </div>
                    <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="cep" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="cep" name="cep" placeholder="CEP" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary w-50 mx-auto d-block">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
        `);
}

function menu(req, resp){
    resp.send(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>PortalEmpresarial</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
                    <style>
                        body {
                            background-color: #BFBFBF;
                            font-family: Arial, sans-serif;
                            display: flex;
                            flex-direction: column;
                            min-height: 100vh;
                            margin: 0;
                        }

                        .navbar {
                            background-color: #BFBFBF;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                        }

                        .navbar-brand, .nav-link {
                            font-family: 'Cinzel', serif;
                            font-weight: bold;
                            color: #0A8081 !important;
                        }

                        .navbar-brand:hover, .nav-link:hover {
                            color: #066666 !important;
                        }

                        .container-content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            max-width: 800px;
                            margin: 110px auto;
                            text-align: center;
                            padding: 20px;
                            background-color: white;
                            border-radius: 10px;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                            flex-grow: 1;
                        }

                        h1 {
                            font-family: 'Cinzel', serif;
                            color: #0A8081;
                            font-size: 2.5rem;
                            font-weight: bold;
                            margin-bottom: 20px;
                        }

                        .btn-primary {
                            background-color: #0A8081;
                            border-color: #0A8081;
                        }

                        .footer {
                            background-color: #BFBFBF;
                            color: #fff;
                            font-size: 14px;
                            text-align: center;
                            padding: 20px 0;
                            margin-top: auto;
                        }
                        
                        footer a {
                            text-decoration: none;
                            color: #fff;
                            transition: color 0.3s;
                        }

                        footer a:hover {
                            color: #066666;
                        }

                        footer .social-icons i {
                            font-size: 20px;
                            transition: transform 0.3s;
                        }

                        footer .social-icons i:hover {
                            transform: scale(1.1);
                        }

                        .container-actions {
                            text-align: center;
                            margin-top: 30px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">PortalEmpresarial</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/cadastrar">Cadastrar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div class="container-content" style="background-color: #e0e0e0;">
                        <h1>Bem-vindo ao PortalEmpresarial</h1>
                        <p>Cadastre sua empresa e conecte-se a uma rede de negócios em constante crescimento. Junte-se a nós e comece a expandir sua presença no mercado!</p>
                        <a href="/cadastrar" class="btn btn-primary btn-lg mt-3">Cadastrar</a>
                    </div>

                    <div class="footer">
                        <p>&copy; 2024 PortalEmpresarial. Todos os direitos reservados.</p>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </body>
            </html>
        `);
}

function cadastrarEmpresa(req, resp){
    
    const cnpj = req.body.cnpj;
    const razaoSocial = req.body.razaoSocial;
    const nomeFantasia = req.body.nomeFantasia;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;

    const usuario = {cnpj, razaoSocial, nomeFantasia, email, telefone, endereco, cidade, uf, cep}
    
    listaUsuarios.push(usuario);

    resp.write(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Lista de Usuarios</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
                    <style>
                        body {
                            background-color: #BFBFBF;
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                        }

                        .navbar {
                            background-color: #BFBFBF;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
                        }

                        .navbar-brand, .nav-link {
                            font-family: 'Cinzel', serif;
                            font-weight: bold;
                            color: #0A8081 !important;
                        }

                        .navbar-brand:hover, .nav-link:hover {
                            color: #066666 !important;
                        }

                        .container {
                            max-width: 100%;
                            padding: 20px;
                        }

                        .table {
                            width: 100%;
                            background-color: white;
                            border-radius: 10px;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                            margin-top: 10px;
                        }

                        .table th, .table td {
                            vertical-align: middle;
                        }

                        .btn-primary {
                            background-color: #0A8081;
                            border-color: #0A8081;
                        }

                        .container-actions {
                            text-align: center;
                            margin-top: 30px;
                        }

                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">PortalEmpresarial</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/cadastrar">Criar Conta</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div class="container">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Data de Nascimento</th>
                                    <th scope="col">Gênero</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Localidade</th>
                                    <th scope="col">Senha</th>
                                    <th scope="col">Pagamento</th>
                                </tr>
                            </thead>
                            <tbody>`);

                                for(var i = 0; i < listaUsuarios.length; i++){
                                    resp.write(`<tr>
                                                    <td>${listaUsuarios[i].nome}</td>
                                                    <td>${listaUsuarios[i].dataNascimento}</td>
                                                    <td>${listaUsuarios[i].genero}</td>
                                                    <td>${listaUsuarios[i].email}</td>
                                                    <td>${listaUsuarios[i].telefone}</td>
                                                    <td>${listaUsuarios[i].endereco}</td>
                                                    <td>${listaUsuarios[i].localidade}</td>
                                                    <td>${listaUsuarios[i].confirmaSenha}</td>
                                                    <td>${listaUsuarios[i].pagamento}</td>
                                                </tr>
                                        `);
                        }

        resp.write(`        </tbody>
                            </table>
                            <div class="container-actions">
                                <a class="btn btn-primary" href="/cadastrar" role="button">Cadastrar Outro Usuário</a>
                                <a class="btn btn-primary" href="/" role="button">Voltar ao Menu</a>
                            </div>
                        </div>
                    </body>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </html>
            `);

    resp.end();
}

app.get('/', menu);
app.get('/cadastrar', cadastroEmpresarial);

app.post('/cadastrar', cadastrarEmpresa);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`)
});