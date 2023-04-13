/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoPurchaseValue } from './DtoPurchaseValue';
import {
    DtoPurchaseValueFromJSON,
    DtoPurchaseValueFromJSONTyped,
    DtoPurchaseValueToJSON,
} from './DtoPurchaseValue';
import type { DtoVoucherField } from './DtoVoucherField';
import {
    DtoVoucherFieldFromJSON,
    DtoVoucherFieldFromJSONTyped,
    DtoVoucherFieldToJSON,
} from './DtoVoucherField';

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
    fields?: Array<DtoVoucherField>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchaseInput
     */
    offerId?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherPurchaseInput
     */
    transactionId?: string;
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
export function instanceOfDtoVoucherPurchaseInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoVoucherPurchaseInputFromJSON(json: any): DtoVoucherPurchaseInput {
    return DtoVoucherPurchaseInputFromJSONTyped(json, false);
}

export function DtoVoucherPurchaseInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchaseInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(DtoVoucherFieldFromJSON)),
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'value': !exists(json, 'value') ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoVoucherPurchaseInputToJSON(value?: DtoVoucherPurchaseInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(DtoVoucherFieldToJSON)),
        'offerId': value.offerId,
        'transactionId': value.transactionId,
        'value': DtoPurchaseValueToJSON(value.value),
    };
}

