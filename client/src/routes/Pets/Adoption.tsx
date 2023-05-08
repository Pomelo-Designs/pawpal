import { Heading, SubHeading } from "../../components/Heading";
import { useState } from "react";
import { ArrowCard } from "../../components/Cards/ArrowCard";
import { Card } from "../../components/Cards/Card";
import { Chip } from "../../components/Buttons/Chip";
import { Data } from "../../components/Data";

export default function Adoption() {
  const [input, setInput] = useState({
    offset: 0,
    limit: 2,
    gender: null,
    species: null,
    livedWith: null,
    age: null,
    // liked: null,
    sortByAge: null,
    sortBySize: "DESC"
  });

  const handleInput = (newInput: any) => {
    const updatedInput = {
      ...input,
      ...newInput
    };
    setInput(updatedInput);
  };

  return (
    <>
      <section>
        <Heading label={`Available pets\nfor adoption`} />
        <div className="grid grid-cols-3 gap-6 pb-12">
          <div className="col-span-2">
            <SubHeading label={`By species`} />
            <div className="flex flex-row gap-6">
              <Chip
                click={() => handleInput({ species: null })}
                label="All"
                input={input.species}
              />
              <Chip
                click={() => handleInput({ species: "DOGS" })}
                label="Dogs"
                input={input.species}
              />
              <Chip
                click={() => handleInput({ species: "CATS" })}
                label="Cats"
                input={input.species}
              />
              <Chip
                click={() => handleInput({ species: "CRITTERS" })}
                label="Critters"
                input={input.species}
              />
              <Chip
                click={() => handleInput({ species: "BIRDS" })}
                label="Birds"
                input={input.species}
              />
            </div>
          </div>
          <div className="col-span-1">
            <SubHeading label={`By gender`} />
            <div className="flex flex-row gap-4">
              <Chip
                click={() => handleInput({ gender: null })}
                label="All"
                input={input.gender}
              />
              <Chip
                click={() => handleInput({ gender: "MALE" })}
                label="Male"
                input={input.gender}
              />
              <Chip
                click={() => handleInput({ gender: "FEMALE" })}
                label="Female"
                input={input.gender}
              />
            </div>
          </div>
          <div className="col-span-2">
            <SubHeading label={`Filter by`} />
            <div className="flex flex-row gap-6">
              {/* <Chip
                click={() => input.liked === false ? handleInput({ liked: true }) : input.liked === true && handleInput({ liked: false })}
                label="Liked"
                input={input.liked}
              /> */}
            </div>
          </div>
          <div className="col-span-1">
            <SubHeading label={`Lived with`} />
            <div className="flex flex-row gap-6">
              <Chip
                click={() => handleInput({ livedWith: null })}
                label="All"
                input={input.livedWith}
              />
              <Chip
                click={() => handleInput({ livedWith: "CHILDREN" })}
                label="Children"
                input={input.livedWith}
              />
              <Chip
                click={() => handleInput({ livedWith: "ANIMALS" })}
                label="Animals"
                input={input.livedWith}
              />
            </div>
          </div>
        </div>
      </section>
      <Data
        input={input}
        setInput={setInput}
        handleInput={handleInput}
      />
      <section>
        <Heading label="Resources" />
        <div className="grid grid-cols-3 gap-6">
          <Card
            title={"The Ultimate Guide to Pet Adoption"}
            description={`Tips and Tricks for Finding Your Perfect Match`}
          />
          <Card
            title={"The Pros and Cons of Adopting a Dog"}
            description={`Is a Canine Companion Right for You?`}
          />
          <Card
            title={"The Dos and Don'ts of Adopting a Pet"}
            description={`Common Mistakes to Avoid`}
          />
        </div>
      </section>
      <section className="mt-28">
        <div className="grid grid-cols-2 gap-6">
          <ArrowCard
            title="Our pets"
            direction="left"
            path="/pets"
          />
          <ArrowCard
            title="Foster care"
            direction="right"
            path="/pets/foster-care"
          />
        </div>
      </section>
    </>
  );
}