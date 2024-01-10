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
 * @interface DtoESimPurchaseResponse
 */
export interface DtoESimPurchaseResponse {
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoESimPurchaseResponse
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchaseResponse
     */
    transactionId: string;
}

/**
 * Check if a given object implements the DtoESimPurchaseResponse interface.
 */
export function instanceOfDtoESimPurchaseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "transactionId" in value;

    return isInstance;
}

export function DtoESimPurchaseResponseFromJSON(json: any): DtoESimPurchaseResponse {
    return DtoESimPurchaseResponseFromJSONTyped(json, false);
}

export function DtoESimPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
    };
}

export function DtoESimPurchaseResponseToJSON(value?: DtoESimPurchaseResponse | null): any {
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

