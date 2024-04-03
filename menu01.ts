import readlinesync from "readline-sync";
import { ProdutoController } from "./src/controller/produtoController"; 
import { Corte } from "./src/model/Corte";
import { Acabamento } from "./src/model/Acabamento";

export function main() {


    let opcao, id, tipo, preco, laminaGrande, laminaCurta: number;
    let nome, corte, acabamento: string;
    let tipoProduto = ['Corte', 'Acabamento'];

    const produtoController: ProdutoController = new ProdutoController();

    // produtoController.cadastrar(new Corte(produtoController.gerarId(),
    //     "Legend", 1, 450.00, 2.9));

    //     produtoController.cadastrar(new Acabamento(produtoController.gerarId(),
    //     "Detailer", 2 , 859.00, 1.5));


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
            console.log("\nSair! \n\n\n Paraiso das maquininhas!");
            sobre();        
            process.exit(0);
            break
            }

        switch (opcao) {
            case 1:

                console.log("\tListar todos os produtos");
                produtoController.listarTodas();
                keyPress()
                break

           case 2:
                console.log("\tListar produto por ID")
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;


            case 3:
                console.log("\tCadastrar produto")
                
                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                    laminaGrande = readlinesync.questionFloat("Digite o tamanho da lamina: ");
                        produtoController.cadastrar(new Corte(produtoController.gerarId(),
                            nome, tipo, preco, laminaGrande));
                        break;
                        case 2:
                            laminaCurta = readlinesync.questionFloat("Digite o tamanho da lamina: ");
                            produtoController.cadastrar(new Acabamento(produtoController.gerarId(),
                                nome, tipo, preco, laminaCurta));
                            break;
                }            
                
                keyPress()
                break;

            case 4: 
               console.log("\tAtualizar produto")
               id = readlinesync.questionInt("Digite o Id do Produto: ");
            let produto = produtoController.buscarNoArray(id);

               if (produto !== null){
                   nome = readlinesync.question("Digite o Nome do Produto: ");
                   tipo = produto.tipo;
                      preco = readlinesync.questionFloat("Digite o preco: ");
   
      switch (tipo) {
              case 1:
                           laminaGrande = readlinesync.questionFloat("Digite o tamanho da lamina: ");
                           produtoController.atualizar(new Corte(id,
                               nome, tipo, preco, laminaGrande));
                           break;
                       
                case 2:
                           laminaCurta = readlinesync.questionFloat("Digite o tamanho da lamina: ");
                           produtoController.atualizar(new Acabamento(id,
                               nome, tipo, preco, laminaCurta));
                           break;
                   }

               }else
                   console.log("Produto não Encontrado!")

               keyPress()
                break;
                
        
            case 5:
                console.log("\tDeletar produto")
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletar(id);
                keyPress()
                break;
                   }
    }

function sobre(): void {
    console.log("\n*****************************************************")
    console.log("\t\t\t\tProjeto Desenvolvido por: ")
    console.log("\t\t\t\tBruna Teles")
    console.log("\t\t\t\tgithub.com/bru-tls")}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}}
main()