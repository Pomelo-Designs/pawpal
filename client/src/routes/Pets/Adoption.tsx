import { Heading, SubHeading } from "../../components/Heading";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_ADOPTIONS, MUTATE_ADOPTION_BY_ID } from "../../queries/Adoption";
import { useState } from "react";

export default function Adoption() {
  const [input, setInput] = useState({
    // "offset": 0,
    // "limit": 3,
    gender: null,
    species: null,
    livedWith: null,
    age: null,
    sortByAge: null,
    sortBySize: "DESC"
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


        <SubHeading label={`By gender`} />
        <div className="flex flex-row gap-4">
          {/* <button onClick={() => handleInput({ gender: null })}>All</button>
          <button onClick={() => handleInput({ gender: "m" })}>Male</button>
          <button onClick={() => handleInput({ gender: "f" })}>Female</button> */}
          <Chip
            click={() => handleInput({ gender: null })}
            label="All"
            input={input.gender}
          />
          <Chip
            click={() => handleInput({ gender: "m" })}
            label="Male"
            input={input.gender}
          />
            <Chip
            click={() => handleInput({ gender: "f" })}
            label="Female"
            input={input.gender}
          />
        </div>

        <SubHeading label={`Lived with`} />
        <div className="flex flex-row gap-6">
          <Chip
            click={() => handleInput({ livedWith: null })}
            label="All"
            input={input.livedWith}
          />
           <Chip
            click={() => handleInput({ livedWith: "children" })}
            label="Children"
            input={input.livedWith}
          />
           <Chip
            click={() => handleInput({ livedWith: "animals" })}
            label="Animals"
            input={input.livedWith}
          />
        </div>

        <SubHeading label={`By species`} />
        <div className="flex flex-row gap-6">
          <Chip
            click={() => handleInput({ species: null })}
            label="All"
            input={input.species}
          />
          <Chip
            click={() => handleInput({ species: "dog" })}
            label="Dogs"
            input={input.species}
          />
          <Chip
            click={() => handleInput({ species: "cat" })}
            label="Cats"
            input={input.species}
          />
          <Chip
            click={() => handleInput({ species: "critter" })}
            label="Critters"
            input={input.species}
          />
          <Chip
            click={() => handleInput({ species: "bird" })}
            label="Birds"
            input={input.species}
          />
        </div>


        <div className="grid grid-cols-3 gap-6">
          {data &&
            data.adoptions.map((animal: any) => {
              console.log('animal : ', animal);
              return (
                <Card
                  data={animal}
                  key={animal.id}
                  handleInput={handleInput}
                />
              )
            })}
        </div>

      </section>
    </>
  );
}

const Chip = ({ click, label, input }: any) => {

  const style = () => {
    if (input === null && label === "All") return "bg-[#FFDBCC] border-none";
    else if (label.toLowerCase().includes(input)) return "bg-[#FFDBCC] border-none";
    else return null;
  }

  return (
    <button
      onClick={click}
      className={`${style()} flex items-center justify-center h-8 w-[72px] border-[#857371] border-[1px] rounded-xl`}>
      <span className="text-xs color-[#534342] font-medium">{label}</span>
    </button>
  )
}

const Card = ({ data }: any) => {
  return (
    <div className="flex flex-col h-[272px] w-full rounded-xl bg-pink-300">
      <div className="h-[72px] flex flex-row justify-between">
        <div className="pt-2.5 pl-4">
          <h4 className="text-xl">{data.name}</h4>
          <span className="text-sm font-medium color-[#534342]">{data.age} years</span>
        </div>
        <Like
          data={data}
        />
      </div>
      <img
        className="rounded-b-xl"
        style={{ height: "200px", width: "100%" }} src={data.data} />
    </div>
  )
}

const Like = ({ data, handleInput }: any) => {
  const [liked, setLiked] = useState(data.liked);
  const [mutateFunction, { loading, error }] = useMutation(MUTATE_ADOPTION_BY_ID);

  const variables = {
    id: data.id,
    liked: liked,
  }

  const handleClick = () => {
    setLiked(!liked);
    mutateFunction({ variables: { variables } });
  };

  if (error) console.log(error);

  console.log(data.liked)

  const iconStyle = () => {
    if (liked === true) return "material-symbols-rounded material-active";
    else return "material-symbols-rounded";
  }

  return (
    <button onClick={handleClick}>
      <span className={`${iconStyle()} self-center pr-4`}
        style={{ fontSize: "32px", color: "#CE4374" }}>favorite</span>
    </button>
  )
}