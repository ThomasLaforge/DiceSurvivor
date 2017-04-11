import { DiceCollection } from './DiceCollection'
import { Dice } from './Dice'
import { Resource } from './Resource'
import { Stuff } from './Stuff'
import { Inventary } from './Inventary'
import { HUNGER__DEFAULT_LOSE, HUNGER__DEFAULT_WIN, HUNGER__MIN, HUNGER__MAX, HEALTH__DEFAULT_LOSE, HEALTH__DEFAULT_WIN, HEALTH__MIN, HEALTH__MAX, HUNGER__DEFAULT, HEALTH__DEFAULT } from './Configuration'

export class Player {

    private _pseudo: string;
    private _diceCollection: DiceCollection;
	private _health: number;
	private _hunger: number;
	private _inventary: Inventary;

	constructor(pseudo: string, diceCollection: DiceCollection, health: number = HEALTH__DEFAULT, hunger: number = HUNGER__DEFAULT) {
		this._pseudo = pseudo;
		this._diceCollection = diceCollection;
	}

	winHealth(healthWon: number = HEALTH__DEFAULT_WIN){
		this.health += healthWon;
		if(this.health > HEALTH__MAX) {
			this.health = HEALTH__MAX
		}
	}
	loseHealth(healthLost: number = HEALTH__DEFAULT_LOSE){
		this.health -= healthLost;
		if(this.health < HEALTH__MIN) {
			this.health = HEALTH__MIN
		}
	}
	winHunger(hungerWon: number = HUNGER__DEFAULT_WIN){
		this.hunger += hungerWon;
		if(this.hunger > HUNGER__MAX) {
			this.hunger = HUNGER__MAX
		}
	}
	loseHunger(hungerLost: number = HUNGER__DEFAULT_LOSE){
		this.hunger -= hungerLost;
		if(this.hunger < HUNGER__MIN) {
			this.hunger = HUNGER__MIN
		}
	}

	getNewDice(){
		this.diceCollection.addNewDice();
	}

	loseDice(dice?: Dice){
		this.diceCollection.removeDice(dice)
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
	public get health(): number {
		return this._health;
	}
	public set health(value: number) {
		this._health = value;
	}
	public get hunger(): number {
		return this._hunger;
	}
	public set hunger(value: number) {
		this._hunger = value;
	}
    

}