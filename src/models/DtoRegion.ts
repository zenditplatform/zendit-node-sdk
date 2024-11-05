/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoRegion = {
    RegionAfrica: 'Africa',
    RegionAsia: 'Asia',
    RegionCaribbean: 'Caribbean',
    RegionCentralAmerica: 'Central America',
    RegionEasternEurope: 'Eastern Europe',
    RegionGlobal: 'Global',
    RegionMiddleEastAndNorthAfrica: 'Middle East and North Africa',
    RegionNorthAmerica: 'North America',
    RegionOceania: 'Oceania',
    RegionSouthAmerica: 'South America',
    RegionSouthAsia: 'South Asia',
    RegionSoutheastAsia: 'Southeast Asia',
    RegionWesternEurope: 'Western Europe'
} as const;
export type DtoRegion = typeof DtoRegion[keyof typeof DtoRegion];


export function instanceOfDtoRegion(value: any): boolean {
    for (const key in DtoRegion) {
        if (Object.prototype.hasOwnProperty.call(DtoRegion, key)) {
            if (DtoRegion[key as keyof typeof DtoRegion] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoRegionFromJSON(json: any): DtoRegion {
    return DtoRegionFromJSONTyped(json, false);
}

export function DtoRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoRegion {
    return json as DtoRegion;
}

export function DtoRegionToJSON(value?: DtoRegion | null): any {
    return value as any;
}

export function DtoRegionToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoRegion {
    return value as DtoRegion;
}

