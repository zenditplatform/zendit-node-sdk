import { DtoError } from './dtoError';
import { DtoPriceType } from './dtoPriceType';
import { DtoProductType } from './dtoProductType';
import { DtoPurchaseValue } from './dtoPurchaseValue';
import { DtoTransactionLogItem } from './dtoTransactionLogItem';
import { DtoTransactionStatus } from './dtoTransactionStatus';
import { DtoVoucherField } from './dtoVoucherField';
import { DtoVoucherReceipt } from './dtoVoucherReceipt';

export class DtoVoucherPurchase {
    'brand'?: string;
    'cost'?: number;
    'costCurrency'?: string;
    'country'?: string;
    'createdAt'?: string;
    'error'?: DtoError;
    'fields'?: Array<DtoVoucherField>;
    'log'?: Array<DtoTransactionLogItem>;
    'notes'?: string;
    'offerId'?: string;
    'price'?: number;
    'priceCurrency'?: string;
    'priceType'?: DtoPriceType;
    'productType'?: DtoProductType;
    'receipt'?: DtoVoucherReceipt;
    'send'?: number;
    'sendCurrency'?: string;
    'shortNotes'?: string;
    'status'?: DtoTransactionStatus;
    'subTypes'?: Array<string>;
    'transactionId'?: string;
    'updatedAt'?: string;
    'value'?: DtoPurchaseValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number"
        },
        {
            "name": "costCurrency",
            "baseName": "costCurrency",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "DtoError"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<DtoVoucherField>"
        },
        {
            "name": "log",
            "baseName": "log",
            "type": "Array<DtoTransactionLogItem>"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "offerId",
            "baseName": "offerId",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "priceCurrency",
            "baseName": "priceCurrency",
            "type": "string"
        },
        {
            "name": "priceType",
            "baseName": "priceType",
            "type": "DtoPriceType"
        },
        {
            "name": "productType",
            "baseName": "productType",
            "type": "DtoProductType"
        },
        {
            "name": "receipt",
            "baseName": "receipt",
            "type": "DtoVoucherReceipt"
        },
        {
            "name": "send",
            "baseName": "send",
            "type": "number"
        },
        {
            "name": "sendCurrency",
            "baseName": "sendCurrency",
            "type": "string"
        },
        {
            "name": "shortNotes",
            "baseName": "shortNotes",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DtoTransactionStatus"
        },
        {
            "name": "subTypes",
            "baseName": "subTypes",
            "type": "Array<string>"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "DtoPurchaseValue"
        }    ];

    static getAttributeTypeMap() {
        return DtoVoucherPurchase.attributeTypeMap;
    }
}

export namespace DtoVoucherPurchase {
}
