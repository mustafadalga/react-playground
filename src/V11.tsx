import { memo, useEffect, useRef, useState } from "react";

// https://www.developerway.com/posts/react-key-attribute
const description = String.raw`
Understanding the Pitfalls of Using Index as Keys in React Lists and Why Stable Keys Are Essential

How React Handles Index Keys

 1. Position-Based Component Reuse:
 • When you use key={index}, React assumes that the component at that array position corresponds to the same “logical” component, even if the data associated with that position changes (due to sorting, for example).
 • React doesn’t remount or reset the component; instead, it updates the props of the existing component at that position.
 2. Component Props Update:
 • The component at each position gets updated with the new props corresponding to that index after the array is reordered.
 • React does not reinitialize or move the component itself—it assumes the component’s identity is tied to its index, not its data.
 
 
 Why State Gets Spoiled

When list items are reordered using key={index}, React reuses the component instances tied to those indices, but their state remains unchanged. This mismatch causes unexpected behavior:

Example Scenario

 1. Initial Render:

countryList = ["USA", "Canada", "Mexico"];


Rendered list:
 • index 0 -> USA (inactive, white background)
 • index 1 -> Canada (active, red background)
 • index 2 -> Mexico (inactive, white background)

 2. Reorder (Sorting):
sortedCountryList = ["Mexico", "Canada", "USA"];


What React does:
 • index 0 -> USA -> Mexico (inherits state from USA, inactive, white background)
 • index 1 -> Canada (keeps state, still active, red background)
 • index 2 -> Mexico -> USA (inherits state from Mexico, inactive, white background)



 3. Result:
 • Mismatch: Mexico at index 0 retains the state of USA.
 • The visual result will likely confuse users because the items appear in the wrong state relative to their position.


Key Takeaways

 1. React Assumes Fixed Position:
 • Using key={index}, React assumes the identity of the component is tied to its position in the array, not the data itself.
 2. State Stays with the Component:
 • When the list is reordered, React reuses the same component instances at their current positions, and the internal state (like isActive) doesn’t reset.
 3. Props Mismatch:
 • The props update with new data, but the state doesn’t align with the new data, leading to incorrect UI behavior.




Solution: Use Stable, Unique Keys

To fix this problem, use a unique key tied to the data itself (e.g., country.name or country.id) instead of the index.

Updated Example:
<ul>
    {sortedCountries.map((country) => (
        <MemoCountryItem country={country} key={country} />
    ))}
</ul>


Behavior:

 • React now ties the component’s identity to the key (country), not its position.
 • When the list is reordered, React reuses the DOM nodes but re-mounts or updates components as necessary to match the new data.

Conclusion

Your understanding is absolutely correct. Using index as a key ties components to their array position, leading to:
 1. Reused state in the wrong context after reordering.
 2. Potential UI mismatches or “spoiled” states.

The solution is to always use unique, stable keys based on the data itself, ensuring that React correctly associates components with their logical data rather than their position in the array.
`;

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];
import { orderBy } from "lodash"
import { Country } from "src/V9.tsx";
import { rawCountries } from "./raw-data.tsx";;

const getCountriesFromRawData = rawCountries.map((value: any) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion)
}))

function CountryItem({ country, id }) {
    const renderCount = useRef(0);
    const [ isActive, setIsActive ] = useState(false);
    useEffect(() => {
        console.log(`MOUNT: ${id}`);
    }, [ id ]);

    console.log(`RENDER: ${id}`);

    useEffect(() => {
        renderCount.current += 1;
    }, [])
    return (
        <li className="flex gap-3" style={{ backgroundColor: isActive ? 'red' : 'white' }}
            onClick={() => setIsActive(!isActive)}>
            <span>{country}</span>
            <span>
                Render Count: {renderCount.current}
            </span>
        </li>
    )
}

function CountryItemV2({ country, id }) {
    const [ isActive, setIsActive ] = useState(false);
    useEffect(() => {
        console.log(`MOUNT: ${id}`);
    }, [ id ]);

    console.log(`RENDER: ${id}`);

    return (
        <li className="flex gap-3" style={{ backgroundColor: isActive ? 'red' : 'white' }}
            onClick={() => setIsActive(!isActive)}>
            <img
                src={country.flagUrl}
                width={70}
                style={{ marginRight: "8px" }}
                alt={country.name}
            />
            {country.name}
        </li>
    )
}

const MemoCountryItem = memo(CountryItem);
const MemoCountryItemV2 = memo(CountryItemV2);

