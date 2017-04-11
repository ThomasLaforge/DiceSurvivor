import { ResourceType } from './DiceSurvivor'
import { RESOURCE__DEFAULT } from './Configuration'
import { Item } from './Item'

export class Resource extends Item {

	constructor(type: ResourceType = RESOURCE__DEFAULT) {
		super(type);
	}

}