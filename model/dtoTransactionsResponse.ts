import { DtoTransaction } from './dtoTransaction';

export class DtoTransactionsResponse {
    'limit'?: number;
    'list'?: Array<DtoTransaction>;
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
            "type": "Array<DtoTransaction>"
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
        return DtoTransactionsResponse.attributeTypeMap;
    }
}

