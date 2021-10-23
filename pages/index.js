import Link from "next/link";

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
  const civilizations = data.civilizations;
  return (
    <ul>
      {civilizations &&
        civilizations.map((civilization) => (
          <li key={civilization.id}>
            <Link
              href="/civilization/[id]"
              as={`/civilization/${civilization.id}`}
            >
              <a>{civilization.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default Civilization;
