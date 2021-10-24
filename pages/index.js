import Link from "next/link";
import React, { useState } from "react";
export async function getStaticProps() {
  const res = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

function Civilization({ data }) {
  const [civilizations, setCivilizations] = useState(data.civilizations);

  const handleSearch = (e) => {
    const search = e.target.value;
    const filtered = data.civilizations.filter((civilization) => {
      return civilization.name.toLowerCase().includes(search.toLowerCase());
    });
    setCivilizations(filtered);
  };
  return (
    <div className="min-w-full min-h-screen bg-blue-200">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-sans font-bold text-center text-gray-800">
          Age Of Empries Civilizations
        </h1>
        <div>
          <input
            onChange={handleSearch}
            className="text-blue-900 my-4 text-xl w-full h-16 text-center shadow-xl"
            type="text"
            placeholder="Search here.."
          />
        </div>
        <div className="bg-gray-800 text-white mt-4">
          {civilizations.map((civilization) => (
            <Link
              key={civilization.id}
              href="/civilization/[id]"
              as={`/civilization/${civilization.id}`}
            >
              <a
                className="flex flex-col w-full items-center text-2xl p-4 border-b-2 border-gray-600 hover:bg-gray-900"
                href=""
              >
                {civilization.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Civilization;
