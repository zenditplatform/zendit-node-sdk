/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoPrice
 */
export interface DtoPrice {
    /**
     * 
     * @type {string}
     * @memberof DtoPrice
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    fixed?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    fx?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    margin?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    suggestedFixed?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPrice
     */
    suggestedFx?: number;
}

/**
 * Check if a given object implements the DtoPrice interface.
 */
export function instanceOfDtoPrice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currency" in value;

    return isInstance;
}

export function DtoPriceFromJSON(json: any): DtoPrice {
    return DtoPriceFromJSONTyped(json, false);
}

export function DtoPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'fixed': !exists(json, 'fixed') ? undefined : json['fixed'],
        'fx': !exists(json, 'fx') ? undefined : json['fx'],
        'margin': !exists(json, 'margin') ? undefined : json['margin'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'suggestedFixed': !exists(json, 'suggestedFixed') ? undefined : json['suggestedFixed'],
        'suggestedFx': !exists(json, 'suggestedFx') ? undefined : json['suggestedFx'],
    };
}

export function DtoPriceToJSON(value?: DtoPrice | null): any {
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
        'margin': value.margin,
        'max': value.max,
        'min': value.min,
        'suggestedFixed': value.suggestedFixed,
        'suggestedFx': value.suggestedFx,
    };
}