function ListWithID() {
    const [ sort, setSort ] = useState('asc');
    const [ countries, setCountries ] = useState(countryList);
    // const sortedCountries = orderBy(countries, [], [ sort ]); // Sort by 'name'
    const sortedCountries = countries

    return (
        <section className="grid content-baseline gap-4">
            <h1>List with id in "key"</h1>
            <button className="bg-red-400 w-96" onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
                Toggle Sorting: {sort}
            </button>
            <button className="bg-red-400 w-96" onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
                Toggle Sorting: {sort}
            </button>
            <button className="bg-red-400 w-96"
                    onClick={() => setCountries(prevState => [ ...prevState, `${prevState.length}. Count` ])}>
                Add Country to End
            </button>
            <button className="bg-red-400 w-96"
                    onClick={() => setCountries(prevState => [ `${prevState.length}. Count`, ...prevState ])}>
                Add Country to Head
            </button>
            <button className="bg-red-400 w-96" onClick={() => setCountries(prevState => {
                const newState = [ ...prevState ];
                newState.pop();
                return newState;
            })}>
                Remove Country from End
            </button>
            <button className="bg-red-400 w-96" onClick={() => setCountries(prevState => {
                const newState = [ ...prevState ];
                newState.shift();
                return newState;
            })}>
                Remove Country from Head
            </button>
            <ul>
                {sortedCountries.map(country => <MemoCountryItem id="by id" country={country} key={country}/>)}
            </ul>
        </section>
    )
}


function ListWithIndex() {
    const [ sort, setSort ] = useState('asc');
    const [ countries, setCountries ] = useState(countryList);
    // const sortedCountries = orderBy(countries, [], [ sort ]); // Sort by 'name'
    const sortedCountries = countries


    return (
        <section className="grid gap-4">
            <h1>List with id in "index"</h1>
            <button className="bg-red-400 w-96" onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
                Toggle Sorting: {sort}
            </button>
            <button className="bg-red-400 w-96"
                    onClick={() => setCountries(prevState => [ ...prevState, `${prevState.length}. Count` ])}>
                Add Country to End
            </button>
            <button className="bg-red-400 w-96"
                    onClick={() => setCountries(prevState => [ `${prevState.length}. Count`, ...prevState ])}>
                Add Country to Head
            </button>
            <button className="bg-red-400 w-96" onClick={() => setCountries(prevState => {
                const newState = [ ...prevState ];
                newState.pop();
                return newState;
            })}>
                Remove Country from End
            </button>
            <button className="bg-red-400 w-96" onClick={() => setCountries(prevState => {
                const newState = [ ...prevState ];
                newState.shift();
                return newState;
            })}>
                Remove Country from Head
            </button>
            <ul>
                {sortedCountries.map((country, index) => <MemoCountryItem id="by index" country={country}
                                                                          key={index}/>)}
            </ul>
        </section>
    )
}

function ListWithIDPagination() {
    const [ page, setPage ] = useState(0);
    const itemsPerPage = 50;


    const pagedCountries = getCountriesFromRawData.slice(
        page * itemsPerPage,
        itemsPerPage * (page + 1)
    );
    const pages = Array.from(
        Array(Math.ceil(getCountriesFromRawData.length / itemsPerPage)).keys()
    );

    return (
        <section className="grid content-baseline gap-4">
            <h1>List with id in "key"</h1>
            <h3>Paginated list with index as key</h3>
            <h4>Page: {page}</h4>
           <div className="flex items-center gap-3">
               {pages.map((p) => (
                   <button className="p-3 bg-gray-400" onClick={() => setPage(p)}>{p}</button>
               ))}
           </div>
            <ul>
                {pagedCountries.map(country => <MemoCountryItemV2 id="by id" country={country} key={country.id}/>)}
            </ul>
        </section>
    )
}


function ListWithIndexPagination() {
    const [ page, setPage ] = useState(0);
    const itemsPerPage = 50;


    const pagedCountries = getCountriesFromRawData.slice(
        page * itemsPerPage,
        itemsPerPage * (page + 1)
    );
    const pages = Array.from(
        Array(Math.ceil(getCountriesFromRawData.length / itemsPerPage)).keys()
    );

    return (
        <section className="grid gap-4">
            <h1>List with id in "index"</h1>
            <h3>Paginated list with id as key</h3>
            <h4>Page: {page}</h4>
            <div className="flex items-center gap-3">
                {pages.map((p) => (
                    <button className="p-3 bg-gray-400" onClick={() => setPage(p)}>{p}</button>
                ))}
            </div>
            <ul>
                {pagedCountries.map((country, index) => <MemoCountryItemV2 id="by id" country={country} key={index}/>)}
            </ul>
        </section>
    )
}

export default function V11() {
    return (
        <article className="grid content-baseline">
            <pre>
          {description}
            </pre>

            {/*<section className="mt-10 grid grid-cols-2">*/}
            {/*    <ListWithID/>*/}
            {/*    <ListWithIndex/>*/}
            {/*</section>*/}

            <section className="mt-10 grid grid-cols-2">
                <ListWithIDPagination/>
                <ListWithIndexPagination/>
            </section>

        </article>
    )

}