import { DiceInterface } from './DiceSurvivor';

class Dice implements DiceInterface {

    private _faces: number[];

	constructor(faces: number[]) {
		this._faces = faces;
	}

    get faces(): number[] {
		return this._faces;
	}
	set faces(newFaces: number[]) {
		this._faces = newFaces;
	}
}

export { Dice };
