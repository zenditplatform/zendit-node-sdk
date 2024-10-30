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
 * @interface DtoTopupPurchaseResponse
 */
export interface DtoTopupPurchaseResponse {
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTopupPurchaseResponse
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchaseResponse
     */
    transactionId: string;
}



/**
 * Check if a given object implements the DtoTopupPurchaseResponse interface.
 */
export function instanceOfDtoTopupPurchaseResponse(value: object): value is DtoTopupPurchaseResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoTopupPurchaseResponseFromJSON(json: any): DtoTopupPurchaseResponse {
    return DtoTopupPurchaseResponseFromJSONTyped(json, false);
}

export function DtoTopupPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchaseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
    };
}

  export function DtoTopupPurchaseResponseToJSON(json: any): DtoTopupPurchaseResponse {
      return DtoTopupPurchaseResponseToJSONTyped(json, false);
  }

  export function DtoTopupPurchaseResponseToJSONTyped(value?: DtoTopupPurchaseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': DtoTransactionStatusToJSON(value['status']),
        'transactionId': value['transactionId'],
    };
}

