import { Face } from './Face'
import { DiceInterface } from './DiceSurvivor';
import { DICE__NB_FACES } from './Configuration'
import * as _ from 'lodash'

class Dice implements DiceInterface {

    private _faces: Face[];

	constructor(faces: Face[] = new Array(DICE__NB_FACES).fill(new Face()) ) {
		this.faces = faces;
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
