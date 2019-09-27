function dadostable(json) {
    //Declaração de variaveis
    var tabel = document.getElementById('tabela');              //Variavel que recebe a tabela
    var numOfRows = tabel.rows.length;                          //Numero de linhas da tabela 
    var newRow;                                                 //valiavel para criação de linhas

    //Laço de repetição para criar a quantidade de linhas necessarias
    json.forEach(function (e) {                                 //Laço de repetição para-cada objeto do json
        newRow = tabel.insertRow(numOfRows);                    //Criando nova linha na tabela
        newRow.insertCell(0).innerHTML = e.name;                //Criando novas colunas e atribuindo os dados do jason
        newRow.insertCell(1).innerHTML = e.fipe_name;
        newRow.insertCell(2).innerHTML = e.order;
        newRow.insertCell(3).innerHTML = e.key;
        newRow.insertCell(4).innerHTML = e.id;
    });
}

//Função que le os dados do arquivo json recebido no input
function lerdados() {
    var file = document.getElementById("entrada").files[0];      //Variavel recebe os dados
    if (file) {                                                 //se houver "file"
        var reader = new FileReader();                          //Vaiavel declarada como arquivo de leitura
        reader.readAsText(file, "UTF-8");                       //Leitura do "file" como UTF-8
        reader.onload = function (evt) {                        //Função de leitura
            var ordenado = JSON.parse(evt.target.result);
            ordenado.sort(function (item, item1) {              //Função que ordena os dados por ID
                if (item.id > item1.id) {
                    return -1;
                }
                if (item.id < item1.id) {
                    return 1;
                }
                return 0;
            });
            dadostable(ordenado);                               //Chamada da função, parametro objeto json 
        }
        reader.onerror = function (evt) {                       //Se houver erro na leitura do aquivo
            alert("Erro na leitura do arquivo.");               //alerta de erro
        }
    }

}

//Marlon Rodrigues - Graduando de Ciência da Computação 
//Orientações sobre pesquisas e funções   Frank Willian - Graduado em Ciência da computação e Mestre
