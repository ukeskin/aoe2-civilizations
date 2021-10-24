export default function Civilization({ data }) {
  return (
    <div className="min-w-full min-h-screen bg-blue-200">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-sans font-bold text-center text-gray-800">
          {data.name}
        </h1>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold border-l-8 border-blue-800 pl-2">
            Expansion: {data.expansion}
          </h2>
          <h2 className="text-2xl font-semibold border-l-8 border-blue-800 pl-2">
            Army Type: {data.army_type}
          </h2>
          <h2 className="text-2xl font-semibold border-l-8 border-blue-800 pl-2">
            Team Bonus: {data.team_bonus}
          </h2>
          <ul>
            <h2 className="text-2xl font-semibold mb-2 border-l-8 border-blue-800 pl-2">
              Civilazation Bonus
            </h2>
            {data.civilization_bonus.map((bonus) => (
              <li className="text-blue-900 text-lg list-disc list-inside">
                {bonus}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
