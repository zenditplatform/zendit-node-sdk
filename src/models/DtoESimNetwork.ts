/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESimNetwork
 */
export interface DtoESimNetwork {
    /**
     * 
     * @type {string}
     * @memberof DtoESimNetwork
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimNetwork
     */
    brandName: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimNetwork
     */
    dataSpeeds: Array<string>;
}

/**
 * Check if a given object implements the DtoESimNetwork interface.
 */
export function instanceOfDtoESimNetwork(value: object): value is DtoESimNetwork {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('dataSpeeds' in value) || value['dataSpeeds'] === undefined) return false;
    return true;
}

export function DtoESimNetworkFromJSON(json: any): DtoESimNetwork {
    return DtoESimNetworkFromJSONTyped(json, false);
}

export function DtoESimNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimNetwork {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
        'dataSpeeds': json['dataSpeeds'],
    };
}

export function DtoESimNetworkToJSON(json: any): DtoESimNetwork {
    return DtoESimNetworkToJSONTyped(json, false);
}

export function DtoESimNetworkToJSONTyped(value?: DtoESimNetwork | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
        'dataSpeeds': value['dataSpeeds'],
    };
}

