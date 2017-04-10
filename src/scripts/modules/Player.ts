import { DiceCollection } from './DiceCollection'

export class Player {

    private _pseudo: string;
    private _diceCollection: DiceCollection;

	constructor(pseudo: string, diceCollection: DiceCollection) {
		this._pseudo = pseudo;
		this._diceCollection = diceCollection;
	}

	public get pseudo(): string {
		return this._pseudo;
	}
	public set pseudo(value: string) {
		this._pseudo = value;
	}
	public get diceCollection(): DiceCollection {
		return this._diceCollection;
	}
	public set diceCollection(value: DiceCollection) {
		this._diceCollection = value;
	}
    

}