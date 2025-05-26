import { ZenditApi as baseAPI } from './ZenditApi';
import { Configuration } from "../runtime";

const USER_AGENT_VERSION = "1.7.0";

export class ZenditApi extends baseAPI {

    constructor(apiKey?: string) {
        const config = new Configuration({
            apiKey: `Bearer ${apiKey}`,
            headers: {"User-Agent": `ZenditSDK/${USER_AGENT_VERSION} NodeJS`},
        });

        super(config);
    }

}
