import { Face } from './Face'
import { DiceInterface } from './DiceSurvivor';
import * as _ from 'lodash'

class Dice implements DiceInterface {

    private _faces: Face[];

	constructor(faces: Face[]) {
		this._faces = faces;
	}

	roll(): Face{
		this.faces = _.shuffle(this.faces)
		return this.getFaceUp();
	}

	getFaceUp(){
		return this.faces[0];
	}

    public get faces(): Face[] {
		return this._faces;
	}
	public set faces(newFaces: Face[]) {
		this._faces = newFaces;
	}
}

export { Dice };
