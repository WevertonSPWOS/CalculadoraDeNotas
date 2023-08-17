function calcularMedia() {
    document.getElementById("listaAlunosAbaixo").innerHTML = "";

    const alunos = document.getElementsByClassName("aluno");
    const notas1 = document.getElementsByClassName("nota1");
    const notas2 = document.getElementsByClassName("nota2");
    const notas3 = document.getElementsByClassName("nota3");
    const notas4 = document.getElementsByClassName("nota4");
    const mediaAlunos = [];
    const alunosLista = Array.from(alunos)
    var media = 0;
    var mediaGeral = 0;

    for (var i = 0; i < 5; i++) {
        isNaN(parseFloat(notas1[i].value)) ? media += 0 : media += parseFloat(notas1[i].value) / 4;
        isNaN(parseFloat(notas2[i].value)) ? media += 0 : media += parseFloat(notas2[i].value) / 4;
        isNaN(parseFloat(notas3[i].value)) ? media += 0 : media += parseFloat(notas3[i].value) / 4;
        isNaN(parseFloat(notas4[i].value)) ? media += 0 : media += parseFloat(notas4[i].value) / 4;

        mediaGeral += media / 5;

        if (media >= 70) {
            document.getElementsByClassName("resultado")[i].innerHTML = ": " + media;
            document.getElementsByClassName("situacao")[i].innerHTML = "Aprovado";
            let aprovado =  document.getElementsByClassName("situacao")[i];
            aprovado.style.cssText =
            'background-color:#9DE0A4;' +
            'color: #105818;' +
            'border-radius: 0px 0px 10px 10px;'
        }

        else if (media < 50) {
            document.getElementsByClassName("resultado")[i].innerHTML = ": " + media;
            document.getElementsByClassName("situacao")[i].innerHTML = "Reprovado";
            let reprovado =  document.getElementsByClassName("situacao")[i];
            reprovado.style.cssText =
            'background-color:#FFB2B2;' +
            'color: #FF0000;' +
            'border-radius: 0px 0px 10px 10px;'
        }

        else {
            document.getElementsByClassName("resultado")[i].innerHTML = ": " + media;
            document.getElementsByClassName("situacao")[i].innerHTML = "Recuperação";
            let recuperacao =  document.getElementsByClassName("situacao")[i];
            recuperacao.style.cssText =
            'background-color:#F9E5A2;' +
            'color: #C09A10;' +
            'border-radius: 0px 0px 10px 10px;'
        }

        mediaAlunos.push(media);
        media = 0
    }
    
    document.getElementById("mediaGeral").innerHTML = 'Média Geral: ' + mediaGeral
    
    
    
// alunos abaixo da média
    for (var i = 0; i < 5; i++) {
        if (mediaAlunos[i] < mediaGeral) {
        
            document.getElementById("listaAlunosAbaixo").innerHTML += '<li><p>' + alunosLista[i].value + '</p><p>' + mediaAlunos[i] + '</p></li>'
        }
    }

}

// Validação do input
function validacaoInput(nota){
    if (nota.value == '') {
        nota.value = ''
    }
    else if (nota.value > 100) {
        alert("Insira uma nota menor que 100")
        nota.value = ''
    }
}