/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
export function instanceOfDtoESimRoaming(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "dataSpeeds" in value;

    return isInstance;
}

export function DtoESimRoamingFromJSON(json: any): DtoESimRoaming {
    return DtoESimRoamingFromJSONTyped(json, false);
}

export function DtoESimRoamingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimRoaming {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': json['country'],
        'dataSpeeds': json['dataSpeeds'],
    };
}

export function DtoESimRoamingToJSON(value?: DtoESimRoaming | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': value.country,
        'dataSpeeds': value.dataSpeeds,
    };
}

