import { Resource } from './Resource'

export class SubFace {

    private _type: Resource;
    private _number: number;

	constructor(type: Resource = new Resource() , number = 1) {
		this._type = type;
		this._number = number;
	}

	public get type(): Resource {
		return this._type;
	}
	public set type(value: Resource) {
		this._type = value;
	}
	public get number(): number {
		return this._number;
	}
	public set number(value: number) {
		this._number = value;
	}
    
}