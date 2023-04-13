/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoValueType } from './DtoValueType';
import {
    DtoValueTypeFromJSON,
    DtoValueTypeFromJSONTyped,
    DtoValueTypeToJSON,
} from './DtoValueType';

/**
 * 
 * @export
 * @interface DtoPurchaseValue
 */
export interface DtoPurchaseValue {
    /**
     * 
     * @type {DtoValueType}
     * @memberof DtoPurchaseValue
     */
    type?: DtoValueType;
    /**
     * 
     * @type {number}
     * @memberof DtoPurchaseValue
     */
    value?: number;
}

/**
 * Check if a given object implements the DtoPurchaseValue interface.
 */
export function instanceOfDtoPurchaseValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoPurchaseValueFromJSON(json: any): DtoPurchaseValue {
    return DtoPurchaseValueFromJSONTyped(json, false);
}

export function DtoPurchaseValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPurchaseValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : DtoValueTypeFromJSON(json['type']),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function DtoPurchaseValueToJSON(value?: DtoPurchaseValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': DtoValueTypeToJSON(value.type),
        'value': value.value,
    };
}

