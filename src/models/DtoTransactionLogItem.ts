/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
    DtoTransactionStatusToJSONTyped,
} from './DtoTransactionStatus';

/**
 * 
 * @export
 * @interface DtoTransactionLogItem
 */
export interface DtoTransactionLogItem {
    /**
     * 
     * @type {string}
     * @memberof DtoTransactionLogItem
     */
    dateTime: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTransactionLogItem
     */
    status: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoTransactionLogItem
     */
    statusMessage: string;
}



/**
 * Check if a given object implements the DtoTransactionLogItem interface.
 */
export function instanceOfDtoTransactionLogItem(value: object): value is DtoTransactionLogItem {
    if (!('dateTime' in value) || value['dateTime'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('statusMessage' in value) || value['statusMessage'] === undefined) return false;
    return true;
}

export function DtoTransactionLogItemFromJSON(json: any): DtoTransactionLogItem {
    return DtoTransactionLogItemFromJSONTyped(json, false);
}

export function DtoTransactionLogItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransactionLogItem {
    if (json == null) {
        return json;
    }
    return {
        
        'dateTime': json['dateTime'],
        'status': DtoTransactionStatusFromJSON(json['status']),
        'statusMessage': json['statusMessage'],
    };
}

export function DtoTransactionLogItemToJSON(json: any): DtoTransactionLogItem {
    return DtoTransactionLogItemToJSONTyped(json, false);
}

export function DtoTransactionLogItemToJSONTyped(value?: DtoTransactionLogItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dateTime': value['dateTime'],
        'status': DtoTransactionStatusToJSON(value['status']),
        'statusMessage': value['statusMessage'],
    };
}

