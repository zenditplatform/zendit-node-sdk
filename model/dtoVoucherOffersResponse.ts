import { DtoVoucherOffer } from './dtoVoucherOffer';

export class DtoVoucherOffersResponse {
    'limit'?: number;
    'list'?: Array<DtoVoucherOffer>;
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
            "type": "Array<DtoVoucherOffer>"
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
        return DtoVoucherOffersResponse.attributeTypeMap;
    }
}

