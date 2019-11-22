function gerarTabuada(){
    var num = document.getElementById('input-num').value;
    var selecao = document.getElementById('tabuada');
    var mult;
    if(num == ''){
        window.alert('Por favor, digite um número!');
     } else {
        selecao.innerHTML = '';
        for(var i = 1; i <= 10; i++){
            mult = i * Number(num);
            selecao.innerHTML += `<option>${num} x ${i} = ${mult}</option>`;
        }
    }
}