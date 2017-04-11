import { Dice } from './Dice'
import { DICE_COLLECTION__INITIAL_DICE_NUMBER, DICE_COllECTION__MAX_DICE_NUMBER } from './Configuration'
import * as _ from 'lodash'

export class DiceCollection {
    
    private _dices: Dice[];

	constructor(dices: Dice[] = new Array(DICE_COLLECTION__INITIAL_DICE_NUMBER).fill( new Dice() )) {
		this._dices = dices;
	}
    
	addNewDice(dice = new Dice() ){
		let added = false;
		if(this.dices.length < DICE_COllECTION__MAX_DICE_NUMBER){
			this.dices.push(dice);
			added = true;
		}
		return added;
	}
	removeDice(dice?: Dice){
		let index: number = dice ? this.dices.indexOf(dice) : _.random(this.dices.length - 1);

		if(index !== -1){
			this.dices.splice(index, 1)
		}
		else{
			console.log('try to remove dice not in collection')
		}
	}

	public get dices(): Dice[] {
		return this._dices;
	}
	public set dices(value: Dice[]) {
		this._dices = value;
	}
    
}