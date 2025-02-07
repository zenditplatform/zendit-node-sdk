/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoVoucherField
 */
export interface DtoVoucherField {
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherField
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherField
     */
    value: string;
}

/**
 * Check if a given object implements the DtoVoucherField interface.
 */
export function instanceOfDtoVoucherField(value: object): value is DtoVoucherField {
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function DtoVoucherFieldFromJSON(json: any): DtoVoucherField {
    return DtoVoucherFieldFromJSONTyped(json, false);
}

export function DtoVoucherFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherField {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function DtoVoucherFieldToJSON(json: any): DtoVoucherField {
    return DtoVoucherFieldToJSONTyped(json, false);
}

export function DtoVoucherFieldToJSONTyped(value?: DtoVoucherField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key': value['key'],
        'value': value['value'],
    };
}

