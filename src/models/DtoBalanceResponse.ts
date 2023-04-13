/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoBalanceResponse
 */
export interface DtoBalanceResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoBalanceResponse
     */
    availableBalance?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBalanceResponse
     */
    currency?: string;
}

/**
 * Check if a given object implements the DtoBalanceResponse interface.
 */
export function instanceOfDtoBalanceResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoBalanceResponseFromJSON(json: any): DtoBalanceResponse {
    return DtoBalanceResponseFromJSONTyped(json, false);
}

export function DtoBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBalanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableBalance': !exists(json, 'availableBalance') ? undefined : json['availableBalance'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
    };
}

export function DtoBalanceResponseToJSON(value?: DtoBalanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableBalance': value.availableBalance,
        'currency': value.currency,
    };
}

