export default function Civilization({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
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
