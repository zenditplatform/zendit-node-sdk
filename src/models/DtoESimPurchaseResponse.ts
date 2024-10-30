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
export function instanceOfDtoESimPurchaseResponse(value: object): value is DtoESimPurchaseResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoESimPurchaseResponseFromJSON(json: any): DtoESimPurchaseResponse {
    return DtoESimPurchaseResponseFromJSONTyped(json, false);
}

export function DtoESimPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchaseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
    };
}

  export function DtoESimPurchaseResponseToJSON(json: any): DtoESimPurchaseResponse {
      return DtoESimPurchaseResponseToJSONTyped(json, false);
  }

  export function DtoESimPurchaseResponseToJSONTyped(value?: DtoESimPurchaseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': DtoTransactionStatusToJSON(value['status']),
        'transactionId': value['transactionId'],
    };
}

