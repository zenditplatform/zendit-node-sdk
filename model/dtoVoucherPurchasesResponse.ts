import { DtoVoucherPurchase } from './dtoVoucherPurchase';

export class DtoVoucherPurchasesResponse {
    'limit'?: number;
    'list'?: Array<DtoVoucherPurchase>;
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
            "type": "Array<DtoVoucherPurchase>"
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
        return DtoVoucherPurchasesResponse.attributeTypeMap;
    }
}

