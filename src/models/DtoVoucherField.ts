/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherField
     */
    value?: string;
}

/**
 * Check if a given object implements the DtoVoucherField interface.
 */
export function instanceOfDtoVoucherField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoVoucherFieldFromJSON(json: any): DtoVoucherField {
    return DtoVoucherFieldFromJSONTyped(json, false);
}

export function DtoVoucherFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function DtoVoucherFieldToJSON(value?: DtoVoucherField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}

