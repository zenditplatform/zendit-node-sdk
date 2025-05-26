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
 * @interface DtoESimRefund
 */
export interface DtoESimRefund {
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoESimRefund
     */
    status: DtoTransactionStatus;
}



/**
 * Check if a given object implements the DtoESimRefund interface.
 */
export function instanceOfDtoESimRefund(value: object): value is DtoESimRefund {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function DtoESimRefundFromJSON(json: any): DtoESimRefund {
    return DtoESimRefundFromJSONTyped(json, false);
}

export function DtoESimRefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimRefund {
    if (json == null) {
        return json;
    }
    return {
        
        'status': DtoTransactionStatusFromJSON(json['status']),
    };
}

export function DtoESimRefundToJSON(json: any): DtoESimRefund {
    return DtoESimRefundToJSONTyped(json, false);
}

export function DtoESimRefundToJSONTyped(value?: DtoESimRefund | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': DtoTransactionStatusToJSON(value['status']),
    };
}

