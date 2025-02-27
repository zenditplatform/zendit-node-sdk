/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoReportFile
 */
export interface DtoReportFile {
    /**
     * 
     * @type {string}
     * @memberof DtoReportFile
     */
    downloadUrl: string;
    /**
     * 
     * @type {string}
     * @memberof DtoReportFile
     */
    name: string;
}

/**
 * Check if a given object implements the DtoReportFile interface.
 */
export function instanceOfDtoReportFile(value: object): value is DtoReportFile {
    if (!('downloadUrl' in value) || value['downloadUrl'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function DtoReportFileFromJSON(json: any): DtoReportFile {
    return DtoReportFileFromJSONTyped(json, false);
}

export function DtoReportFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoReportFile {
    if (json == null) {
        return json;
    }
    return {
        
        'downloadUrl': json['downloadUrl'],
        'name': json['name'],
    };
}

export function DtoReportFileToJSON(json: any): DtoReportFile {
    return DtoReportFileToJSONTyped(json, false);
}

export function DtoReportFileToJSONTyped(value?: DtoReportFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'downloadUrl': value['downloadUrl'],
        'name': value['name'],
    };
}

