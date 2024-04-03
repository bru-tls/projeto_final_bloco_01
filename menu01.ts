import readlinesync from "readline-sync";


export function main() {

    let opcao 

    while (true) {
       
        console.log("                                                     ");
        console.log("                PARAISO DAS MAQUININHAS                 ");
        console.log("                                                     ");
        console.log("            1 - Listar todos os produtos        ");
        console.log("            2 - Listar produto pelo ID             ");
        console.log("            3 - Cadastrar produto        ");
        console.log("            4 - Atualizar produto          ");
        console.log("            5 - Deletar produto                     ");
        console.log("            0 - Sair                                 ");
        console.log("*****************************************************");

         

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nVOLTE SEMPRE!");
            sobre();        
            }

        switch (opcao) {
            case 1:
                console.log("\tListar todos os produtos");
                keyPress()
                break;


           case 2:
                console.log("\tListar produto por ID")
                keyPress()
                break;


            case 3:
                console.log("\tCadastrar produto")
                keyPress()
                break;

            case 4: 
               console.log("\tAtualizar produto")
                keyPress()
                break;


            case 5:
                console.log("\tDeletar produto")
                keyPress()
                break;
                   }
    }

function sobre(): void {
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: ")
    console.log("Bruna Teles")
    console.log("github.com/bru-tls")

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}}