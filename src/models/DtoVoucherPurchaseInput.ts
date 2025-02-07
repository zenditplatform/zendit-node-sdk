/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoVoucherField } from './DtoVoucherField';
import {
    DtoVoucherFieldFromJSON,
    DtoVoucherFieldFromJSONTyped,
    DtoVoucherFieldToJSON,
    DtoVoucherFieldToJSONTyped,
} from './DtoVoucherField';
import type { DtoPurchaseValue } from './DtoPurchaseValue';
import {
    DtoPurchaseValueFromJSON,
    DtoPurchaseValueFromJSONTyped,
    DtoPurchaseValueToJSON,
    DtoPurchaseValueToJSONTyped,
} from './DtoPurchaseValue';

/**
 * 
 * @export
 * @interface DtoVoucherPurchaseInput
 */
export interface DtoVoucherPurchaseInput {
    /**
     * 
     * @type {Array<DtoVoucherField>}
     * @memberof DtoVoucherPurchaseInput
     */
    fields: Array<DtoVoucherField>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchaseInput
     */
    offerId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchaseInput
     */
    transactionId: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoVoucherPurchaseInput
     */
    value?: DtoPurchaseValue;
}

/**
 * Check if a given object implements the DtoVoucherPurchaseInput interface.
 */
export function instanceOfDtoVoucherPurchaseInput(value: object): value is DtoVoucherPurchaseInput {
    if (!('fields' in value) || value['fields'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoVoucherPurchaseInputFromJSON(json: any): DtoVoucherPurchaseInput {
    return DtoVoucherPurchaseInputFromJSONTyped(json, false);
}

export function DtoVoucherPurchaseInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchaseInput {
    if (json == null) {
        return json;
    }
    return {
        
        'fields': ((json['fields'] as Array<any>).map(DtoVoucherFieldFromJSON)),
        'offerId': json['offerId'],
        'transactionId': json['transactionId'],
        'value': json['value'] == null ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoVoucherPurchaseInputToJSON(json: any): DtoVoucherPurchaseInput {
    return DtoVoucherPurchaseInputToJSONTyped(json, false);
}

export function DtoVoucherPurchaseInputToJSONTyped(value?: DtoVoucherPurchaseInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fields': ((value['fields'] as Array<any>).map(DtoVoucherFieldToJSON)),
        'offerId': value['offerId'],
        'transactionId': value['transactionId'],
        'value': DtoPurchaseValueToJSON(value['value']),
    };
}

