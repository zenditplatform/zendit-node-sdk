/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
    availableBalance: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBalanceResponse
     */
    currency: string;
}

/**
 * Check if a given object implements the DtoBalanceResponse interface.
 */
export function instanceOfDtoBalanceResponse(value: object): value is DtoBalanceResponse {
    if (!('availableBalance' in value) || value['availableBalance'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    return true;
}

export function DtoBalanceResponseFromJSON(json: any): DtoBalanceResponse {
    return DtoBalanceResponseFromJSONTyped(json, false);
}

export function DtoBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBalanceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'availableBalance': json['availableBalance'],
        'currency': json['currency'],
    };
}

  export function DtoBalanceResponseToJSON(json: any): DtoBalanceResponse {
      return DtoBalanceResponseToJSONTyped(json, false);
  }

  export function DtoBalanceResponseToJSONTyped(value?: DtoBalanceResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'availableBalance': value['availableBalance'],
        'currency': value['currency'],
    };
}

