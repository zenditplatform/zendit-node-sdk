/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoConfirmation } from './DtoConfirmation';
import {
    DtoConfirmationFromJSON,
    DtoConfirmationFromJSONTyped,
    DtoConfirmationToJSON,
} from './DtoConfirmation';
import type { DtoError } from './DtoError';
import {
    DtoErrorFromJSON,
    DtoErrorFromJSONTyped,
    DtoErrorToJSON,
} from './DtoError';
import type { DtoPriceType } from './DtoPriceType';
import {
    DtoPriceTypeFromJSON,
    DtoPriceTypeFromJSONTyped,
    DtoPriceTypeToJSON,
} from './DtoPriceType';
import type { DtoProductType } from './DtoProductType';
import {
    DtoProductTypeFromJSON,
    DtoProductTypeFromJSONTyped,
    DtoProductTypeToJSON,
} from './DtoProductType';
import type { DtoPurchaseValue } from './DtoPurchaseValue';
import {
    DtoPurchaseValueFromJSON,
    DtoPurchaseValueFromJSONTyped,
    DtoPurchaseValueToJSON,
} from './DtoPurchaseValue';
import type { DtoTransactionLogItem } from './DtoTransactionLogItem';
import {
    DtoTransactionLogItemFromJSON,
    DtoTransactionLogItemFromJSONTyped,
    DtoTransactionLogItemToJSON,
} from './DtoTransactionLogItem';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
} from './DtoTransactionStatus';
import type { DtoVoucherField } from './DtoVoucherField';
import {
    DtoVoucherFieldFromJSON,
    DtoVoucherFieldFromJSONTyped,
    DtoVoucherFieldToJSON,
} from './DtoVoucherField';
import type { DtoVoucherReceipt } from './DtoVoucherReceipt';
import {
    DtoVoucherReceiptFromJSON,
    DtoVoucherReceiptFromJSONTyped,
    DtoVoucherReceiptToJSON,
} from './DtoVoucherReceipt';

/**
 * 
 * @export
 * @interface DtoVoucherPurchase
 */
export interface DtoVoucherPurchase {
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    brand: string;
    /**
     * 
     * @type {DtoConfirmation}
     * @memberof DtoVoucherPurchase
     */
    confirmation?: DtoConfirmation;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchase
     */
    cost: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    costCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    createdAt: string;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoVoucherPurchase
     */
    error?: DtoError;
    /**
     * 
     * @type {Array<DtoVoucherField>}
     * @memberof DtoVoucherPurchase
     */
    fields: Array<DtoVoucherField>;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoVoucherPurchase
     */
    log: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    offerId: string;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchase
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    priceCurrency: string;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoVoucherPurchase
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoVoucherPurchase
     */
    productType: DtoProductType;
    /**
     * 
     * @type {DtoVoucherReceipt}
     * @memberof DtoVoucherPurchase
     */
    receipt?: DtoVoucherReceipt;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherPurchase
     */
    regions?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchase
     */
    send: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    sendCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    shortNotes: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoVoucherPurchase
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherPurchase
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    transactionId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    updatedAt: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoVoucherPurchase
     */
    value?: DtoPurchaseValue;
}

/**
 * Check if a given object implements the DtoVoucherPurchase interface.
 */
export function instanceOfDtoVoucherPurchase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brand" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "costCurrency" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "fields" in value;
    isInstance = isInstance && "log" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "priceCurrency" in value;
    isInstance = isInstance && "priceType" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "send" in value;
    isInstance = isInstance && "sendCurrency" in value;
    isInstance = isInstance && "shortNotes" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "subTypes" in value;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function DtoVoucherPurchaseFromJSON(json: any): DtoVoucherPurchase {
    return DtoVoucherPurchaseFromJSONTyped(json, false);
}

export function DtoVoucherPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'confirmation': !exists(json, 'confirmation') ? undefined : DtoConfirmationFromJSON(json['confirmation']),
        'cost': json['cost'],
        'costCurrency': json['costCurrency'],
        'country': json['country'],
        'createdAt': json['createdAt'],
        'error': !exists(json, 'error') ? undefined : DtoErrorFromJSON(json['error']),
        'fields': ((json['fields'] as Array<any>).map(DtoVoucherFieldFromJSON)),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': json['price'],
        'priceCurrency': json['priceCurrency'],
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'receipt': !exists(json, 'receipt') ? undefined : DtoVoucherReceiptFromJSON(json['receipt']),
        'regions': !exists(json, 'regions') ? undefined : json['regions'],
        'send': json['send'],
        'sendCurrency': json['sendCurrency'],
        'shortNotes': json['shortNotes'],
        'status': DtoTransactionStatusFromJSON(json['status']),
        'subTypes': json['subTypes'],
        'transactionId': json['transactionId'],
        'updatedAt': json['updatedAt'],
        'value': !exists(json, 'value') ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoVoucherPurchaseToJSON(value?: DtoVoucherPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'brand': value.brand,
        'confirmation': DtoConfirmationToJSON(value.confirmation),
        'cost': value.cost,
        'costCurrency': value.costCurrency,
        'country': value.country,
        'createdAt': value.createdAt,
        'error': DtoErrorToJSON(value.error),
        'fields': ((value.fields as Array<any>).map(DtoVoucherFieldToJSON)),
        'log': ((value.log as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value.notes,
        'offerId': value.offerId,
        'price': value.price,
        'priceCurrency': value.priceCurrency,
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'receipt': DtoVoucherReceiptToJSON(value.receipt),
        'regions': value.regions,
        'send': value.send,
        'sendCurrency': value.sendCurrency,
        'shortNotes': value.shortNotes,
        'status': DtoTransactionStatusToJSON(value.status),
        'subTypes': value.subTypes,
        'transactionId': value.transactionId,
        'updatedAt': value.updatedAt,
        'value': DtoPurchaseValueToJSON(value.value),
    };
}

