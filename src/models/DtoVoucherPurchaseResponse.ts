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
export function instanceOfDtoVoucherPurchaseResponse(value: object): value is DtoVoucherPurchaseResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoVoucherPurchaseResponseFromJSON(json: any): DtoVoucherPurchaseResponse {
    return DtoVoucherPurchaseResponseFromJSONTyped(json, false);
}

export function DtoVoucherPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchaseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
        'transactionId': json['transactionId'],
    };
}

  export function DtoVoucherPurchaseResponseToJSON(json: any): DtoVoucherPurchaseResponse {
      return DtoVoucherPurchaseResponseToJSONTyped(json, false);
  }

  export function DtoVoucherPurchaseResponseToJSONTyped(value?: DtoVoucherPurchaseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': DtoTransactionStatusToJSON(value['status']),
        'transactionId': value['transactionId'],
    };
}

