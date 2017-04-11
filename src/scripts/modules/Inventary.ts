import { Stuff } from './Stuff'
import { Resource } from './Resource'

export class Inventary {

    private _inventaryArray: Array<Stuff|Resource>;


	constructor(inventaryArray: Array<Stuff|Resource>) {
		this._inventaryArray = inventaryArray;
	}

    addItem(item: ){
        
    }    

	public get inventaryArray(): Array<Stuff|Resource> {
		return this._inventaryArray;
	}
	public set inventaryArray(value: Array<Stuff|Resource>) {
		this._inventaryArray = value;
	}
    
    
}