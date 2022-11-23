/* function retornaValores(conteudo){
    if (!("erro" in conteudo)){
        document.getElementById('rua').value = (conteudo.logradouro)
        document.getElementById('bairro').value = (conteudo.bairro)
        document.getElementById('uf').value = (conteudo.uf)
        document.getElementById('localidade').value = (conteudo.localidade)
        document.getElementById('complemento').value = (conteudo.complemento)
        document.getElementById('ibge').value = (conteudo.ibge)
        document.getElementById('gia').value = (conteudo.gia)
        document.getElementById('ddd').value = (conteudo.ddd)
        document.getElementById('siafi').value = (conteudo.siafi)
    } else {
        alert("CEP não encontrado")
    }
}

function buscaCep(valor) {
    var cep = valor.replace(/\D/g, '')
    if (cep != ''){
        var validarcep = /^[0-9]{8}$/
        if (validarcep.test(cep)) {
            document.getElementById('rua').value = '...'
            document.getElementById('bairro').value = '...'
            document.getElementById('uf').value = '...'
            document.getElementById('localidade').value = '...'
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornaValores`
            document.body.appendChild(script)
        } else {
            alert("Formato CEP inválido")
        }
    }
} */

/* resgatar id do campo id para quando
 o campo sair do foco ativar a função definida */
$("#cep").blur(function(e) {
    let cep = this.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            response.json()
                .then(data => mostrarDados(data))
    })
    const mostrarDados = (result) => {
        for(const campo in result){
            if (document.querySelector("#"+campo)) {
                document.querySelector("#"+campo).value = result[campo]
            }
        }
    }
})

