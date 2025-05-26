/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
    currencyDivisor: number;
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
export function instanceOfDtoPrice(value: object): value is DtoPrice {
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('currencyDivisor' in value) || value['currencyDivisor'] === undefined) return false;
    return true;
}

export function DtoPriceFromJSON(json: any): DtoPrice {
    return DtoPriceFromJSONTyped(json, false);
}

export function DtoPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPrice {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'currencyDivisor': json['currencyDivisor'],
        'fixed': json['fixed'] == null ? undefined : json['fixed'],
        'fx': json['fx'] == null ? undefined : json['fx'],
        'margin': json['margin'] == null ? undefined : json['margin'],
        'max': json['max'] == null ? undefined : json['max'],
        'min': json['min'] == null ? undefined : json['min'],
        'suggestedFixed': json['suggestedFixed'] == null ? undefined : json['suggestedFixed'],
        'suggestedFx': json['suggestedFx'] == null ? undefined : json['suggestedFx'],
    };
}

export function DtoPriceToJSON(json: any): DtoPrice {
    return DtoPriceToJSONTyped(json, false);
}

export function DtoPriceToJSONTyped(value?: DtoPrice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'currency': value['currency'],
        'currencyDivisor': value['currencyDivisor'],
        'fixed': value['fixed'],
        'fx': value['fx'],
        'margin': value['margin'],
        'max': value['max'],
        'min': value['min'],
        'suggestedFixed': value['suggestedFixed'],
        'suggestedFx': value['suggestedFx'],
    };
}

