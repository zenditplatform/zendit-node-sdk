/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESimRoaming
 */
export interface DtoESimRoaming {
    /**
     * 
     * @type {string}
     * @memberof DtoESimRoaming
     */
    country: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimRoaming
     */
    dataSpeeds: Array<string>;
}

/**
 * Check if a given object implements the DtoESimRoaming interface.
 */
export function instanceOfDtoESimRoaming(value: object): value is DtoESimRoaming {
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('dataSpeeds' in value) || value['dataSpeeds'] === undefined) return false;
    return true;
}

export function DtoESimRoamingFromJSON(json: any): DtoESimRoaming {
    return DtoESimRoamingFromJSONTyped(json, false);
}

export function DtoESimRoamingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimRoaming {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'],
        'dataSpeeds': json['dataSpeeds'],
    };
}

export function DtoESimRoamingToJSON(json: any): DtoESimRoaming {
    return DtoESimRoamingToJSONTyped(json, false);
}

export function DtoESimRoamingToJSONTyped(value?: DtoESimRoaming | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'dataSpeeds': value['dataSpeeds'],
    };
}

