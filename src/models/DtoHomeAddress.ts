/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoHomeAddress
 */
export interface DtoHomeAddress {
    /**
     * 
     * @type {string}
     * @memberof DtoHomeAddress
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof DtoHomeAddress
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoHomeAddress
     */
    line1: string;
    /**
     * 
     * @type {string}
     * @memberof DtoHomeAddress
     */
    line2: string;
    /**
     * 
     * @type {string}
     * @memberof DtoHomeAddress
     */
    subdivision: string;
    /**
     * 
     * @type {string}
     * @memberof DtoHomeAddress
     */
    zip: string;
}

/**
 * Check if a given object implements the DtoHomeAddress interface.
 */
export function instanceOfDtoHomeAddress(value: object): value is DtoHomeAddress {
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('line1' in value) || value['line1'] === undefined) return false;
    if (!('line2' in value) || value['line2'] === undefined) return false;
    if (!('subdivision' in value) || value['subdivision'] === undefined) return false;
    if (!('zip' in value) || value['zip'] === undefined) return false;
    return true;
}

export function DtoHomeAddressFromJSON(json: any): DtoHomeAddress {
    return DtoHomeAddressFromJSONTyped(json, false);
}

export function DtoHomeAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoHomeAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'city': json['city'],
        'country': json['country'],
        'line1': json['line1'],
        'line2': json['line2'],
        'subdivision': json['subdivision'],
        'zip': json['zip'],
    };
}

export function DtoHomeAddressToJSON(json: any): DtoHomeAddress {
    return DtoHomeAddressToJSONTyped(json, false);
}

export function DtoHomeAddressToJSONTyped(value?: DtoHomeAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'city': value['city'],
        'country': value['country'],
        'line1': value['line1'],
        'line2': value['line2'],
        'subdivision': value['subdivision'],
        'zip': value['zip'],
    };
}

