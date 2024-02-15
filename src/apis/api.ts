import { ZenditApi as baseAPI } from './ZenditApi';
import {Configuration} from "../runtime";

export class ZenditApi extends baseAPI {

    constructor(apiKey?: string) {
        const config = new Configuration({
            apiKey: `Bearer ${apiKey}`,
            headers: {"User-Agent": "ZenditSDK/1.4.0 NodeJS"},
        })

        super(config)
    }

}
