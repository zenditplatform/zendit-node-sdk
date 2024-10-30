/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoReportTransactionsPeriod
 */
export interface DtoReportTransactionsPeriod {
    /**
     * 
     * @type {string}
     * @memberof DtoReportTransactionsPeriod
     */
    endLt: string;
    /**
     * 
     * @type {string}
     * @memberof DtoReportTransactionsPeriod
     */
    startGte: string;
}

/**
 * Check if a given object implements the DtoReportTransactionsPeriod interface.
 */
export function instanceOfDtoReportTransactionsPeriod(value: object): value is DtoReportTransactionsPeriod {
    if (!('endLt' in value) || value['endLt'] === undefined) return false;
    if (!('startGte' in value) || value['startGte'] === undefined) return false;
    return true;
}

export function DtoReportTransactionsPeriodFromJSON(json: any): DtoReportTransactionsPeriod {
    return DtoReportTransactionsPeriodFromJSONTyped(json, false);
}

export function DtoReportTransactionsPeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoReportTransactionsPeriod {
    if (json == null) {
        return json;
    }
    return {
        
        'endLt': json['endLt'],
        'startGte': json['startGte'],
    };
}

  export function DtoReportTransactionsPeriodToJSON(json: any): DtoReportTransactionsPeriod {
      return DtoReportTransactionsPeriodToJSONTyped(json, false);
  }

  export function DtoReportTransactionsPeriodToJSONTyped(value?: DtoReportTransactionsPeriod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'endLt': value['endLt'],
        'startGte': value['startGte'],
    };
}

