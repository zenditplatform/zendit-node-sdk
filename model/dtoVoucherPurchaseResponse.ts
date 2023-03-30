import { DtoTransactionStatus } from './dtoTransactionStatus';

export class DtoVoucherPurchaseResponse {
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
        return DtoVoucherPurchaseResponse.attributeTypeMap;
    }
}

export namespace DtoVoucherPurchaseResponse {
}
