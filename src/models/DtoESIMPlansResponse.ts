/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoESIMPlan } from './DtoESIMPlan';
import {
    DtoESIMPlanFromJSON,
    DtoESIMPlanFromJSONTyped,
    DtoESIMPlanToJSON,
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
export function instanceOfDtoESIMPlansResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function DtoESIMPlansResponseFromJSON(json: any): DtoESIMPlansResponse {
    return DtoESIMPlansResponseFromJSONTyped(json, false);
}

export function DtoESIMPlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESIMPlansResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(DtoESIMPlanFromJSON)),
        'total': json['total'],
    };
}

export function DtoESIMPlansResponseToJSON(value?: DtoESIMPlansResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list': ((value.list as Array<any>).map(DtoESIMPlanToJSON)),
        'total': value.total,
    };
}

