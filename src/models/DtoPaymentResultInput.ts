/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoPaymentStatus } from './DtoPaymentStatus';
import {
    DtoPaymentStatusFromJSON,
    DtoPaymentStatusFromJSONTyped,
    DtoPaymentStatusToJSON,
    DtoPaymentStatusToJSONTyped,
} from './DtoPaymentStatus';

/**
 * 
 * @export
 * @interface DtoPaymentResultInput
 */
export interface DtoPaymentResultInput {
    /**
     * 
     * @type {string}
     * @memberof DtoPaymentResultInput
     */
    customerReferenceId?: string;
    /**
     * PaymentAmount is in minor units of PaymentCurrency. The two are sent together or not at all.
     * @type {number}
     * @memberof DtoPaymentResultInput
     */
    paymentAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoPaymentResultInput
     */
    paymentCurrency?: string;
    /**
     * PaymentReference is the reference the client returned from the Payment Request webhook.
     * @type {string}
     * @memberof DtoPaymentResultInput
     */
    paymentReference: string;
    /**
     * 
     * @type {DtoPaymentStatus}
     * @memberof DtoPaymentResultInput
     */
    paymentStatus: DtoPaymentStatus;
}



/**
 * Check if a given object implements the DtoPaymentResultInput interface.
 */
export function instanceOfDtoPaymentResultInput(value: object): value is DtoPaymentResultInput {
    if (!('paymentReference' in value) || value['paymentReference'] === undefined) return false;
    if (!('paymentStatus' in value) || value['paymentStatus'] === undefined) return false;
    return true;
}

export function DtoPaymentResultInputFromJSON(json: any): DtoPaymentResultInput {
    return DtoPaymentResultInputFromJSONTyped(json, false);
}

export function DtoPaymentResultInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPaymentResultInput {
    if (json == null) {
        return json;
    }
    return {
        
        'customerReferenceId': json['customerReferenceId'] == null ? undefined : json['customerReferenceId'],
        'paymentAmount': json['paymentAmount'] == null ? undefined : json['paymentAmount'],
        'paymentCurrency': json['paymentCurrency'] == null ? undefined : json['paymentCurrency'],
        'paymentReference': json['paymentReference'],
        'paymentStatus': DtoPaymentStatusFromJSON(json['paymentStatus']),
    };
}

export function DtoPaymentResultInputToJSON(json: any): DtoPaymentResultInput {
    return DtoPaymentResultInputToJSONTyped(json, false);
}

export function DtoPaymentResultInputToJSONTyped(value?: DtoPaymentResultInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'customerReferenceId': value['customerReferenceId'],
        'paymentAmount': value['paymentAmount'],
        'paymentCurrency': value['paymentCurrency'],
        'paymentReference': value['paymentReference'],
        'paymentStatus': DtoPaymentStatusToJSON(value['paymentStatus']),
    };
}

