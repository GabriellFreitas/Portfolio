//Juros/comprador || Na hora 5,31% || 14 dias 4,36% || 30 dias 3,60%
// (valor*porcentagem) / 100




function simular() {

    let valorD = document.getElementById("valor");
    let parcela = document.getElementById("option");
    let cair = document.getElementById("optionC");


    let jurosTotal = parseFloat(parcela.value) + parseFloat(cair.value);
    let Total = parseFloat(valorD.value) * parseFloat(jurosTotal) / 100;
    let TotalJuros = parseFloat(valorD.value) + parseFloat(Total);


    if (valorD.value.length > 0) {

        if (parcela.value == "4.59") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 2;

            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 2x " + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "5.97") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 3;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 3x " + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "7.33") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 4;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 4x " + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "8.66") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 5;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 5x " + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "9.96") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 6;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 6x " + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "11.24") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 7;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 7x" + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "12.50") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 8;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 8x" + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "13.73") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 9;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 9x" + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "14.93") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 10;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 10x" + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "16.12") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 11;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 11x" + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }
        else if (parcela.value == "17.28") {
            let parcelaTotal = (parseFloat(valorD.value) + parseFloat(Total)) / 12;
            document.getElementById("resultadoTotal").innerHTML = ("Total com juros: " + TotalJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) + "");
            document.getElementById("Resultado").innerHTML = ("O Valor da sua parcela: 12x" + parcelaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
        }

    }
    else {
        document.getElementById("Resultado").innerHTML = ("Por gentileza preencher os dados do campo a cima.")
        document.getElementById("resultadoTotal").innerHTML = ("")

    }


}


document.getElementById("limpar_campo").addEventListener("click", function() {
    location.reload();
  });