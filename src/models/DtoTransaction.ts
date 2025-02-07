/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
import type { DtoTransactionType } from './DtoTransactionType';
import {
    DtoTransactionTypeFromJSON,
    DtoTransactionTypeFromJSONTyped,
    DtoTransactionTypeToJSON,
    DtoTransactionTypeToJSONTyped,
} from './DtoTransactionType';

/**
 * 
 * @export
 * @interface DtoTransaction
 */
export interface DtoTransaction {
    /**
     * 
     * @type {number}
     * @memberof DtoTransaction
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTransaction
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTransaction
     */
    currency: string;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoTransaction
     */
    error?: DtoError;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoTransaction
     */
    log: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoTransaction
     */
    productType: DtoProductType;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTransaction
     */
    status: DtoTransactionStatus;
    /**
     * client operate with clientTransactionId
     * @type {string}
     * @memberof DtoTransaction
     */
    transactionId: string;
    /**
     * 
     * @type {DtoTransactionType}
     * @memberof DtoTransaction
     */
    type: DtoTransactionType;
    /**
     * 
     * @type {string}
     * @memberof DtoTransaction
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the DtoTransaction interface.
 */
export function instanceOfDtoTransaction(value: object): value is DtoTransaction {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoTransactionFromJSON(json: any): DtoTransaction {
    return DtoTransactionFromJSONTyped(json, false);
}

export function DtoTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'createdAt': json['createdAt'],
        'currency': json['currency'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
        'type': DtoTransactionTypeFromJSON(json['type']),
        'updatedAt': json['updatedAt'],
    };
}

export function DtoTransactionToJSON(json: any): DtoTransaction {
    return DtoTransactionToJSONTyped(json, false);
}

export function DtoTransactionToJSONTyped(value?: DtoTransaction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'createdAt': value['createdAt'],
        'currency': value['currency'],
        'error': DtoErrorToJSON(value['error']),
        'log': ((value['log'] as Array<any>).map(DtoTransactionLogItemToJSON)),
        'productType': DtoProductTypeToJSON(value['productType']),
        'status': DtoTransactionStatusToJSON(value['status']),
        'transactionId': value['transactionId'],
        'type': DtoTransactionTypeToJSON(value['type']),
        'updatedAt': value['updatedAt'],
    };
}

