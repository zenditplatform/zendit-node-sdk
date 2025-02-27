/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoReportStatus } from './DtoReportStatus';
import {
    DtoReportStatusFromJSON,
    DtoReportStatusFromJSONTyped,
    DtoReportStatusToJSON,
    DtoReportStatusToJSONTyped,
} from './DtoReportStatus';

/**
 * 
 * @export
 * @interface DtoReportLogItem
 */
export interface DtoReportLogItem {
    /**
     * 
     * @type {string}
     * @memberof DtoReportLogItem
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof DtoReportLogItem
     */
    recordedAt: string;
    /**
     * 
     * @type {DtoReportStatus}
     * @memberof DtoReportLogItem
     */
    status: DtoReportStatus;
}



/**
 * Check if a given object implements the DtoReportLogItem interface.
 */
export function instanceOfDtoReportLogItem(value: object): value is DtoReportLogItem {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('recordedAt' in value) || value['recordedAt'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function DtoReportLogItemFromJSON(json: any): DtoReportLogItem {
    return DtoReportLogItemFromJSONTyped(json, false);
}

export function DtoReportLogItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoReportLogItem {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'recordedAt': json['recordedAt'],
        'status': DtoReportStatusFromJSON(json['status']),
    };
}

export function DtoReportLogItemToJSON(json: any): DtoReportLogItem {
    return DtoReportLogItemToJSONTyped(json, false);
}

export function DtoReportLogItemToJSONTyped(value?: DtoReportLogItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'recordedAt': value['recordedAt'],
        'status': DtoReportStatusToJSON(value['status']),
    };
}

