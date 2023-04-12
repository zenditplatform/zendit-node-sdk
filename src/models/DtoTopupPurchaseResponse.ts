/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
} from './DtoTransactionStatus';

/**
 * 
 * @export
 * @interface DtoTopupPurchaseResponse
 */
export interface DtoTopupPurchaseResponse {
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTopupPurchaseResponse
     */
    status?: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchaseResponse
     */
    transactionId?: string;
}

/**
 * Check if a given object implements the DtoTopupPurchaseResponse interface.
 */
export function instanceOfDtoTopupPurchaseResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoTopupPurchaseResponseFromJSON(json: any): DtoTopupPurchaseResponse {
    return DtoTopupPurchaseResponseFromJSONTyped(json, false);
}

export function DtoTopupPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : DtoTransactionStatusFromJSON(json['status']),
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
    };
}

export function DtoTopupPurchaseResponseToJSON(value?: DtoTopupPurchaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': DtoTransactionStatusToJSON(value.status),
        'transactionId': value.transactionId,
    };
}

