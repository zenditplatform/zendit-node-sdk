export class DtoZend {
    'currency'?: string;
    'fixed'?: number;
    'fx'?: number;
    'max'?: number;
    'min'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "fixed",
            "baseName": "fixed",
            "type": "number"
        },
        {
            "name": "fx",
            "baseName": "fx",
            "type": "number"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DtoZend.attributeTypeMap;
    }
}

