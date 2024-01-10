/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
export function instanceOfDtoZend(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currency" in value;

    return isInstance;
}

export function DtoZendFromJSON(json: any): DtoZend {
    return DtoZendFromJSONTyped(json, false);
}

export function DtoZendFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoZend {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'fixed': !exists(json, 'fixed') ? undefined : json['fixed'],
        'fx': !exists(json, 'fx') ? undefined : json['fx'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': !exists(json, 'min') ? undefined : json['min'],
    };
}

export function DtoZendToJSON(value?: DtoZend | null): any {
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

