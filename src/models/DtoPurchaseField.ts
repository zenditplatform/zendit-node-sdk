/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoPurchaseField
 */
export interface DtoPurchaseField {
    /**
     * 
     * @type {string}
     * @memberof DtoPurchaseField
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPurchaseField
     */
    value: string;
}

/**
 * Check if a given object implements the DtoPurchaseField interface.
 */
export function instanceOfDtoPurchaseField(value: object): value is DtoPurchaseField {
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function DtoPurchaseFieldFromJSON(json: any): DtoPurchaseField {
    return DtoPurchaseFieldFromJSONTyped(json, false);
}

export function DtoPurchaseFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPurchaseField {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function DtoPurchaseFieldToJSON(json: any): DtoPurchaseField {
    return DtoPurchaseFieldToJSONTyped(json, false);
}

export function DtoPurchaseFieldToJSONTyped(value?: DtoPurchaseField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key': value['key'],
        'value': value['value'],
    };
}

