if (!localStorage.getItem('usuarios')) {
    const bancoInicial = [
        { usuario: 'admin', senha: '123' },
        { usuario: 'samurai', senha: '15009' }
    ]
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial));

}
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioDigi = document.getElementById('usuario').value;
    const senhaDigi = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuarioEncontrado = usuarios.find(function (user) {
        return user.usuario === usuarioDigi && user.senha === senhaDigi
    })

    if (usuarioEncontrado) {
        alert('Login realizado com sucesso! Seja bem-vindo ' + usuarioDigi)
    } else {
        alert('Usuário ou senha incorretos. Tente novamente')
    }
});

const btnTreinoA = document.getElementById('btnTreinoA');
if (btnTreinoA) {
    const usuarioLogado = localStorage.getItem('usuariologado');
    if (!usuarioLogado) {
        window.location.href = 'index.html';
    }
}

const treinos = {
    A: {
        titulo: 'titulo A: Peito e Triceps',
        exercicios: [
            'Supino Reto - 4x10',
            'voador - 3x12',
            'crufixo inclinado - 3x15',
            'triceps corda 4x10',
            'triceps Frances 4x10',
        ]
    },
    B: {
        titulo: 'Treino B: Costas e biceps',
        exercicios: [
            'pull over - 4x10',
            'voador costas - 3x12',
            'remada baixa - 3x15',
            'biceps corda 4x10',
            'rosca mertelo 4x10',
        ]
    },
    C: {
        titulo: 'Treino C: Pernas e Ombros',
        exercicios: [
            'agachamento - 4x10',
            'leg press - 3x12',
            'cadeira extensora - 3x15',
            'deseivolvimento halter 4x10',
            'elevação lateral 4x10',
        ]
    }
};

function exibirTreino(tipo) {
    const dados = treinos[tipo];
    document.getElementById('tituloTreino').textContent = dados.titulo;

    const lista = document.getElementById('listaExercios');
    lista.innerHTML = '';

    dados.exercios.forEach(function (exercicio) {
        const li = document.createElement('li');
        li.textContent = exercicio;
        lista.appendChild(li)
    });

    btnTreinosA.addEventListener('click', function () {
        exibirTreino(A);
    });

    document.getElementById('btnTreinoB').addEventListener('click', function () {
        exibirTreino(B);
    });

    document.getElementById('btnTreinoC').addEventListener('click', function () {
        exibirTreino(C);
    });

    document.getElementById('btnVoltar').addEventListener('click', function () {
        window.location.href = 'home.html';
    });
}

const formCadastro = document.getElementById('formCadastro');
if (formCadastro) {
    formCadastro.addEventListener('submit', function(e){
        e.preventDefault();

        const novoUsuario = document.getElementById('novoUsuario').value.trim();
        const novaSenha = document.getElementById('novaSenha').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const jaExiste = usuarios.some(function (user) {
            return user.usuario.toLowerCase() === novoUsuario.toLowerCase();
        });

        if(jaExiste) {
            alert('Esse nome de usuario ja esta em uso1');
            return;
        }

        usuario.push({ usuario: novoUsuario, senha: novaSenha});
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('usuario cadastro com sucesso!');
        window.location.href='home.html';
    });
}
