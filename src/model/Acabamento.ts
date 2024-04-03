import { Produto } from "./produto"; 

export class Acabamento extends Produto{
    
    private _laminaCurta: Number;

	constructor(id: number, nome: string, tipo: number, preco: number, laminaCurta: number) {
        super(id, nome, tipo, preco);
		this._laminaCurta = laminaCurta;
	}

    /**
     * Getter generico
     * @return {number}
     */
	public get laminaCurta(): number {
		return this.laminaCurta
	}

    /**
     * Setter generico
     * @param {number} value
     */
	public set laminaCurta(value: number) {
		this.laminaCurta = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`laminaCurta: ${this._laminaCurta}`);
    }
}

