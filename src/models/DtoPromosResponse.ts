/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoPromo } from './DtoPromo';
import {
    DtoPromoFromJSON,
    DtoPromoFromJSONTyped,
    DtoPromoToJSON,
    DtoPromoToJSONTyped,
} from './DtoPromo';

/**
 * 
 * @export
 * @interface DtoPromosResponse
 */
export interface DtoPromosResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoPromosResponse
     */
    limit?: number;
    /**
     * 
     * @type {Array<DtoPromo>}
     * @memberof DtoPromosResponse
     */
    list?: Array<DtoPromo>;
    /**
     * 
     * @type {number}
     * @memberof DtoPromosResponse
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromosResponse
     */
    total?: number;
}

/**
 * Check if a given object implements the DtoPromosResponse interface.
 */
export function instanceOfDtoPromosResponse(value: object): value is DtoPromosResponse {
    return true;
}

export function DtoPromosResponseFromJSON(json: any): DtoPromosResponse {
    return DtoPromosResponseFromJSONTyped(json, false);
}

export function DtoPromosResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPromosResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'] == null ? undefined : json['limit'],
        'list': json['list'] == null ? undefined : ((json['list'] as Array<any>).map(DtoPromoFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function DtoPromosResponseToJSON(json: any): DtoPromosResponse {
    return DtoPromosResponseToJSONTyped(json, false);
}

export function DtoPromosResponseToJSONTyped(value?: DtoPromosResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': value['list'] == null ? undefined : ((value['list'] as Array<any>).map(DtoPromoToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

