import { Stuff } from './Stuff'
import { Resource } from './Resource'

export class Craft {

    private _inputs: Array<Stuff|Resource>;
    private _outputs: Resource[];
}