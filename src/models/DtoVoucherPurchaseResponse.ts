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
 * @interface DtoVoucherPurchaseResponse
 */
export interface DtoVoucherPurchaseResponse {
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoVoucherPurchaseResponse
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchaseResponse
     */
    transactionId: string;
}

/**
 * Check if a given object implements the DtoVoucherPurchaseResponse interface.
 */
export function instanceOfDtoVoucherPurchaseResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "transactionId" in value;

    return isInstance;
}

export function DtoVoucherPurchaseResponseFromJSON(json: any): DtoVoucherPurchaseResponse {
    return DtoVoucherPurchaseResponseFromJSONTyped(json, false);
}

export function DtoVoucherPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
    };
}

export function DtoVoucherPurchaseResponseToJSON(value?: DtoVoucherPurchaseResponse | null): any {
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

