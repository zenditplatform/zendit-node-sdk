import { ZenditApi as baseAPI } from './zenditApi';

export class ZenditApi extends baseAPI {

    constructor(apiKey?: string) {
        super()
        if (apiKey) {
            this.authentications.ApiKey.apiKey = `Bearer ${apiKey}`;
        }
    }

}
