/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
import type { DtoRecipient } from './DtoRecipient';
import {
    DtoRecipientFromJSON,
    DtoRecipientFromJSONTyped,
    DtoRecipientToJSON,
    DtoRecipientToJSONTyped,
} from './DtoRecipient';
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
import type { DtoSender } from './DtoSender';
import {
    DtoSenderFromJSON,
    DtoSenderFromJSONTyped,
    DtoSenderToJSON,
    DtoSenderToJSONTyped,
} from './DtoSender';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
    DtoTransactionStatusToJSONTyped,
} from './DtoTransactionStatus';
import type { DtoPurchaseField } from './DtoPurchaseField';
import {
    DtoPurchaseFieldFromJSON,
    DtoPurchaseFieldFromJSONTyped,
    DtoPurchaseFieldToJSON,
    DtoPurchaseFieldToJSONTyped,
} from './DtoPurchaseField';

/**
 * 
 * @export
 * @interface DtoBillPayPurchase
 */
export interface DtoBillPayPurchase {
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    brandName: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    cost: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    costBase: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    costCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    costCurrencyDivisor: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    costFee: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    createdAt: string;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoBillPayPurchase
     */
    error?: DtoError;
    /**
     * 
     * @type {Array<DtoPurchaseField>}
     * @memberof DtoBillPayPurchase
     */
    fields: Array<DtoPurchaseField>;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoBillPayPurchase
     */
    log: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    offerId: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    priceCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    priceCurrencyDivisor: number;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoBillPayPurchase
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoBillPayPurchase
     */
    productType: DtoProductType;
    /**
     * 
     * @type {DtoRecipient}
     * @memberof DtoBillPayPurchase
     */
    recipient: DtoRecipient;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayPurchase
     */
    regions?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    send: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    sendCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchase
     */
    sendCurrencyDivisor: number;
    /**
     * 
     * @type {DtoSender}
     * @memberof DtoBillPayPurchase
     */
    sender: DtoSender;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    shortNotes: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoBillPayPurchase
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayPurchase
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    transactionId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchase
     */
    updatedAt: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoBillPayPurchase
     */
    value?: DtoPurchaseValue;
}



/**
 * Check if a given object implements the DtoBillPayPurchase interface.
 */
export function instanceOfDtoBillPayPurchase(value: object): value is DtoBillPayPurchase {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('costBase' in value) || value['costBase'] === undefined) return false;
    if (!('costCurrency' in value) || value['costCurrency'] === undefined) return false;
    if (!('costCurrencyDivisor' in value) || value['costCurrencyDivisor'] === undefined) return false;
    if (!('costFee' in value) || value['costFee'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('fields' in value) || value['fields'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceCurrency' in value) || value['priceCurrency'] === undefined) return false;
    if (!('priceCurrencyDivisor' in value) || value['priceCurrencyDivisor'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('sendCurrency' in value) || value['sendCurrency'] === undefined) return false;
    if (!('sendCurrencyDivisor' in value) || value['sendCurrencyDivisor'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoBillPayPurchaseFromJSON(json: any): DtoBillPayPurchase {
    return DtoBillPayPurchaseFromJSONTyped(json, false);
}

export function DtoBillPayPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayPurchase {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
        'cost': json['cost'],
        'costBase': json['costBase'],
        'costCurrency': json['costCurrency'],
        'costCurrencyDivisor': json['costCurrencyDivisor'],
        'costFee': json['costFee'],
        'country': json['country'],
        'createdAt': json['createdAt'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'fields': ((json['fields'] as Array<any>).map(DtoPurchaseFieldFromJSON)),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': json['price'],
        'priceCurrency': json['priceCurrency'],
        'priceCurrencyDivisor': json['priceCurrencyDivisor'],
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'recipient': DtoRecipientFromJSON(json['recipient']),
        'regions': json['regions'] == null ? undefined : json['regions'],
        'send': json['send'],
        'sendCurrency': json['sendCurrency'],
        'sendCurrencyDivisor': json['sendCurrencyDivisor'],
        'sender': DtoSenderFromJSON(json['sender']),
        'shortNotes': json['shortNotes'],
        'status': DtoTransactionStatusFromJSON(json['status']),
        'subTypes': json['subTypes'],
        'transactionId': json['transactionId'],
        'updatedAt': json['updatedAt'],
        'value': json['value'] == null ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoBillPayPurchaseToJSON(json: any): DtoBillPayPurchase {
    return DtoBillPayPurchaseToJSONTyped(json, false);
}

export function DtoBillPayPurchaseToJSONTyped(value?: DtoBillPayPurchase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
        'cost': value['cost'],
        'costBase': value['costBase'],
        'costCurrency': value['costCurrency'],
        'costCurrencyDivisor': value['costCurrencyDivisor'],
        'costFee': value['costFee'],
        'country': value['country'],
        'createdAt': value['createdAt'],
        'error': DtoErrorToJSON(value['error']),
        'fields': ((value['fields'] as Array<any>).map(DtoPurchaseFieldToJSON)),
        'log': ((value['log'] as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': value['price'],
        'priceCurrency': value['priceCurrency'],
        'priceCurrencyDivisor': value['priceCurrencyDivisor'],
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'recipient': DtoRecipientToJSON(value['recipient']),
        'regions': value['regions'],
        'send': value['send'],
        'sendCurrency': value['sendCurrency'],
        'sendCurrencyDivisor': value['sendCurrencyDivisor'],
        'sender': DtoSenderToJSON(value['sender']),
        'shortNotes': value['shortNotes'],
        'status': DtoTransactionStatusToJSON(value['status']),
        'subTypes': value['subTypes'],
        'transactionId': value['transactionId'],
        'updatedAt': value['updatedAt'],
        'value': DtoPurchaseValueToJSON(value['value']),
    };
}

