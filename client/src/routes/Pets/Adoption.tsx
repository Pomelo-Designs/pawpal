import { Heading } from "../../components/Heading";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ADOPTIONS } from "../../queries/Adoption";
import { useState } from "react";

export default function Adoption() {
  const [input, setInput] = useState({
    // "offset": 0,
    // "limit": 3,
    "gender": null,
    "species": null,
    "livedWith": null,
    "age": null,
    "sortByAge": null,
    "sortBySize": "DESC"
  })

  const handleInput = (newInput: any) => {
    const updatedInput = {
      ...input,
      ...newInput
    };
    setInput(updatedInput);
  };

  const { loading, data, error } = useQuery(QUERY_ALL_ADOPTIONS, {
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
          <button onClick={() => handleInput({ gender: null })}>All</button>
          <button onClick={() => handleInput({ gender: "male" })}>Male</button>
          <button onClick={() => handleInput({ gender: "female" })}>Female</button>
        </div>

        <span>Species</span>
        <div className="flex flex-row gap-4">
          <button onClick={() => handleInput({ species: null })}>All</button>
          <button onClick={() => handleInput({ species: "dog" })}>Dog</button>
          <button onClick={() => handleInput({ species: "cat" })}>Cat</button>
          <button onClick={() => handleInput({ species: "critter" })}>Critter</button>
          <button onClick={() => handleInput({ species: "bird" })}>Bird</button>
        </div>


        <div className="grid grid-cols-2 gap-4">
          {data &&
            data.adoptions.map((animal: any) => {
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
          style={{ fontSize: "32px", color: "#CE4374" }}>favorite</span>
      </div>
    </div>
  )
}