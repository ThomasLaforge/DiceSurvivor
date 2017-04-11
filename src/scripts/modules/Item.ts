import { ResourceType, StuffType } from './DiceSurvivor'

export class Item {

    private _type: any;

    constructor(type: any){
        this.type = type;
    }

	public get type(): any {
		return this._type;
	}
	public set type(value: any) {
		this._type = value;
	}
    

}