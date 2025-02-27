/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoInputMask
 */
export interface DtoInputMask {
    /**
     * 
     * @type {string}
     * @memberof DtoInputMask
     */
    inputMask?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoInputMask
     */
    requiredField?: string;
}

/**
 * Check if a given object implements the DtoInputMask interface.
 */
export function instanceOfDtoInputMask(value: object): value is DtoInputMask {
    return true;
}

export function DtoInputMaskFromJSON(json: any): DtoInputMask {
    return DtoInputMaskFromJSONTyped(json, false);
}

export function DtoInputMaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoInputMask {
    if (json == null) {
        return json;
    }
    return {
        
        'inputMask': json['inputMask'] == null ? undefined : json['inputMask'],
        'requiredField': json['requiredField'] == null ? undefined : json['requiredField'],
    };
}

export function DtoInputMaskToJSON(json: any): DtoInputMask {
    return DtoInputMaskToJSONTyped(json, false);
}

export function DtoInputMaskToJSONTyped(value?: DtoInputMask | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inputMask': value['inputMask'],
        'requiredField': value['requiredField'],
    };
}

