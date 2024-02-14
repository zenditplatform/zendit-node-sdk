/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
export function instanceOfDtoESIMPlan(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "iccid" in value;
    isInstance = isInstance && "initialDataGB" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "remainingDataGB" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function DtoESIMPlanFromJSON(json: any): DtoESIMPlan {
    return DtoESIMPlanFromJSONTyped(json, false);
}

export function DtoESIMPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESIMPlan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'endAt': !exists(json, 'endAt') ? undefined : json['endAt'],
        'iccid': json['iccid'],
        'initialDataGB': json['initialDataGB'],
        'offerId': json['offerId'],
        'remainingDataGB': json['remainingDataGB'],
        'startAt': !exists(json, 'startAt') ? undefined : json['startAt'],
        'status': json['status'],
    };
}

export function DtoESIMPlanToJSON(value?: DtoESIMPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'endAt': value.endAt,
        'iccid': value.iccid,
        'initialDataGB': value.initialDataGB,
        'offerId': value.offerId,
        'remainingDataGB': value.remainingDataGB,
        'startAt': value.startAt,
        'status': value.status,
    };
}

