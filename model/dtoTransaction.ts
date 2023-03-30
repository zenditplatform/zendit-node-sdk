import { DtoError } from './dtoError';
import { DtoProductType } from './dtoProductType';
import { DtoTransactionLogItem } from './dtoTransactionLogItem';
import { DtoTransactionStatus } from './dtoTransactionStatus';
import { DtoTransactionType } from './dtoTransactionType';

export class DtoTransaction {
    'amount'?: number;
    'createdAt'?: string;
    'currency'?: string;
    'error'?: DtoError;
    'log'?: Array<DtoTransactionLogItem>;
    'productType'?: DtoProductType;
    'status'?: DtoTransactionStatus;
    /**
    * client operate with clientTransactionId
    */
    'transactionId'?: string;
    'type'?: DtoTransactionType;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "DtoError"
        },
        {
            "name": "log",
            "baseName": "log",
            "type": "Array<DtoTransactionLogItem>"
        },
        {
            "name": "productType",
            "baseName": "productType",
            "type": "DtoProductType"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DtoTransactionStatus"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DtoTransactionType"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoTransaction.attributeTypeMap;
    }
}

export namespace DtoTransaction {
}
