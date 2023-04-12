/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoTransactionStatus } from './DtoTransactionStatus';
import {
    DtoTransactionStatusFromJSON,
    DtoTransactionStatusFromJSONTyped,
    DtoTransactionStatusToJSON,
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
    dateTime?: string;
    /**
     * 
     * @type {DtoTransactionStatus}
     * @memberof DtoTransactionLogItem
     */
    status?: DtoTransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoTransactionLogItem
     */
    statusMessage?: string;
}

/**
 * Check if a given object implements the DtoTransactionLogItem interface.
 */
export function instanceOfDtoTransactionLogItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoTransactionLogItemFromJSON(json: any): DtoTransactionLogItem {
    return DtoTransactionLogItemFromJSONTyped(json, false);
}

export function DtoTransactionLogItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransactionLogItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateTime': !exists(json, 'dateTime') ? undefined : json['dateTime'],
        'status': !exists(json, 'status') ? undefined : DtoTransactionStatusFromJSON(json['status']),
        'statusMessage': !exists(json, 'statusMessage') ? undefined : json['statusMessage'],
    };
}

export function DtoTransactionLogItemToJSON(value?: DtoTransactionLogItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateTime': value.dateTime,
        'status': DtoTransactionStatusToJSON(value.status),
        'statusMessage': value.statusMessage,
    };
}

