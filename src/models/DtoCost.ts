/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
    currency?: string;
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
export function instanceOfDtoCost(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoCostFromJSON(json: any): DtoCost {
    return DtoCostFromJSONTyped(json, false);
}

export function DtoCostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoCost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'fixed': !exists(json, 'fixed') ? undefined : json['fixed'],
        'fx': !exists(json, 'fx') ? undefined : json['fx'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': !exists(json, 'min') ? undefined : json['min'],
    };
}

export function DtoCostToJSON(value?: DtoCost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'fixed': value.fixed,
        'fx': value.fx,
        'max': value.max,
        'min': value.min,
    };
}

