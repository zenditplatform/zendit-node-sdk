import { DtoValueType } from './dtoValueType';

export class DtoPurchaseValue {
    'type'?: DtoValueType;
    'value'?: number;

    constructor(type: DtoValueType, value: number) {
        this.type = type;
        this.value = value; 
    }

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DtoValueType"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DtoPurchaseValue.attributeTypeMap;
    }
}

export namespace DtoPurchaseValue {
}
