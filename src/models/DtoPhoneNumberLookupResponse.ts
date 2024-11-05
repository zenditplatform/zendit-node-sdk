/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoPhoneNumberLookupResponse
 */
export interface DtoPhoneNumberLookupResponse {
    /**
     * 
     * @type {string}
     * @memberof DtoPhoneNumberLookupResponse
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPhoneNumberLookupResponse
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPhoneNumberLookupResponse
     */
    mobileCountryCode: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPhoneNumberLookupResponse
     */
    mobileNetworkCode: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPhoneNumberLookupResponse
     */
    msisdn: string;
}

/**
 * Check if a given object implements the DtoPhoneNumberLookupResponse interface.
 */
export function instanceOfDtoPhoneNumberLookupResponse(value: object): value is DtoPhoneNumberLookupResponse {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('mobileCountryCode' in value) || value['mobileCountryCode'] === undefined) return false;
    if (!('mobileNetworkCode' in value) || value['mobileNetworkCode'] === undefined) return false;
    if (!('msisdn' in value) || value['msisdn'] === undefined) return false;
    return true;
}

export function DtoPhoneNumberLookupResponseFromJSON(json: any): DtoPhoneNumberLookupResponse {
    return DtoPhoneNumberLookupResponseFromJSONTyped(json, false);
}

export function DtoPhoneNumberLookupResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPhoneNumberLookupResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'country': json['country'],
        'mobileCountryCode': json['mobileCountryCode'],
        'mobileNetworkCode': json['mobileNetworkCode'],
        'msisdn': json['msisdn'],
    };
}

  export function DtoPhoneNumberLookupResponseToJSON(json: any): DtoPhoneNumberLookupResponse {
      return DtoPhoneNumberLookupResponseToJSONTyped(json, false);
  }

  export function DtoPhoneNumberLookupResponseToJSONTyped(value?: DtoPhoneNumberLookupResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'country': value['country'],
        'mobileCountryCode': value['mobileCountryCode'],
        'mobileNetworkCode': value['mobileNetworkCode'],
        'msisdn': value['msisdn'],
    };
}

