const cepInput = document.getElementById('CEP');
const loadingSpan = document.getElementById('loading');

function limparFormularCep(){
    document.getElementById('rua').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}

async function buscarCep(cep){
    cep = cep.replace(/\D/g, '');
    
    if(cep.length ===8){
        loadingSpan.style.display = 'block';
        try{ const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
    
    if(data.erro){
        alert('CEP não encontrado');
    }
    else{
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
        document.getElementById('numero').focus();
    }
}   catch(error){
    alert("Cep errado, tente novamente");
    limparFormularCep();
}   finally{
    loadingSpan.style.display = 'none';

}}  else{
        limparFormularCep();
}
}

cepInput.addEventListener('blur', (e) => {
    buscarCep(e.target.value);
    
})

cepInput.addEventListener('input', (e) => {
    let valuer = e.target.value;
    valuer = valuer.replace(/\D/g, '');
    if(valuer.length > 5){
        valuer = valuer.replace(/(\d{5})(\d)/, '$1-$2');
        buscarCep(valuer);
    }
    e.target.value = valuer;
})

document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
})