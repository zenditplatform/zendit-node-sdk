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
import type { DtoTopupSender } from './DtoTopupSender';
import {
    DtoTopupSenderFromJSON,
    DtoTopupSenderFromJSONTyped,
    DtoTopupSenderToJSON,
} from './DtoTopupSender';
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
export function instanceOfDtoTopupPurchase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brand" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "costCurrency" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "dataGB" in value;
    isInstance = isInstance && "dataUnlimited" in value;
    isInstance = isInstance && "durationDays" in value;
    isInstance = isInstance && "log" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "priceCurrency" in value;
    isInstance = isInstance && "priceType" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "recipientPhoneNumber" in value;
    isInstance = isInstance && "send" in value;
    isInstance = isInstance && "sendCurrency" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "shortNotes" in value;
    isInstance = isInstance && "smsNumber" in value;
    isInstance = isInstance && "smsUnlimited" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "subTypes" in value;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "voiceMinutes" in value;
    isInstance = isInstance && "voiceUnlimited" in value;

    return isInstance;
}

export function DtoTopupPurchaseFromJSON(json: any): DtoTopupPurchase {
    return DtoTopupPurchaseFromJSONTyped(json, false);
}

export function DtoTopupPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchase {
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
        'dataGB': json['dataGB'],
        'dataUnlimited': json['dataUnlimited'],
        'durationDays': json['durationDays'],
        'error': !exists(json, 'error') ? undefined : DtoErrorFromJSON(json['error']),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': json['price'],
        'priceCurrency': json['priceCurrency'],
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'recipientPhoneNumber': json['recipientPhoneNumber'],
        'regions': !exists(json, 'regions') ? undefined : json['regions'],
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
        'value': !exists(json, 'value') ? undefined : DtoPurchaseValueFromJSON(json['value']),
        'voiceMinutes': json['voiceMinutes'],
        'voiceUnlimited': json['voiceUnlimited'],
    };
}

export function DtoTopupPurchaseToJSON(value?: DtoTopupPurchase | null): any {
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
        'dataGB': value.dataGB,
        'dataUnlimited': value.dataUnlimited,
        'durationDays': value.durationDays,
        'error': DtoErrorToJSON(value.error),
        'log': ((value.log as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value.notes,
        'offerId': value.offerId,
        'price': value.price,
        'priceCurrency': value.priceCurrency,
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'recipientPhoneNumber': value.recipientPhoneNumber,
        'regions': value.regions,
        'send': value.send,
        'sendCurrency': value.sendCurrency,
        'sender': DtoTopupSenderToJSON(value.sender),
        'shortNotes': value.shortNotes,
        'smsNumber': value.smsNumber,
        'smsUnlimited': value.smsUnlimited,
        'status': DtoTransactionStatusToJSON(value.status),
        'subTypes': value.subTypes,
        'transactionId': value.transactionId,
        'updatedAt': value.updatedAt,
        'value': DtoPurchaseValueToJSON(value.value),
        'voiceMinutes': value.voiceMinutes,
        'voiceUnlimited': value.voiceUnlimited,
    };
}

