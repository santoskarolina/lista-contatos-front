async function cadastrar(){
    let req = await fetch('http://localhost:8080/contatos');
    let json = await req.json();
    listarContatos(json);
}

function listarContatos(lista){
    let html ='';
    
    for (let i in lista){
        html += '<div>';
        html += '<p>' + lista[i].id + '</p>';
        html += '<span>' + lista[i].nome  + '</span>';
        html += '<p>' + lista[i].email  + '</p>';
        html += '<span>' + lista[i].telefone  + '</span>';
        html += '</div>';
    }
    document.querySelector('.contatos').innerHTML= html;
}

cadastrar();