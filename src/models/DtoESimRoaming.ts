/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoESimNetwork } from './DtoESimNetwork';
import {
    DtoESimNetworkFromJSON,
    DtoESimNetworkFromJSONTyped,
    DtoESimNetworkToJSON,
    DtoESimNetworkToJSONTyped,
} from './DtoESimNetwork';

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
    /**
     * 
     * @type {Array<DtoESimNetwork>}
     * @memberof DtoESimRoaming
     */
    networks: Array<DtoESimNetwork>;
}

/**
 * Check if a given object implements the DtoESimRoaming interface.
 */
export function instanceOfDtoESimRoaming(value: object): value is DtoESimRoaming {
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('dataSpeeds' in value) || value['dataSpeeds'] === undefined) return false;
    if (!('networks' in value) || value['networks'] === undefined) return false;
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
        'networks': ((json['networks'] as Array<any>).map(DtoESimNetworkFromJSON)),
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
        'networks': ((value['networks'] as Array<any>).map(DtoESimNetworkToJSON)),
    };
}

