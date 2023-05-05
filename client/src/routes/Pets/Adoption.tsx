import { Heading } from "../../components/Heading";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ANIMALS } from "../../queries/Adoption";
import { useState } from "react";


export default function Adoption() {

  const [gender, setGender] = useState<string | null>(null);
  const [species, setSpecies] = useState<string | null>(null);

  const input = {
    "gender": gender,
    "species": species,
    "livedWith": null,
    "sortByAge": "desc",
    "sortBySize": "asc",
    "offset": 0,
    "limit": 3
  }

  const { loading, data, error } = useQuery(QUERY_ALL_ANIMALS, {
    variables: { input }
  });

  if (loading) return <h1>Data loading...</h1>;
  if (error) console.log(error);
  if (data) console.log(data);

  return (
    <>
      <section>
        <Heading label={`Available pets\nfor adoption`} />


        <span>Gender</span>
        <div className="flex flex-row gap-4">
          <button onClick={() => setGender(null)}>All</button>
          <button onClick={() => setGender("male")}>Male</button>
          <button onClick={() => setGender("female")}>Female</button>
        </div>

        <span>Species</span>
        <div className="flex flex-row gap-4">
          <button onClick={() => setSpecies(null)}>All</button>
          <button onClick={() => setSpecies("dog")}>Dog</button>
          <button onClick={() => setSpecies("cat")}>Cat</button>
          <button onClick={() => setSpecies("critter")}>Critter</button>
          <button onClick={() => setSpecies("bird")}>Bird</button>
        </div>


        <div className="grid grid-cols-2 gap-4">
          {data &&
            data.animals.map((animal: any) => {
              console.log('animal : ', animal);
              return (
                <Card
                  data={animal}
                  key={animal.id}
                />
              )
            })}
        </div>

      </section>
    </>
  );
}

const Card = ({ data }: any) => {
  return (
    <div className="flex flex-col h-64 w-64 rounded-xl bg-pink-300">
      <div className="h-[72px] flex flex-row justify-between">
        <div className="pt-2.5 pl-4">
          <h4 className="text-xl">{data.name}</h4>
          <span className="text-sm font-medium color-[#534342]">{data.age} years</span>
        </div>
        <span className="material-symbols-rounded self-center pr-4" 
          style={{fontSize: "32px", color: "#CE4374"}}>favorite</span>
      </div>
    </div>
  )
}