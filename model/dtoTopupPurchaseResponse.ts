import { DtoTransactionStatus } from './dtoTransactionStatus';

export class DtoTopupPurchaseResponse {
    'status'?: DtoTransactionStatus;
    'transactionId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "DtoTransactionStatus"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoTopupPurchaseResponse.attributeTypeMap;
    }
}

export namespace DtoTopupPurchaseResponse {
}
