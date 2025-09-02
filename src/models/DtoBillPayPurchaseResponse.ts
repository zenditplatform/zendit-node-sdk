/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
    DtoTransactionStatusToJSONTyped,
} from './DtoTransactionStatus';

/**
 * 
 * @export
 * @interface DtoBillPayPurchaseResponse
 */
export interface DtoBillPayPurchaseResponse {
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoBillPayPurchaseResponse
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchaseResponse
     */
    transactionId: string;
}



/**
 * Check if a given object implements the DtoBillPayPurchaseResponse interface.
 */
export function instanceOfDtoBillPayPurchaseResponse(value: object): value is DtoBillPayPurchaseResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoBillPayPurchaseResponseFromJSON(json: any): DtoBillPayPurchaseResponse {
    return DtoBillPayPurchaseResponseFromJSONTyped(json, false);
}

export function DtoBillPayPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayPurchaseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
    };
}

export function DtoBillPayPurchaseResponseToJSON(json: any): DtoBillPayPurchaseResponse {
    return DtoBillPayPurchaseResponseToJSONTyped(json, false);
}

export function DtoBillPayPurchaseResponseToJSONTyped(value?: DtoBillPayPurchaseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': DtoTransactionStatusToJSON(value['status']),
        'transactionId': value['transactionId'],
    };
}

