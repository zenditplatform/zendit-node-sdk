/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoESimConfirmation } from './DtoESimConfirmation';
import {
    DtoESimConfirmationFromJSON,
    DtoESimConfirmationFromJSONTyped,
    DtoESimConfirmationToJSON,
} from './DtoESimConfirmation';
import type { DtoESimRoaming } from './DtoESimRoaming';
import {
    DtoESimRoamingFromJSON,
    DtoESimRoamingFromJSONTyped,
    DtoESimRoamingToJSON,
} from './DtoESimRoaming';
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
export function instanceOfDtoESimPurchase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brand" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "costCurrency" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "dataGB" in value;
    isInstance = isInstance && "dataSpeeds" in value;
    isInstance = isInstance && "dataUnlimited" in value;
    isInstance = isInstance && "durationDays" in value;
    isInstance = isInstance && "log" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "priceCurrency" in value;
    isInstance = isInstance && "priceType" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "regions" in value;
    isInstance = isInstance && "roaming" in value;
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

export function DtoESimPurchaseFromJSON(json: any): DtoESimPurchase {
    return DtoESimPurchaseFromJSONTyped(json, false);
}

export function DtoESimPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'confirmation': !exists(json, 'confirmation') ? undefined : DtoESimConfirmationFromJSON(json['confirmation']),
        'cost': json['cost'],
        'costCurrency': json['costCurrency'],
        'country': json['country'],
        'createdAt': json['createdAt'],
        'dataGB': json['dataGB'],
        'dataSpeeds': json['dataSpeeds'],
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
        'regions': json['regions'],
        'roaming': ((json['roaming'] as Array<any>).map(DtoESimRoamingFromJSON)),
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

export function DtoESimPurchaseToJSON(value?: DtoESimPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'brand': value.brand,
        'confirmation': DtoESimConfirmationToJSON(value.confirmation),
        'cost': value.cost,
        'costCurrency': value.costCurrency,
        'country': value.country,
        'createdAt': value.createdAt,
        'dataGB': value.dataGB,
        'dataSpeeds': value.dataSpeeds,
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
        'regions': value.regions,
        'roaming': ((value.roaming as Array<any>).map(DtoESimRoamingToJSON)),
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

