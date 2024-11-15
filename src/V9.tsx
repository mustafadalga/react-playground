import React, { useState, useMemo } from 'react';
import { rawCountries } from "./raw-data.tsx";
import { useContext } from "react";

export type Country = {
    __typename: "country";
    name: string;
    id: string;
    flagUrl: string;
    independent: boolean;
    unMember: boolean;
    region: string;
    capital: string;
    subregion: string;
};



type ItemProps = {
    country: Country;
    savedCountry: Country;
    onItemClick: () => void;
};

type CountriesListProps = {
    countries: Country[];
    onCountryChanged: (country: Country) => void;
    savedCountry: Country;
};


export type Mode = "light" | "dark";
type Theme = { mode: Mode };
const ThemeContext = React.createContext<Theme>({ mode: "light" });

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ThemeContext.Provider;


const Item = ({ country, savedCountry, onItemClick }: ItemProps) => {
    const { mode } = useTheme();
    const className = `country-item ${
        savedCountry.id === country.id ? "saved" : ""
    } ${mode === "dark" ? "dark" : ""}`;

    console.log("render");

    return (
        <button className={className} onClick={onItemClick}>
            <img
                src={country.flagUrl}
                width={50}
                style={{ marginRight: "8px" }}
                alt={country.name}
            />
            <div>{country.name}</div>
        </button>
    );
};


const CountriesList = ({
                                  countries,
                                  onCountryChanged,
                                  savedCountry
                              }: CountriesListProps) => {
    return (
        <div className="countries-list">
            {countries.map((country) => (
                <Item
                    country={country}
                    key={country.id}
                    savedCountry={savedCountry}
                    countries={countries}
                    onItemClick={() => onCountryChanged(country)}
                />
            ))}
        </div>
    );
};

const SelectedCountry = ({
                             country,
                             onCountrySaved
                         }: {
    country: Country;
    onCountrySaved: () => void;
}) => {
    return (
        <div className="selected-container">
            <div className="selected-info">
                <ul>
                    <li>Country: {country.name}</li>
                    <li>Capital: {country.capital}</li>
                    <li>Region: {country.region}</li>
                    <li>Subregion: {country.subregion}</li>
                </ul>
                <button
                    className="selected-button"
                    onClick={onCountrySaved}
                    type="button"
                >
                    Save
                </button>
            </div>
            <img src={country.flagUrl} className="selected-flag" alt={country.name} />
        </div>
    );
};




const Page = ({ countries }: { countries: Country[] }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);
    const [mode, setMode] = useState<Mode>("light");

    const list = useMemo(() => {
        return (
            <CountriesList
                countries={countries}
                onCountryChanged={(c) => setSelectedCountry(c)}
                savedCountry={savedCountry}
            />
        );
    }, [savedCountry, countries]);

    const selected = useMemo(() => {
        return (
            <SelectedCountry
                country={selectedCountry}
                onCountrySaved={() => setSavedCountry(selectedCountry)}
            />
        );
    }, [selectedCountry]);

    const theme = useMemo(() => ({ mode }), [mode]);

    return (
        <ThemeProvider value={theme}>
            <h1>Country settings</h1>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                Toggle theme
            </button>
            <div className="flex w-full">
                {list}
                {selected}
            </div>
        </ThemeProvider>
    );
};



const getCountriesFromRawData = (raw: any[]): Country[] => {
    return raw.map((value: any) => ({
        __typename: "country",
        name: String(value.name.common),
        id: String(value.cca2).toLowerCase(),
        independent: Boolean(value.independent),
        unMember: Boolean(value.unMember),
        flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
        region: String(value.region),
        capital: value.capital.length ? String(value.capital[0]) : "",
        subregion: String(value.subregion)
    }));
};


function V9() {

    const page = useMemo(() => <Page countries={getCountriesFromRawData(rawCountries)}/>, [])
    return (
        <div className="p-10 border-purple-700 border">
            https://www.developerway.com/posts/how-to-write-performant-react-code
            <h1 className="text-3xl">Rule #2. If your component manages state, find parts of the render tree that don’t depend on the changed state and memoise them to minimize their re-renders.

            </h1>
            {page}
        </div>
    )
}

export default V9



