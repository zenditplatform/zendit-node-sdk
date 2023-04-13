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
    brand?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    cost?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    costCurrency?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    createdAt?: string;
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
    log?: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    offerId?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    priceCurrency?: string;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoTopupPurchase
     */
    priceType?: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoTopupPurchase
     */
    productType?: DtoProductType;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    recipientPhoneNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchase
     */
    send?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    sendCurrency?: string;
    /**
     * 
     * @type {DtoTopupSender}
     * @memberof DtoTopupPurchase
     */
    sender?: DtoTopupSender;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    shortNotes?: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTopupPurchase
     */
    status?: DtoTransactionStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoTopupPurchase
     */
    subTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    transactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchase
     */
    updatedAt?: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoTopupPurchase
     */
    value?: DtoPurchaseValue;
}

/**
 * Check if a given object implements the DtoTopupPurchase interface.
 */
export function instanceOfDtoTopupPurchase(value: object): boolean {
    let isInstance = true;

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
        
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'costCurrency': !exists(json, 'costCurrency') ? undefined : json['costCurrency'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'error': !exists(json, 'error') ? undefined : DtoErrorFromJSON(json['error']),
        'log': !exists(json, 'log') ? undefined : ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'priceCurrency': !exists(json, 'priceCurrency') ? undefined : json['priceCurrency'],
        'priceType': !exists(json, 'priceType') ? undefined : DtoPriceTypeFromJSON(json['priceType']),
        'productType': !exists(json, 'productType') ? undefined : DtoProductTypeFromJSON(json['productType']),
        'recipientPhoneNumber': !exists(json, 'recipientPhoneNumber') ? undefined : json['recipientPhoneNumber'],
        'send': !exists(json, 'send') ? undefined : json['send'],
        'sendCurrency': !exists(json, 'sendCurrency') ? undefined : json['sendCurrency'],
        'sender': !exists(json, 'sender') ? undefined : DtoTopupSenderFromJSON(json['sender']),
        'shortNotes': !exists(json, 'shortNotes') ? undefined : json['shortNotes'],
        'status': !exists(json, 'status') ? undefined : DtoTransactionStatusFromJSON(json['status']),
        'subTypes': !exists(json, 'subTypes') ? undefined : json['subTypes'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'value': !exists(json, 'value') ? undefined : DtoPurchaseValueFromJSON(json['value']),
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
        'cost': value.cost,
        'costCurrency': value.costCurrency,
        'country': value.country,
        'createdAt': value.createdAt,
        'error': DtoErrorToJSON(value.error),
        'log': value.log === undefined ? undefined : ((value.log as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value.notes,
        'offerId': value.offerId,
        'price': value.price,
        'priceCurrency': value.priceCurrency,
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'recipientPhoneNumber': value.recipientPhoneNumber,
        'send': value.send,
        'sendCurrency': value.sendCurrency,
        'sender': DtoTopupSenderToJSON(value.sender),
        'shortNotes': value.shortNotes,
        'status': DtoTransactionStatusToJSON(value.status),
        'subTypes': value.subTypes,
        'transactionId': value.transactionId,
        'updatedAt': value.updatedAt,
        'value': DtoPurchaseValueToJSON(value.value),
    };
}

