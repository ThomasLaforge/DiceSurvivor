import { Stuff } from './Stuff'
import { Resource } from './Resource'

export class Craft {

    private _inputs: Array<Stuff|Resource>;
    private _requirements: Array<Stuff|Resource>;
    private _outputs: Resource[];

	constructor(inputs: Array<Stuff>, requirements: Array<Stuff|Resource>, outputs: Resource[]) {
		this._inputs = inputs;
		this._outputs = outputs;
        this._requirements = requirements;
	}

    process(){
        let allNeedsOk = true;
        this._requirements.forEach( need => {
            allNeedsOk = allNeedsOk && this.inputs.indexOf(need) !== -1
        })

        return allNeedsOk ? this.outputs : this.inputs;
    }    

	public get inputs(): Array<Stuff|Resource> {
		return this._inputs;
	}

	public set inputs(value: Array<Stuff|Resource>) {
		this._inputs = value;
	}

	public get outputs(): Resource[] {
		return this._outputs;
	}

	public set outputs(value: Resource[]) {
		this._outputs = value;
	}

	public get requirements(): Array<Stuff|Resource> {
		return this._requirements;
	}
	public set requirements(value: Array<Stuff|Resource>) {
		this._requirements = value;
	}
    
}