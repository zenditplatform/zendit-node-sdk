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
export function instanceOfDtoTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "log" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updatedAt" in value;

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
        
        'amount': json['amount'],
        'createdAt': json['createdAt'],
        'currency': json['currency'],
        'error': !exists(json, 'error') ? undefined : DtoErrorFromJSON(json['error']),
        'log': ((json['log'] as Array<any>).map(DtoTransactionLogItemFromJSON)),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
        'type': DtoTransactionTypeFromJSON(json['type']),
        'updatedAt': json['updatedAt'],
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
        'log': ((value.log as Array<any>).map(DtoTransactionLogItemToJSON)),
        'productType': DtoProductTypeToJSON(value.productType),
        'status': DtoTransactionStatusToJSON(value.status),
        'transactionId': value.transactionId,
        'type': DtoTransactionTypeToJSON(value.type),
        'updatedAt': value.updatedAt,
    };
}

