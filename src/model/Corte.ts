import { Produto } from "./produto"; 

export class Corte extends Produto{
    
    private _laminaGrande: number

	constructor(id: number, nome: string, tipo: number, preco: number, laminaGrande: number) {
        super(id, nome, tipo, preco) 
		this._laminaGrande = laminaGrande 
	}

    /**
     * Getter generico
     * @return {number}
     */
	public get laminaGrande(): number {
		return this.laminaGrande
	}

    /**
     * Setter generico
     * @param {number} value
     */
	public set laminaGrande(value: number) {
		this.laminaGrande = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Lamina grande: ${this._laminaGrande}`);
    }
}