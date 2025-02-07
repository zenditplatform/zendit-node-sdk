/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESIMPlan
 */
export interface DtoESIMPlan {
    /**
     * 
     * @type {string}
     * @memberof DtoESIMPlan
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESIMPlan
     */
    endAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESIMPlan
     */
    iccid: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESIMPlan
     */
    initialDataGB: number;
    /**
     * 
     * @type {string}
     * @memberof DtoESIMPlan
     */
    offerId: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESIMPlan
     */
    remainingDataGB: number;
    /**
     * 
     * @type {string}
     * @memberof DtoESIMPlan
     */
    startAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESIMPlan
     */
    status: DtoESIMPlanStatusEnum;
}


/**
 * @export
 */
export const DtoESIMPlanStatusEnum = {
    Active: 'ACTIVE',
    Queued: 'QUEUED'
} as const;
export type DtoESIMPlanStatusEnum = typeof DtoESIMPlanStatusEnum[keyof typeof DtoESIMPlanStatusEnum];


/**
 * Check if a given object implements the DtoESIMPlan interface.
 */
export function instanceOfDtoESIMPlan(value: object): value is DtoESIMPlan {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('iccid' in value) || value['iccid'] === undefined) return false;
    if (!('initialDataGB' in value) || value['initialDataGB'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('remainingDataGB' in value) || value['remainingDataGB'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function DtoESIMPlanFromJSON(json: any): DtoESIMPlan {
    return DtoESIMPlanFromJSONTyped(json, false);
}

export function DtoESIMPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESIMPlan {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'],
        'endAt': json['endAt'] == null ? undefined : json['endAt'],
        'iccid': json['iccid'],
        'initialDataGB': json['initialDataGB'],
        'offerId': json['offerId'],
        'remainingDataGB': json['remainingDataGB'],
        'startAt': json['startAt'] == null ? undefined : json['startAt'],
        'status': json['status'],
    };
}

export function DtoESIMPlanToJSON(json: any): DtoESIMPlan {
    return DtoESIMPlanToJSONTyped(json, false);
}

export function DtoESIMPlanToJSONTyped(value?: DtoESIMPlan | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'endAt': value['endAt'],
        'iccid': value['iccid'],
        'initialDataGB': value['initialDataGB'],
        'offerId': value['offerId'],
        'remainingDataGB': value['remainingDataGB'],
        'startAt': value['startAt'],
        'status': value['status'],
    };
}

