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
import type { DtoESimConfirmation } from './DtoESimConfirmation';
import {
    DtoESimConfirmationFromJSON,
    DtoESimConfirmationFromJSONTyped,
    DtoESimConfirmationToJSON,
    DtoESimConfirmationToJSONTyped,
} from './DtoESimConfirmation';
import type { DtoError } from './DtoError';
import {
    DtoErrorFromJSON,
    DtoErrorFromJSONTyped,
    DtoErrorToJSON,
    DtoErrorToJSONTyped,
} from './DtoError';
import type { DtoESimRefund } from './DtoESimRefund';
import {
    DtoESimRefundFromJSON,
    DtoESimRefundFromJSONTyped,
    DtoESimRefundToJSON,
    DtoESimRefundToJSONTyped,
} from './DtoESimRefund';
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
import type { DtoESimRoaming } from './DtoESimRoaming';
import {
    DtoESimRoamingFromJSON,
    DtoESimRoamingFromJSONTyped,
    DtoESimRoamingToJSON,
    DtoESimRoamingToJSONTyped,
} from './DtoESimRoaming';

/**
 * 
 * @export
 * @interface DtoESimPurchase
 */
export interface DtoESimPurchase {
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    brandName: string;
    /**
     * 
     * @type {DtoESimConfirmation}
     * @memberof DtoESimPurchase
     */
    confirmation?: DtoESimConfirmation;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    cost: number;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    costCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    costCurrencyDivisor: number;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    dataGB: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimPurchase
     */
    dataSpeeds: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimPurchase
     */
    dataUnlimited: boolean;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    durationDays: number;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoESimPurchase
     */
    error?: DtoError;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoESimPurchase
     */
    log: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    offerId: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    priceCurrency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    priceCurrencyDivisor: number;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoESimPurchase
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoESimPurchase
     */
    productType: DtoProductType;
    /**
     * 
     * @type {DtoESimRefund}
     * @memberof DtoESimPurchase
     */
    refund?: DtoESimRefund;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimPurchase
     */
    regions: Array<string>;
    /**
     * 
     * @type {Array<DtoESimRoaming>}
     * @memberof DtoESimPurchase
     */
    roaming: Array<DtoESimRoaming>;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    shortNotes: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    smsNumber: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimPurchase
     */
    smsUnlimited: boolean;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoESimPurchase
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimPurchase
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    transactionId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchase
     */
    updatedAt: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoESimPurchase
     */
    value?: DtoPurchaseValue;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchase
     */
    voiceMinutes: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimPurchase
     */
    voiceUnlimited: boolean;
}



/**
 * Check if a given object implements the DtoESimPurchase interface.
 */
export function instanceOfDtoESimPurchase(value: object): value is DtoESimPurchase {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('costCurrency' in value) || value['costCurrency'] === undefined) return false;
    if (!('costCurrencyDivisor' in value) || value['costCurrencyDivisor'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('dataGB' in value) || value['dataGB'] === undefined) return false;
    if (!('dataSpeeds' in value) || value['dataSpeeds'] === undefined) return false;
    if (!('dataUnlimited' in value) || value['dataUnlimited'] === undefined) return false;
    if (!('durationDays' in value) || value['durationDays'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceCurrency' in value) || value['priceCurrency'] === undefined) return false;
    if (!('priceCurrencyDivisor' in value) || value['priceCurrencyDivisor'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('regions' in value) || value['regions'] === undefined) return false;
    if (!('roaming' in value) || value['roaming'] === undefined) return false;
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

export function DtoESimPurchaseFromJSON(json: any): DtoESimPurchase {
    return DtoESimPurchaseFromJSONTyped(json, false);
}

export function DtoESimPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchase {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
        'confirmation': json['confirmation'] == null ? undefined : DtoESimConfirmationFromJSON(json['confirmation']),
        'cost': json['cost'],
        'costCurrency': json['costCurrency'],
        'costCurrencyDivisor': json['costCurrencyDivisor'],
        'country': json['country'],
        'createdAt': json['createdAt'],
        'dataGB': json['dataGB'],
        'dataSpeeds': json['dataSpeeds'],
        'dataUnlimited': json['dataUnlimited'],
        'durationDays': json['durationDays'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': json['price'],
        'priceCurrency': json['priceCurrency'],
        'priceCurrencyDivisor': json['priceCurrencyDivisor'],
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'refund': json['refund'] == null ? undefined : DtoESimRefundFromJSON(json['refund']),
        'regions': json['regions'],
        'roaming': ((json['roaming'] as Array<any>).map(DtoESimRoamingFromJSON)),
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

export function DtoESimPurchaseToJSON(json: any): DtoESimPurchase {
    return DtoESimPurchaseToJSONTyped(json, false);
}

export function DtoESimPurchaseToJSONTyped(value?: DtoESimPurchase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
        'confirmation': DtoESimConfirmationToJSON(value['confirmation']),
        'cost': value['cost'],
        'costCurrency': value['costCurrency'],
        'costCurrencyDivisor': value['costCurrencyDivisor'],
        'country': value['country'],
        'createdAt': value['createdAt'],
        'dataGB': value['dataGB'],
        'dataSpeeds': value['dataSpeeds'],
        'dataUnlimited': value['dataUnlimited'],
        'durationDays': value['durationDays'],
        'error': DtoErrorToJSON(value['error']),
        'log': ((value['log'] as Array<any>).map(DtoTransactionLogItemToJSON)),
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': value['price'],
        'priceCurrency': value['priceCurrency'],
        'priceCurrencyDivisor': value['priceCurrencyDivisor'],
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'refund': DtoESimRefundToJSON(value['refund']),
        'regions': value['regions'],
        'roaming': ((value['roaming'] as Array<any>).map(DtoESimRoamingToJSON)),
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

