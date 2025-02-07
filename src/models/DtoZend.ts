/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoZend
 */
export interface DtoZend {
    /**
     * 
     * @type {string}
     * @memberof DtoZend
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoZend
     */
    fixed?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoZend
     */
    fx?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoZend
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoZend
     */
    min?: number;
}

/**
 * Check if a given object implements the DtoZend interface.
 */
export function instanceOfDtoZend(value: object): value is DtoZend {
    if (!('currency' in value) || value['currency'] === undefined) return false;
    return true;
}

export function DtoZendFromJSON(json: any): DtoZend {
    return DtoZendFromJSONTyped(json, false);
}

export function DtoZendFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoZend {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'fixed': json['fixed'] == null ? undefined : json['fixed'],
        'fx': json['fx'] == null ? undefined : json['fx'],
        'max': json['max'] == null ? undefined : json['max'],
        'min': json['min'] == null ? undefined : json['min'],
    };
}

export function DtoZendToJSON(json: any): DtoZend {
    return DtoZendToJSONTyped(json, false);
}

export function DtoZendToJSONTyped(value?: DtoZend | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'currency': value['currency'],
        'fixed': value['fixed'],
        'fx': value['fx'],
        'max': value['max'],
        'min': value['min'],
    };
}

