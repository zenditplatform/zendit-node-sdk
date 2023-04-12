/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 */
export const CoreErrorCode = {
    ErrorCodeNotAssigned: '',
    errorCodeNative: 'native'
} as const;
export type CoreErrorCode = typeof CoreErrorCode[keyof typeof CoreErrorCode];


export function CoreErrorCodeFromJSON(json: any): CoreErrorCode {
    return CoreErrorCodeFromJSONTyped(json, false);
}

export function CoreErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoreErrorCode {
    return json as CoreErrorCode;
}

export function CoreErrorCodeToJSON(value?: CoreErrorCode | null): any {
    return value as any;
}

