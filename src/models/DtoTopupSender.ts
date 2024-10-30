/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
export function instanceOfDtoTopupSender(value: object): value is DtoTopupSender {
    return true;
}

export function DtoTopupSenderFromJSON(json: any): DtoTopupSender {
    return DtoTopupSenderFromJSONTyped(json, false);
}

export function DtoTopupSenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupSender {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
    };
}

  export function DtoTopupSenderToJSON(json: any): DtoTopupSender {
      return DtoTopupSenderToJSONTyped(json, false);
  }

  export function DtoTopupSenderToJSONTyped(value?: DtoTopupSender | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'phoneNumber': value['phoneNumber'],
    };
}

