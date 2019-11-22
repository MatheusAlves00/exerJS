function contar(){
    var valorInicio = document.getElementById('input-inicio').value;
    var valorFim = document.getElementById('input-fim').value;
    var qtdPasso = document.getElementById('input-passo').value;
    var res = document.getElementById('res');
    
    if(valorInicio == '' || valorFim == '' || qtdPasso == ''){
        res.innerHTML = 'Impossível contar!';
    } else if(Number(qtdPasso) == 0){
        window.alert('Passo inválido! Considerando PASSO 1');
        var inicio = Number(valorInicio);
        var fim = Number(valorFim);

        res.innerHTML = 'Contando: <br>';
        if(inicio <= fim){
            for(var i = inicio; i <= fim; i++){
                res.innerHTML += `${i} `;
            }
        } else if (inicio > fim){
            for(var i = inicio; i >= fim; i--){
                res.innerHTML += `${i} `;
            }
        }
    } else {
        var inicio = Number(valorInicio);
        var fim = Number(valorFim);
        var passo = Number(qtdPasso);

        res.innerHTML = 'Contando: <br>';
        if(inicio <= fim){
            // Contagem crescente
            for(var i = inicio; i <= fim; i += passo){
                res.innerHTML += `${i} `;
            }
        } else if (inicio > fim){
            //Contagem regressiva
            for(var i = inicio; i >= fim; i -= passo){
                res.innerHTML += `${i} ` + '\u{1F449}';
            }
        }
    }
}