interface GoogleAPIResponse {
    results: GoogleAPIResponseResults[]
}

interface GoogleAPIResponseResults {
    address_components: AddressComponent[]
    formatted_address: string
    geometry: Geometry
}

interface AddressComponent {
    long_name: string
    short_name: string
    types: string[]
}

interface Geometry {
    location: GeometryLocation
}

interface GeometryLocation {
    lat: number
    lng: number
}

interface LocationForMap {
    latitudeFrom?: number
    longitudeFrom?: number
    latitudeTo?: number
    longitudeTo?: number
}