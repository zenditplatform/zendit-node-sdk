/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoError } from './DtoError';
import {
    DtoErrorFromJSON,
    DtoErrorFromJSONTyped,
    DtoErrorToJSON,
} from './DtoError';
import type { DtoProductType } from './DtoProductType';
import {
    DtoProductTypeFromJSON,
    DtoProductTypeFromJSONTyped,
    DtoProductTypeToJSON,
} from './DtoProductType';
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
import type { DtoTransactionType } from './DtoTransactionType';
import {
    DtoTransactionTypeFromJSON,
    DtoTransactionTypeFromJSONTyped,
    DtoTransactionTypeToJSON,
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
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoTransaction
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTransaction
     */
    currency?: string;
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
    log?: Array<DtoTransactionLogItem>;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoTransaction
     */
    productType?: DtoProductType;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTransaction
     */
    status?: DtoTransactionStatus;
    /**
     * client operate with clientTransactionId
     * @type {string}
     * @memberof DtoTransaction
     */
    transactionId?: string;
    /**
     * 
     * @type {DtoTransactionType}
     * @memberof DtoTransaction
     */
    type?: DtoTransactionType;
    /**
     * 
     * @type {string}
     * @memberof DtoTransaction
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the DtoTransaction interface.
 */
export function instanceOfDtoTransaction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoTransactionFromJSON(json: any): DtoTransaction {
    return DtoTransactionFromJSONTyped(json, false);
}

export function DtoTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'error': !exists(json, 'error') ? undefined : DtoErrorFromJSON(json['error']),
        'log': !exists(json, 'log') ? undefined : ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'productType': !exists(json, 'productType') ? undefined : DtoProductTypeFromJSON(json['productType']),
        'status': !exists(json, 'status') ? undefined : DtoTransactionStatusFromJSON(json['status']),
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'type': !exists(json, 'type') ? undefined : DtoTransactionTypeFromJSON(json['type']),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
    };
}

export function DtoTransactionToJSON(value?: DtoTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'createdAt': value.createdAt,
        'currency': value.currency,
        'error': DtoErrorToJSON(value.error),
        'log': value.log === undefined ? undefined : ((value.log as Array<any>).map(DtoTransactionLogItemToJSON)),
        'productType': DtoProductTypeToJSON(value.productType),
        'status': DtoTransactionStatusToJSON(value.status),
        'transactionId': value.transactionId,
        'type': DtoTransactionTypeToJSON(value.type),
        'updatedAt': value.updatedAt,
    };
}

