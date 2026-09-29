if (!localStorage.getItem('usuarios')){
    const bancoInicial = [
        {usuario: 'admin', senha:'123'},
        {usuario: 'samurai', senha:'15009'}
    ]
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial));

}
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const usuarioDigi = document.getElementById('usuario').value;
    const senhaDigi = document.getElementById('senha').value;
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuarioEncontrado = usuarios.find(function(user){
        return user.usuario === usuarioDigi && user.senha === senhaDigi
    })

    if (usuarioEncontrado){
        alert('Login realizado com sucesso! Seja bem-vindo ' + usuarioDigi)
    } else {
        alert('Usuário ou senha incorretos. Tente novamente')
    }
})



