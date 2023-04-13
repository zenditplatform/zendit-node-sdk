/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
    brand?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchase
     */
    cost?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    costCurrency?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    createdAt?: string;
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
    fields?: Array<DtoVoucherField>;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoVoucherPurchase
     */
    log?: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    offerId?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchase
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    priceCurrency?: string;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoVoucherPurchase
     */
    priceType?: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoVoucherPurchase
     */
    productType?: DtoProductType;
    /**
     * 
     * @type {DtoVoucherReceipt}
     * @memberof DtoVoucherPurchase
     */
    receipt?: DtoVoucherReceipt;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchase
     */
    send?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    sendCurrency?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    shortNotes?: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoVoucherPurchase
     */
    status?: DtoTransactionStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherPurchase
     */
    subTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    transactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    updatedAt?: string;
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
        
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'costCurrency': !exists(json, 'costCurrency') ? undefined : json['costCurrency'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'error': !exists(json, 'error') ? undefined : DtoErrorFromJSON(json['error']),
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(DtoVoucherFieldFromJSON)),
        'log': !exists(json, 'log') ? undefined : ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'priceCurrency': !exists(json, 'priceCurrency') ? undefined : json['priceCurrency'],
        'priceType': !exists(json, 'priceType') ? undefined : DtoPriceTypeFromJSON(json['priceType']),
        'productType': !exists(json, 'productType') ? undefined : DtoProductTypeFromJSON(json['productType']),
        'receipt': !exists(json, 'receipt') ? undefined : DtoVoucherReceiptFromJSON(json['receipt']),
        'send': !exists(json, 'send') ? undefined : json['send'],
        'sendCurrency': !exists(json, 'sendCurrency') ? undefined : json['sendCurrency'],
        'shortNotes': !exists(json, 'shortNotes') ? undefined : json['shortNotes'],
        'status': !exists(json, 'status') ? undefined : DtoTransactionStatusFromJSON(json['status']),
        'subTypes': !exists(json, 'subTypes') ? undefined : json['subTypes'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
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
        'cost': value.cost,
        'costCurrency': value.costCurrency,
        'country': value.country,
        'createdAt': value.createdAt,
        'error': DtoErrorToJSON(value.error),
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(DtoVoucherFieldToJSON)),
        'log': value.log === undefined ? undefined : ((value.log as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value.notes,
        'offerId': value.offerId,
        'price': value.price,
        'priceCurrency': value.priceCurrency,
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'receipt': DtoVoucherReceiptToJSON(value.receipt),
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

