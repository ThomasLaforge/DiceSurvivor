import { Dice } from './Dice'

export class DiceCollection {
    
    private _dices: Dice[];

	constructor(dices: Dice[]) {
		this._dices = dices;
	}
    
	public get dices(): Dice[] {
		return this._dices;
	}
	public set dices(value: Dice[]) {
		this._dices = value;
	}
    
}