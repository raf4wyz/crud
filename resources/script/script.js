// Laço de repetição 

// let nomes = ["Ana clara","Denise Martins","Rayssa giovanelly","Roger Alcantara"];

// nomes.forEach(nome =>{
//     console.log(nome)
// });


// Enquanto 
// Enquanto a condição for verdadeira, o laço continuará se repetindo 
// let nome = prompt("Digite o nome do usuário:")
// while(nome !== "Thiago"){
//     console.log("Insira o nome correto:");
//     nome = prompt("Digite o nome do usuário novamente:")
// }

// let tarefas = ["Estudar", "Lavar louça", "ir para aula",]
// let opcao = Number(prompt("EScolha uma opcao a seguir"));

// whille(opcao !==0){

// }

// Atividade 
let tarefas = ["Estudar JavaScript",
    "Fazer exercicíos", 
    "ler um livro"];

let opcao = Number(prompt("===== MINHA TOO LIST===== \n \n 1 - Cadastrar tarefa \n 2 - Listar tarefas \n 3 - Buscar tarefa \n 4 - Atualizar tarefa \n - 5 Excluir tarefa \n 6 - Filtrar tarefas - \n7 Adicionar tarefa no inicio - \n 8 Remover primeira tarefa - \n 9 Remover ultima tarefa - \n 0 Sair \n \n Escolha uma opcao: "));

switch (opcao) {
    case "1":
    // Cadastrar tarefa com push
    let novaTarefa = prompt("Digite o nome da tarefa:");
    tarefas-Push(novaTarefa);
    alert("Tarefa cadastrada");
    break;

    case "2":
    // Listar tarefa com forEach 
    break;
    tarefa.forEach(tarefa => {
        alert(tarefa)
    });

    case "3":
    // Buscar tarefas com includes 
    break ;
    case "4":

    // Atualizar tarefa com indexOf
    break;
    case "5":

    // Excluir tarefa com findindex e splice
    break;
    case "6":

    // Filtrar tarefas com filter
    break;
    case "7":

    // Adicionar no inicio com unshift 
    break;
    case "8":

    // Remover do inicío com shift 
    break;
    case "9":

    // Remover do final com pop 
    break; 
    case "0":
        console.log("Até logo");
        break;

        default: 
        console.log("Opção inválida!");
        
}
    



