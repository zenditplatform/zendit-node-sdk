export class DtoTopupSender {
    'country'?: string;
    'phoneNumber'?: string;

    static discriminator: string | undefined = undefined;

    constructor(country?: string, phoneNumber?: string) {
        if (country !== undefined)
           this.country = country;
        if (phoneNumber !== undefined) 
           this.phoneNumber = phoneNumber;
    }

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

