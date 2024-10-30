/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoValueType } from './DtoValueType';
import {
    DtoValueTypeFromJSON,
    DtoValueTypeFromJSONTyped,
    DtoValueTypeToJSON,
    DtoValueTypeToJSONTyped,
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
    type: DtoValueType;
    /**
     * 
     * @type {number}
     * @memberof DtoPurchaseValue
     */
    value: number;
}



/**
 * Check if a given object implements the DtoPurchaseValue interface.
 */
export function instanceOfDtoPurchaseValue(value: object): value is DtoPurchaseValue {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function DtoPurchaseValueFromJSON(json: any): DtoPurchaseValue {
    return DtoPurchaseValueFromJSONTyped(json, false);
}

export function DtoPurchaseValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPurchaseValue {
    if (json == null) {
        return json;
    }
    return {
        
        'type': DtoValueTypeFromJSON(json['type']),
        'value': json['value'],
    };
}

  export function DtoPurchaseValueToJSON(json: any): DtoPurchaseValue {
      return DtoPurchaseValueToJSONTyped(json, false);
  }

  export function DtoPurchaseValueToJSONTyped(value?: DtoPurchaseValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': DtoValueTypeToJSON(value['type']),
        'value': value['value'],
    };
}

