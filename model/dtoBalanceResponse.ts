export class DtoBalanceResponse {
    'availableBalance'?: number;
    'currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "availableBalance",
            "baseName": "availableBalance",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoBalanceResponse.attributeTypeMap;
    }
}

