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
import type { DtoTopupSender } from './DtoTopupSender';
import {
    DtoTopupSenderFromJSON,
    DtoTopupSenderFromJSONTyped,
    DtoTopupSenderToJSON,
    DtoTopupSenderToJSONTyped,
} from './DtoTopupSender';

/**
 * 
 * @export
 * @interface DtoTopupPurchase
 */
export interface DtoTopupPurchase {
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    brandName: string;
    /**
     * 
     * @type {DtoConfirmation}
     * @memberof DtoTopupPurchase
     */
    confirmation?: DtoConfirmation;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    cost: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    costCurrency: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    dataGB: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupPurchase
     */
    dataUnlimited: boolean;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    durationDays: number;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoTopupPurchase
     */
    error?: DtoError;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoTopupPurchase
     */
    log: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    offerId: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    priceCurrency: string;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoTopupPurchase
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoTopupPurchase
     */
    productType: DtoProductType;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    recipientPhoneNumber: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoTopupPurchase
     */
    regions?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    send: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    sendCurrency: string;
    /**
     * 
     * @type {DtoTopupSender}
     * @memberof DtoTopupPurchase
     */
    sender: DtoTopupSender;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    shortNotes: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    smsNumber: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupPurchase
     */
    smsUnlimited: boolean;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTopupPurchase
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoTopupPurchase
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    transactionId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    updatedAt: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoTopupPurchase
     */
    value?: DtoPurchaseValue;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    voiceMinutes: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupPurchase
     */
    voiceUnlimited: boolean;
}



/**
 * Check if a given object implements the DtoTopupPurchase interface.
 */
export function instanceOfDtoTopupPurchase(value: object): value is DtoTopupPurchase {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('costCurrency' in value) || value['costCurrency'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('dataGB' in value) || value['dataGB'] === undefined) return false;
    if (!('dataUnlimited' in value) || value['dataUnlimited'] === undefined) return false;
    if (!('durationDays' in value) || value['durationDays'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceCurrency' in value) || value['priceCurrency'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('recipientPhoneNumber' in value) || value['recipientPhoneNumber'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('sendCurrency' in value) || value['sendCurrency'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('smsNumber' in value) || value['smsNumber'] === undefined) return false;
    if (!('smsUnlimited' in value) || value['smsUnlimited'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('voiceMinutes' in value) || value['voiceMinutes'] === undefined) return false;
    if (!('voiceUnlimited' in value) || value['voiceUnlimited'] === undefined) return false;
    return true;
}

export function DtoTopupPurchaseFromJSON(json: any): DtoTopupPurchase {
    return DtoTopupPurchaseFromJSONTyped(json, false);
}

export function DtoTopupPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchase {
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
        'dataGB': json['dataGB'],
        'dataUnlimited': json['dataUnlimited'],
        'durationDays': json['durationDays'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': json['price'],
        'priceCurrency': json['priceCurrency'],
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'recipientPhoneNumber': json['recipientPhoneNumber'],
        'regions': json['regions'] == null ? undefined : json['regions'],
        'send': json['send'],
        'sendCurrency': json['sendCurrency'],
        'sender': DtoTopupSenderFromJSON(json['sender']),
        'shortNotes': json['shortNotes'],
        'smsNumber': json['smsNumber'],
        'smsUnlimited': json['smsUnlimited'],
        'status': DtoTransactionStatusFromJSON(json['status']),
        'subTypes': json['subTypes'],
        'transactionId': json['transactionId'],
        'updatedAt': json['updatedAt'],
        'value': json['value'] == null ? undefined : DtoPurchaseValueFromJSON(json['value']),
        'voiceMinutes': json['voiceMinutes'],
        'voiceUnlimited': json['voiceUnlimited'],
    };
}

export function DtoTopupPurchaseToJSON(json: any): DtoTopupPurchase {
    return DtoTopupPurchaseToJSONTyped(json, false);
}

export function DtoTopupPurchaseToJSONTyped(value?: DtoTopupPurchase | null, ignoreDiscriminator: boolean = false): any {
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
        'dataGB': value['dataGB'],
        'dataUnlimited': value['dataUnlimited'],
        'durationDays': value['durationDays'],
        'error': DtoErrorToJSON(value['error']),
        'log': ((value['log'] as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': value['price'],
        'priceCurrency': value['priceCurrency'],
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'recipientPhoneNumber': value['recipientPhoneNumber'],
        'regions': value['regions'],
        'send': value['send'],
        'sendCurrency': value['sendCurrency'],
        'sender': DtoTopupSenderToJSON(value['sender']),
        'shortNotes': value['shortNotes'],
        'smsNumber': value['smsNumber'],
        'smsUnlimited': value['smsUnlimited'],
        'status': DtoTransactionStatusToJSON(value['status']),
        'subTypes': value['subTypes'],
        'transactionId': value['transactionId'],
        'updatedAt': value['updatedAt'],
        'value': DtoPurchaseValueToJSON(value['value']),
        'voiceMinutes': value['voiceMinutes'],
        'voiceUnlimited': value['voiceUnlimited'],
    };
}

