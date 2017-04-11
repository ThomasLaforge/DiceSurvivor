import { Item } from './Item'
import { StuffType } from './DiceSurvivor'

export class Stuff extends Item {

	constructor(type: StuffType) {
        super(type);
	}
    
}