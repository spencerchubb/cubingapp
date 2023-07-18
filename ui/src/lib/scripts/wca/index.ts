const baseUrl = "https://www.worldcubeassociation.org/api/v0";

export async function fetchWCAPerson(wcaId: string): Promise<WCAPerson> {
    const url = `${baseUrl}/persons/${wcaId}`;
    return fetchJson(url);
}

export async function fetchWCARecords(): Promise<WCARecords> {
    const url = `${baseUrl}/records`;
    return fetchJson(url);     
}

export async function fetchRegionRecords(region: string): Promise<WCARegionRecords> {
    const wcaRecords = await fetchWCARecords();
    const regionType = getRegionType(region);
    switch (regionType) {
        case "world":
            return wcaRecords.world_records;
        case "continent":
            return wcaRecords.continental_records[`_${region}`];
        case "country":
            return wcaRecords.national_records[region];
            default:
                throw new Error(`Invalid region type: ${regionType}`);
    } 
}

export async function fetchWCASumOfRanks(type: string, region: string, wcaId: string): Promise<WCASumOfRanks> {
    if (!["Single", "Average"].includes(type)) {
        throw new Error(`Invalid type: ${type}`);
    }

    const regionType = getRegionType(region);

    if (wcaId) wcaId = `?wcaId=${wcaId}`;
    const url = `https://statistics-api.worldcubeassociation.org/sum-of-ranks/${type}/${regionType}/${region}${wcaId}`;
    return fetchJson(url);
}

async function fetchJson(url: string): Promise<any> {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    return json;
}

type RegionType = "world" | "continent" | "country";

function getRegionType(region: string): RegionType {
    if (region === "World") return "world";
    if (CONTINENTS.includes(region)) return "continent";
    if (COUNTRIES.includes(region)) return "country";
    throw new Error(`Invalid region: ${region}`);
}

export type WCAPerson = {
    error?: string;
    person: {
        name: string;
        delegate_status: null | "delegate";
        wca_id: string;
        avatar: {
            url: string;
            pending_url: string;
            thumb_url: string;
            is_default: boolean;
        };
        gender: "m" | "f";
        country_iso2: string;
        url: string;
        country: {
            id: string;
            name: string;
            continentId: string;
            iso2: string;
        };
        class: "person";
        teams: any[]; // This is probably wrong but I don't need it
        id: string;
    };
    competition_count: number;
    personal_records: {
        [key: string]: {
            single?: {
                best: number;
                world_rank: number;
                continent_rank: number;
                country_rank: number;
            };
            average?: {
                best: number;
                world_rank: number;
                continent_rank: number;
                country_rank: number;
            };
        };
    };
    medals: {
        gold: number;
        silver: number;
        bronze: number;
        total: number;
    };
    records: {
        national: number;
        continental: number;
        world: number;
        total: number;
    };
};

export type WCARegionRecords = {
    /* This key is the event. */
    [key: string]: {
        single?: number;
        average?: number;
    };
};

export type WCARecords = {
    world_records: WCARegionRecords;
    continental_records: {
        /**
         * This key is the continent.
         * The WCA API returns the continent name prepended by an underscore for example, "_South America".
         */
        [key: string]: WCARegionRecords;
    };
    national_records: {
        /** This key is the country */
        [key: string]: WCARegionRecords;
    };
}

export type WCASumOfRanks = {
    content: {
        regionRank: number;
        wcaId: string;
        name: string;
        overall: number;
        events: {
            event: {
                id: string;
            };
            regionalRank: number;
            completed: boolean;
        }[];
    }[];
}

type WCAEvent = { name: string; wcaKey: string};

/**
 * 333ft, magic, mmagic, and 333mbo are not included because they are deprecated events.
 */
export const WCA_EVENTS: WCAEvent[] = [
    {
        name: "2x2",
        wcaKey: "222"
    },
    {
        name: "3x3",
        wcaKey: "333"
    },
    {
        name: "3x3 One-Handed",
        wcaKey: "333oh"
    },
    {
        name: "4x4",
        wcaKey: "444"
    },
    {
        name: "5x5",
        wcaKey: "555"
    },
    {
        name: "Megaminx",
        wcaKey: "minx"
    },
    {
        name: "Pyraminx",
        wcaKey: "pyram"
    },
    {
        name: "Skewb",
        wcaKey: "skewb"
    },
    {
        name: "3x3 Blindfolded",
        wcaKey: "333bf"
    },
    {
        name: "Clock",
        wcaKey: "clock"
    },
    {
        name: "3x3 Fewest Moves",
        wcaKey: "333fm"
    },
    {
        name: "6x6",
        wcaKey: "666"
    },
    {
        name: "7x7",
        wcaKey: "777"
    },
    {
        name: "Square-1",
        wcaKey: "sq1"
    },
    {
        name: "3x3 Multi-blind",
        wcaKey: "333mbf"
    },
    {
        name: "4x4 Blindfolded",
        wcaKey: "444bf"
    },
    {
        name: "5x5 Blindfolded",
        wcaKey: "555bf"
    },
];

export const CONTINENTS = [
    "Asia",
    "Europe",
    "Africa",
    "South America",
    "Oceania",
    "North America",
];

export const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Belize",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Cambodia",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Costa Rica",
    "Cote d_Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Malta",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Saint Kitts and Nevis",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "USA",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];