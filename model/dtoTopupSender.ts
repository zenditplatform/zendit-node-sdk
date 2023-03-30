export class DtoTopupSender {
    'country'?: string;
    'phoneNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoTopupSender.attributeTypeMap;
    }
}

