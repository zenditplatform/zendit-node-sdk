export class DtoPrice {
    'currency'?: string;
    'fixed'?: number;
    'fx'?: number;
    'margin'?: number;
    'max'?: number;
    'min'?: number;
    'suggestedFixed'?: number;
    'suggestedFx'?: number;

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
            "name": "margin",
            "baseName": "margin",
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
        },
        {
            "name": "suggestedFixed",
            "baseName": "suggestedFixed",
            "type": "number"
        },
        {
            "name": "suggestedFx",
            "baseName": "suggestedFx",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DtoPrice.attributeTypeMap;
    }
}

