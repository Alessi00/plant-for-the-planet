export interface Project {
  guid: string;
  slug: string;
  name: string;
  unitCost: number;
  currency: string;
  unit?: string;
  purpose: string;
  allowDonations: boolean;
}

export interface SingleProject {
  id: string;
  name: string;
  slug: string;
  allowDonations: boolean;
  purpose: string;
  currency: string;
  unitCost: number;
}

export interface SingleProjectGeojson {
  geometry: Geometry
  type: string
  properties: Properties
}

export interface Geometry {
  coordinates: number[][][]
  type: string
}

export interface Properties {
  lastUpdated: LastUpdated
  name: string
  description: string
  id: string
  status: string
}

export interface LastUpdated {
  date: string
  timezone: string
  timezone_type: number
}


//single plant location 

export interface SinglePlantLocation {
  metadata: Metadata
  hid: string
  otherSpecies: any
  description: any
  geometryUpdatesCount: number
  type: string
  plantProjectSite: any
  statusReason: any
  plantDateEnd: any
  registrationDate: string
  sampleTreeCount: number
  id: string
  plantDate: string
  image: any
  idempotencyKey: string
  coordinates: Coordinate[]
  history: any[]
  samplePlantLocations: SamplePlantLocation[]
  plantProject: string
  plantedSpecies: PlantedSpecy[]
  plantDateStart: any
  originalGeometry: OriginalGeometry2
  captureMode: string
  geometry: Geometry2
  captureStatus: string
  deviceLocation: DeviceLocation4
  status: any
}

export interface Metadata {
  app: App
  public: Public
}

export interface App {
  appVersion: string
  deviceSystemName: string
  deviceSystemVersion: string
  deviceModel: string
  deviceManufacturer: string
  deviceBrand: string
  deviceLocation: DeviceLocation
}

export interface DeviceLocation {
  coordinates: number[]
  type: string
}

export interface Public {
  "complete-yes-np": string
  "name-lider": string
  "se-replanto-yes-no": string
}

export interface Coordinate {
  image: string
  coordinateIndex: string
  id: string
  status: string
}

export interface SamplePlantLocation {
  parent: string
  nextMeasurementDate?: NextMeasurementDate
  metadata: Metadata2
  hid: string
  scientificName: string
  otherSpecies: any
  description: any
  geometryUpdatesCount: number
  type: string
  plantProjectSite: any
  statusReason: any
  registrationDate: string
  id: string
  tag: string
  plantDate: string
  measurements: Measurements
  image: any
  idempotencyKey: string
  profile: string
  coordinates: Coordinate2[]
  revisionPeriodicity?: RevisionPeriodicity
  scientificSpecies: string
  history: History[]
  originalGeometry: OriginalGeometry
  captureMode: string
  geometry: Geometry
  lastMeasurementDate?: LastMeasurementDate
  captureStatus: string
  deviceLocation: DeviceLocation3
  status: any
}

export interface NextMeasurementDate {
  date: string
  timezone: string
  timezone_type: number
}

export interface Metadata2 {
  app: App2
  private: any[]
  public: any[]
}

export interface App2 {
  appVersion: string
  deviceSystemName: string
  deviceSystemVersion: string
  deviceModel: string
  deviceManufacturer: string
  deviceBrand: string
  deviceLocation: DeviceLocation2
}

export interface DeviceLocation2 {
  coordinates: number[]
  type: string
}

export interface Measurements {
  width: number
  height: number
}

export interface Coordinate2 {
  image: string
  created: string
  coordinateIndex: string
  id: string
  updated: string
  status: string
}

export interface RevisionPeriodicity {
  subsequentInterval: string
  discreteIntervals: string[]
  startDate: string
}

export interface History {
  image: string
  statusReason: any
  created: string
  eventName: string
  classification: any
  eventDate: EventDate
  measurements: Measurements2
  status: string
}

export interface EventDate {
  date: string
  timezone: string
  timezone_type: number
}

export interface Measurements2 {
  width: number
  height: number
}

export interface OriginalGeometry {
  coordinates: number[]
  type: string
}

export interface Geometry {
  coordinates: number[]
  type: string
}

export interface LastMeasurementDate {
  date: string
  timezone: string
  timezone_type: number
}

export interface DeviceLocation3 {
  coordinates: number[]
  type: string
}

export interface PlantedSpecy {
  scientificName: string
  created: string
  otherSpecies: any
  scientificSpecies: string
  treeCount: number
  id: string
  updated: string
}

export interface OriginalGeometry2 {
  coordinates: number[][][]
  type: string
}

export interface Geometry2 {
  coordinates: number[][][]
  type: string
  properties: Properties
}

export interface Properties {
  id: string
}

export interface DeviceLocation4 {
  coordinates: number[]
  type: string
}
