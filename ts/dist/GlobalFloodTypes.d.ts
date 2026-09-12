export interface Flood {
    daily?: Record<string, any>;
    daily_units?: Record<string, any>;
    generationtime_ms?: number;
    latitude?: number;
    longitude?: number;
    timezone?: string;
    timezone_abbreviation?: string;
    utc_offset_seconds?: number;
}
export interface FloodLoadMatch {
    apikey?: string;
    cell_selection?: string;
    daily?: any[];
    end_date?: string;
    ensemble?: boolean;
    forecast_day?: number;
    latitude: string;
    longitude: string;
    past_day?: number;
    start_date?: string;
    timeformat?: string;
    timezone?: string;
}
