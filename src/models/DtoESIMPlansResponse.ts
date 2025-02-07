/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoESIMPlan } from './DtoESIMPlan';
import {
    DtoESIMPlanFromJSON,
    DtoESIMPlanFromJSONTyped,
    DtoESIMPlanToJSON,
    DtoESIMPlanToJSONTyped,
} from './DtoESIMPlan';

/**
 * 
 * @export
 * @interface DtoESIMPlansResponse
 */
export interface DtoESIMPlansResponse {
    /**
     * 
     * @type {Array<DtoESIMPlan>}
     * @memberof DtoESIMPlansResponse
     */
    list: Array<DtoESIMPlan>;
    /**
     * 
     * @type {number}
     * @memberof DtoESIMPlansResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoESIMPlansResponse interface.
 */
export function instanceOfDtoESIMPlansResponse(value: object): value is DtoESIMPlansResponse {
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoESIMPlansResponseFromJSON(json: any): DtoESIMPlansResponse {
    return DtoESIMPlansResponseFromJSONTyped(json, false);
}

export function DtoESIMPlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESIMPlansResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(DtoESIMPlanFromJSON)),
        'total': json['total'],
    };
}

export function DtoESIMPlansResponseToJSON(json: any): DtoESIMPlansResponse {
    return DtoESIMPlansResponseToJSONTyped(json, false);
}

export function DtoESIMPlansResponseToJSONTyped(value?: DtoESIMPlansResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'list': ((value['list'] as Array<any>).map(DtoESIMPlanToJSON)),
        'total': value['total'],
    };
}

