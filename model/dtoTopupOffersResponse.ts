import { DtoTopupOffer } from './dtoTopupOffer';

export class DtoTopupOffersResponse {
    'limit'?: number;
    'list'?: Array<DtoTopupOffer>;
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
            "type": "Array<DtoTopupOffer>"
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
        return DtoTopupOffersResponse.attributeTypeMap;
    }
}

