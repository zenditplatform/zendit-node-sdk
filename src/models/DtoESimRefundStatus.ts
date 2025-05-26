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
 * @interface DtoESimRefundStatus
 */
export interface DtoESimRefundStatus {
    /**
     * 
     * @type {number}
     * @memberof DtoESimRefundStatus
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof DtoESimRefundStatus
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimRefundStatus
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimRefundStatus
     */
    currencyDivisor: number;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoESimRefundStatus
     */
    error?: DtoError;
    /**
     * 
     * @type {Array<DtoTransactionLogItem>}
     * @memberof DtoESimRefundStatus
     */
    log: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoESimRefundStatus
     */
    productType: DtoProductType;
    /**
     * 
     * @type {string}
     * @memberof DtoESimRefundStatus
     */
    refundedTransactionId: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoESimRefundStatus
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoESimRefundStatus
     */
    transactionId: string;
    /**
     * 
     * @type {DtoTransactionType}
     * @memberof DtoESimRefundStatus
     */
    type: DtoTransactionType;
    /**
     * 
     * @type {string}
     * @memberof DtoESimRefundStatus
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the DtoESimRefundStatus interface.
 */
export function instanceOfDtoESimRefundStatus(value: object): value is DtoESimRefundStatus {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('currencyDivisor' in value) || value['currencyDivisor'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('refundedTransactionId' in value) || value['refundedTransactionId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoESimRefundStatusFromJSON(json: any): DtoESimRefundStatus {
    return DtoESimRefundStatusFromJSONTyped(json, false);
}

export function DtoESimRefundStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimRefundStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'createdAt': json['createdAt'],
        'currency': json['currency'],
        'currencyDivisor': json['currencyDivisor'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'refundedTransactionId': json['refundedTransactionId'],
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
        'type': DtoTransactionTypeFromJSON(json['type']),
        'updatedAt': json['updatedAt'],
    };
}

export function DtoESimRefundStatusToJSON(json: any): DtoESimRefundStatus {
    return DtoESimRefundStatusToJSONTyped(json, false);
}

export function DtoESimRefundStatusToJSONTyped(value?: DtoESimRefundStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'createdAt': value['createdAt'],
        'currency': value['currency'],
        'currencyDivisor': value['currencyDivisor'],
        'error': DtoErrorToJSON(value['error']),
        'log': ((value['log'] as Array<any>).map(DtoTransactionLogItemToJSON)),
        'productType': DtoProductTypeToJSON(value['productType']),
        'refundedTransactionId': value['refundedTransactionId'],
        'status': DtoTransactionStatusToJSON(value['status']),
        'transactionId': value['transactionId'],
        'type': DtoTransactionTypeToJSON(value['type']),
        'updatedAt': value['updatedAt'],
    };
}

