/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoReportTransactionsPeriod } from './DtoReportTransactionsPeriod';
import {
    DtoReportTransactionsPeriodFromJSON,
    DtoReportTransactionsPeriodFromJSONTyped,
    DtoReportTransactionsPeriodToJSON,
    DtoReportTransactionsPeriodToJSONTyped,
} from './DtoReportTransactionsPeriod';
import type { DtoError } from './DtoError';
import {
    DtoErrorFromJSON,
    DtoErrorFromJSONTyped,
    DtoErrorToJSON,
    DtoErrorToJSONTyped,
} from './DtoError';
import type { DtoReportStatus } from './DtoReportStatus';
import {
    DtoReportStatusFromJSON,
    DtoReportStatusFromJSONTyped,
    DtoReportStatusToJSON,
    DtoReportStatusToJSONTyped,
} from './DtoReportStatus';
import type { DtoReportLogItem } from './DtoReportLogItem';
import {
    DtoReportLogItemFromJSON,
    DtoReportLogItemFromJSONTyped,
    DtoReportLogItemToJSON,
    DtoReportLogItemToJSONTyped,
} from './DtoReportLogItem';
import type { DtoReportFile } from './DtoReportFile';
import {
    DtoReportFileFromJSON,
    DtoReportFileFromJSONTyped,
    DtoReportFileToJSON,
    DtoReportFileToJSONTyped,
} from './DtoReportFile';

/**
 * 
 * @export
 * @interface DtoReportTransactions
 */
export interface DtoReportTransactions {
    /**
     * 
     * @type {string}
     * @memberof DtoReportTransactions
     */
    createdAt: string;
    /**
     * 
     * @type {DtoError}
     * @memberof DtoReportTransactions
     */
    error?: DtoError;
    /**
     * 
     * @type {DtoReportFile}
     * @memberof DtoReportTransactions
     */
    file?: DtoReportFile;
    /**
     * 
     * @type {Array<DtoReportLogItem>}
     * @memberof DtoReportTransactions
     */
    log: Array<DtoReportLogItem>;
    /**
     * 
     * @type {DtoReportTransactionsPeriod}
     * @memberof DtoReportTransactions
     */
    period: DtoReportTransactionsPeriod;
    /**
     * 
     * @type {string}
     * @memberof DtoReportTransactions
     */
    reportId: string;
    /**
     * 
     * @type {DtoReportStatus}
     * @memberof DtoReportTransactions
     */
    status: DtoReportStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoReportTransactions
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the DtoReportTransactions interface.
 */
export function instanceOfDtoReportTransactions(value: object): value is DtoReportTransactions {
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('log' in value) || value['log'] === undefined) return false;
    if (!('period' in value) || value['period'] === undefined) return false;
    if (!('reportId' in value) || value['reportId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoReportTransactionsFromJSON(json: any): DtoReportTransactions {
    return DtoReportTransactionsFromJSONTyped(json, false);
}

export function DtoReportTransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoReportTransactions {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': json['createdAt'],
        'error': json['error'] == null ? undefined : DtoErrorFromJSON(json['error']),
        'file': json['file'] == null ? undefined : DtoReportFileFromJSON(json['file']),
        'log': ((json['log'] as Array<any>).map(DtoReportLogItemFromJSON)),
        'period': DtoReportTransactionsPeriodFromJSON(json['period']),
        'reportId': json['reportId'],
        'status': DtoReportStatusFromJSON(json['status']),
        'updatedAt': json['updatedAt'],
    };
}

  export function DtoReportTransactionsToJSON(json: any): DtoReportTransactions {
      return DtoReportTransactionsToJSONTyped(json, false);
  }

  export function DtoReportTransactionsToJSONTyped(value?: DtoReportTransactions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'createdAt': value['createdAt'],
        'error': DtoErrorToJSON(value['error']),
        'file': DtoReportFileToJSON(value['file']),
        'log': ((value['log'] as Array<any>).map(DtoReportLogItemToJSON)),
        'period': DtoReportTransactionsPeriodToJSON(value['period']),
        'reportId': value['reportId'],
        'status': DtoReportStatusToJSON(value['status']),
        'updatedAt': value['updatedAt'],
    };
}

