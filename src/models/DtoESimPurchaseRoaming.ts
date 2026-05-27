/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESimPurchaseRoaming
 */
export interface DtoESimPurchaseRoaming {
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchaseRoaming
     */
    country: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimPurchaseRoaming
     */
    dataSpeeds: Array<string>;
}

/**
 * Check if a given object implements the DtoESimPurchaseRoaming interface.
 */
export function instanceOfDtoESimPurchaseRoaming(value: object): value is DtoESimPurchaseRoaming {
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('dataSpeeds' in value) || value['dataSpeeds'] === undefined) return false;
    return true;
}

export function DtoESimPurchaseRoamingFromJSON(json: any): DtoESimPurchaseRoaming {
    return DtoESimPurchaseRoamingFromJSONTyped(json, false);
}

export function DtoESimPurchaseRoamingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchaseRoaming {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'],
        'dataSpeeds': json['dataSpeeds'],
    };
}

export function DtoESimPurchaseRoamingToJSON(json: any): DtoESimPurchaseRoaming {
    return DtoESimPurchaseRoamingToJSONTyped(json, false);
}

export function DtoESimPurchaseRoamingToJSONTyped(value?: DtoESimPurchaseRoaming | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'dataSpeeds': value['dataSpeeds'],
    };
}

