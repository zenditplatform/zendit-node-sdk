import { ZenditApi as baseAPI } from './ZenditApi';
import {Configuration} from "../runtime";

export class ZenditApi extends baseAPI {

    constructor(apiKey?: string) {
        const config = new Configuration({
            apiKey: `Bearer ${apiKey}`,
            headers: {"User-Agent": "ZenditSDK/1.3.1 NodeJS"},
        })

        super(config)
    }

}
