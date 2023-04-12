/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoTopupSender
 */
export interface DtoTopupSender {
    /**
     * 
     * @type {string}
     * @memberof DtoTopupSender
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupSender
     */
    phoneNumber?: string;
}

/**
 * Check if a given object implements the DtoTopupSender interface.
 */
export function instanceOfDtoTopupSender(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoTopupSenderFromJSON(json: any): DtoTopupSender {
    return DtoTopupSenderFromJSONTyped(json, false);
}

export function DtoTopupSenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupSender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': !exists(json, 'country') ? undefined : json['country'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}

export function DtoTopupSenderToJSON(value?: DtoTopupSender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': value.country,
        'phoneNumber': value.phoneNumber,
    };
}

