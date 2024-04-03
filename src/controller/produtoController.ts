import { Produto } from "../model/produto"; 
import { ProdutoRepository } from "../repository/produtoRepository";


export class ProdutoController implements ProdutoRepository{
    
    private listaProdutos: Array<Produto> = new Array<Produto>();


    public id: number = 0;

    // Método para Listar os dados de uma produto
    // inseridas na Collection listaprodutos
    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if(buscaproduto !== null)
            buscaproduto.visualizar()
        else
            console.log("\nO produto não foi Encontrado!")
    }
       
    listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
       }
    }

     // Método para adicionar Objetos das Classes 
     // produtoCorrente e produtoPoupanca
    // na Collection listaprodutos
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O produto foi adicionado!")
    }

    // Método para atualizar os dados de uma produto
    // inseridas na Collection listaprodutos
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O produto número ${produto.id} foi atualizado com êxito!`)
        }else
            console.log("\nO produto não foi encontrado!")
    }

    // Método para deletar uma produto
    // inseridas na Collection listaprodutos
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log(`O produto número ${id} foi excluído com êxito!`)
        }else
            console.log("\nO produto não foi encontrado!")
    }


    // Métodos Auxiliares

    // Método para gerar um número para uma nova produto
    public gerarId(): number{
        return ++ this.id
    }
    
    // Método para procurar uma produto pelo id
    public buscarNoArray(id: number): Produto | null{
        for (let produto of this.listaProdutos){
            if (produto.id === id)
                return produto;
       }

       return null;
    }
}