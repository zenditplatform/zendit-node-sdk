/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoVoucherField } from './DtoVoucherField';
import {
    DtoVoucherFieldFromJSON,
    DtoVoucherFieldFromJSONTyped,
    DtoVoucherFieldToJSON,
    DtoVoucherFieldToJSONTyped,
} from './DtoVoucherField';
import type { DtoPriceType } from './DtoPriceType';
import {
    DtoPriceTypeFromJSON,
    DtoPriceTypeFromJSONTyped,
    DtoPriceTypeToJSON,
    DtoPriceTypeToJSONTyped,
} from './DtoPriceType';
import type { DtoPurchaseValue } from './DtoPurchaseValue';
import {
    DtoPurchaseValueFromJSON,
    DtoPurchaseValueFromJSONTyped,
    DtoPurchaseValueToJSON,
    DtoPurchaseValueToJSONTyped,
} from './DtoPurchaseValue';
import type { DtoConfirmation } from './DtoConfirmation';
import {
    DtoConfirmationFromJSON,
    DtoConfirmationFromJSONTyped,
    DtoConfirmationToJSON,
    DtoConfirmationToJSONTyped,
} from './DtoConfirmation';
import type { DtoError } from './DtoError';
import {
    DtoErrorFromJSON,
    DtoErrorFromJSONTyped,
    DtoErrorToJSON,
    DtoErrorToJSONTyped,
} from './DtoError';
import type { DtoTransactionLogItem } from './DtoTransactionLogItem';
import {
    DtoTransactionLogItemFromJSON,
    DtoTransactionLogItemFromJSONTyped,
    DtoTransactionLogItemToJSON,
    DtoTransactionLogItemToJSONTyped,
} from './DtoTransactionLogItem';
import type { DtoProductType } from './DtoProductType';
import {
    DtoProductTypeFromJSON,
    DtoProductTypeFromJSONTyped,
    DtoProductTypeToJSON,
    DtoProductTypeToJSONTyped,
} from './DtoProductType';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
    DtoTransactionStatusToJSONTyped,
} from './DtoTransactionStatus';
import type { DtoVoucherReceipt } from './DtoVoucherReceipt';
import {
    DtoVoucherReceiptFromJSON,
    DtoVoucherReceiptFromJSONTyped,
    DtoVoucherReceiptToJSON,
    DtoVoucherReceiptToJSONTyped,
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
     * @type {string}
     * @memberof DtoVoucherPurchase
     */
    brandName: string;
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
export function instanceOfDtoVoucherPurchase(value: object): value is DtoVoucherPurchase {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('costCurrency' in value) || value['costCurrency'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('fields' in value) || value['fields'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceCurrency' in value) || value['priceCurrency'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('sendCurrency' in value) || value['sendCurrency'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoVoucherPurchaseFromJSON(json: any): DtoVoucherPurchase {
    return DtoVoucherPurchaseFromJSONTyped(json, false);
}

export function DtoVoucherPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchase {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
        'confirmation': json['confirmation'] == null ? undefined : DtoConfirmationFromJSON(json['confirmation']),
        'cost': json['cost'],
        'costCurrency': json['costCurrency'],
        'country': json['country'],
        'createdAt': json['createdAt'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'fields': ((json['fields'] as Array<any>).map(DtoVoucherFieldFromJSON)),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': json['price'],
        'priceCurrency': json['priceCurrency'],
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'receipt': json['receipt'] == null ? undefined : DtoVoucherReceiptFromJSON(json['receipt']),
        'regions': json['regions'] == null ? undefined : json['regions'],
        'send': json['send'],
        'sendCurrency': json['sendCurrency'],
        'shortNotes': json['shortNotes'],
        'status': DtoTransactionStatusFromJSON(json['status']),
        'subTypes': json['subTypes'],
        'transactionId': json['transactionId'],
        'updatedAt': json['updatedAt'],
        'value': json['value'] == null ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

  export function DtoVoucherPurchaseToJSON(json: any): DtoVoucherPurchase {
      return DtoVoucherPurchaseToJSONTyped(json, false);
  }

  export function DtoVoucherPurchaseToJSONTyped(value?: DtoVoucherPurchase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
        'confirmation': DtoConfirmationToJSON(value['confirmation']),
        'cost': value['cost'],
        'costCurrency': value['costCurrency'],
        'country': value['country'],
        'createdAt': value['createdAt'],
        'error': DtoErrorToJSON(value['error']),
        'fields': ((value['fields'] as Array<any>).map(DtoVoucherFieldToJSON)),
        'log': ((value['log'] as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': value['price'],
        'priceCurrency': value['priceCurrency'],
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'receipt': DtoVoucherReceiptToJSON(value['receipt']),
        'regions': value['regions'],
        'send': value['send'],
        'sendCurrency': value['sendCurrency'],
        'shortNotes': value['shortNotes'],
        'status': DtoTransactionStatusToJSON(value['status']),
        'subTypes': value['subTypes'],
        'transactionId': value['transactionId'],
        'updatedAt': value['updatedAt'],
        'value': DtoPurchaseValueToJSON(value['value']),
    };
}

