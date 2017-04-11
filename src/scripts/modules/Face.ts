import { SubFace } from './SubFace'

export class Face {
    private _subFaces : SubFace[];


	constructor(subfaces: SubFace[] = [ new SubFace() ]) {
		this._subFaces = subfaces;
	}
    

	public get subfaces(): SubFace[] {
		return this._subFaces;
	}
	public set subfaces(value: SubFace[]) {
		this._subFaces = value;
	}
    

}