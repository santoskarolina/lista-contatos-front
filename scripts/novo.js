function cadastrarNovo(){
    document.querySelector('.mesagem').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.mesagem').style.display = 'none';
    }, 6000);
}

async function cadastrar(){

    let nome = document.querySelector('.nome').value;
    let email = document.querySelector('.email').value;
    let telefone = document.querySelector('.telefone').value;

    if(nome == ''){
       document.querySelector('.rule-nome').innerHTML = 'Nome é obrigatório';
       setTimeout(() => {
        document.querySelector('.rule-nome').innerHTML = '';
       }, 4000);
    }else if(email == ''){
        document.querySelector('.rule-email').innerHTML = 'Email é obrigatório';
       setTimeout(() => {
        document.querySelector('.rule-email').innerHTML = '';
       }, 4000);
    }else if(nome.length < 5){
        document.querySelector('.rule-nome').innerHTML = 'Nome deve ser maior que 5 caracteres';
       setTimeout(() => {
        document.querySelector('.rule-nome').innerHTML = '';
       }, 4000);
    }else if(email.length <= 5 || email.indexOf('@') == -1 ){
        document.querySelector('.rule-email').innerHTML = 'Email inválido';
       setTimeout(() => {
        document.querySelector('.rule-email').innerHTML = '';
       }, 4000);
    }else if(telefone == ''){
        document.querySelector('.rule-telefone').innerHTML = 'Telefone é obrigatório';
        setTimeout(() => {
         document.querySelector('.rule-telefone').innerHTML = '';
        }, 4000);
    }else{

        let req  = await fetch('http://localhost:8080/contatos', {
            method: 'POST',
            body: JSON.stringify({
                    nome: nome,
                    email: email,
                    telefone: telefone,
                }),
            headers: {
                "Content-type": "application/json"
            }
            });
        
            let json = await req.json();
            cadastrarNovo();
        } 
}
