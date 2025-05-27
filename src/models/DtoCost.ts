/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoCost
 */
export interface DtoCost {
    /**
     * 
     * @type {string}
     * @memberof DtoCost
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoCost
     */
    currencyDivisor: number;
    /**
     * 
     * @type {number}
     * @memberof DtoCost
     */
    fixed?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoCost
     */
    fx?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoCost
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoCost
     */
    min?: number;
}

/**
 * Check if a given object implements the DtoCost interface.
 */
export function instanceOfDtoCost(value: object): value is DtoCost {
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('currencyDivisor' in value) || value['currencyDivisor'] === undefined) return false;
    return true;
}

export function DtoCostFromJSON(json: any): DtoCost {
    return DtoCostFromJSONTyped(json, false);
}

export function DtoCostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoCost {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'currencyDivisor': json['currencyDivisor'],
        'fixed': json['fixed'] == null ? undefined : json['fixed'],
        'fx': json['fx'] == null ? undefined : json['fx'],
        'max': json['max'] == null ? undefined : json['max'],
        'min': json['min'] == null ? undefined : json['min'],
    };
}

export function DtoCostToJSON(json: any): DtoCost {
    return DtoCostToJSONTyped(json, false);
}

export function DtoCostToJSONTyped(value?: DtoCost | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'currency': value['currency'],
        'currencyDivisor': value['currencyDivisor'],
        'fixed': value['fixed'],
        'fx': value['fx'],
        'max': value['max'],
        'min': value['min'],
    };
}

