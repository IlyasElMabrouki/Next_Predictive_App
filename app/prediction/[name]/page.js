async function getGender(name) {
  const res = await fetch(`https://api.genderize.io/?name=${name}`).then(
    (res) => res.json()
  );
  return res;
}

async function getNationality(name) {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`).then(
    (res) => res.json()
  );
  return res;
}

async function getAge(name) {
  const res = await fetch(`https://api.agify.io/?name=${name}`).then((res) =>
    res.json()
  );
  return res;
}

export default async function NamePage({ params: { name } }) {
  const genderData = getGender(name);
  const ageData = getAge(name);
  const nationalityData = getNationality(name);

  //Get the totality of object
  const [gender, age, country] = await Promise.all([
    genderData,
    ageData,
    nationalityData,
  ]);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div
        className="flex flex-col gap-2 items-center w-full max-w-sm shadow-md rounded-lg p-2"
      >
        <p>Age : <span className="text-xl">{age?.age}</span></p>
        <p>Gender : <span className="text-xl">{gender?.gender}</span></p>
        <p>Country : <span className="text-xl">{country?.country[0]?.country_id}</span></p>
      </div>
    </div>
  );
}
