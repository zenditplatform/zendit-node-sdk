import { DtoTopupPurchase } from './dtoTopupPurchase';

export class DtoTopupPurchasesResponse {
    'limit'?: number;
    'list'?: Array<DtoTopupPurchase>;
    'offset'?: number;
    'total'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "list",
            "baseName": "list",
            "type": "Array<DtoTopupPurchase>"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DtoTopupPurchasesResponse.attributeTypeMap;
    }
}

