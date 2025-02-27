/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoRequiredFieldLabel
 */
export interface DtoRequiredFieldLabel {
    /**
     * 
     * @type {string}
     * @memberof DtoRequiredFieldLabel
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRequiredFieldLabel
     */
    requiredField?: string;
}

/**
 * Check if a given object implements the DtoRequiredFieldLabel interface.
 */
export function instanceOfDtoRequiredFieldLabel(value: object): value is DtoRequiredFieldLabel {
    return true;
}

export function DtoRequiredFieldLabelFromJSON(json: any): DtoRequiredFieldLabel {
    return DtoRequiredFieldLabelFromJSONTyped(json, false);
}

export function DtoRequiredFieldLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoRequiredFieldLabel {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'] == null ? undefined : json['label'],
        'requiredField': json['requiredField'] == null ? undefined : json['requiredField'],
    };
}

export function DtoRequiredFieldLabelToJSON(json: any): DtoRequiredFieldLabel {
    return DtoRequiredFieldLabelToJSONTyped(json, false);
}

export function DtoRequiredFieldLabelToJSONTyped(value?: DtoRequiredFieldLabel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'label': value['label'],
        'requiredField': value['requiredField'],
    };
}

