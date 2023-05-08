import { Heading, SubHeading } from "../../components/Heading";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_ADOPTIONS, MUTATE_ADOPTION_BY_ID } from "../../queries/Adoption";
import { useEffect, useState } from "react";
import { ArrowCard } from "../../components/Cards/ArrowCard";
import { Card } from "../../components/Cards/Card";
import { ArrowButton } from "../../components/Buttons/ArrowButton";

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
        <div className="text-xs font-medium color-[#201A18] p-5 pl-0">
          Number pets available
        </div>
        <Data
          data={data}
          error={error}
          loading={loading}
          handleInput={handleInput}
        />
        {data?.adoptions && <Pagination
          data={data}
          input={input}
          setInput={setInput}
        />}

      </section>
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

const Pagination = ({ data, input, setInput }: any) => {
  const [offset, setOffset] = useState(0);

  const totalCount = data.adoptions.totalCount;

  const onPageChange = (newPageNumber: number) => {
    const newOffset = (newPageNumber - 1) * itemsPerPage;
    setOffset(newOffset);
    setInput({ ...input, offset: newOffset })
  };

  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const itemsPerPage = input.limit;
  const totalItems = totalCount;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.floor(offset / itemsPerPage) + 1;


  useEffect(() => {
    setIsFirstPage(currentPage === 1);
    setIsLastPage(currentPage === totalPages);
  }, [currentPage, totalPages]);

  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset + itemsPerPage >= totalItems;

  return (
    <div className="p-6 flex flex-row gap-6 items-center">
      <ArrowButton
        click={() => onPageChange(currentPage - 1)}
        disabled={isPrevDisabled}
        classes="rotate-180 disabled:bg-[#1c1b1f1f]"
      />
      <span>{currentPage}&nbsp;/&nbsp;{totalPages}</span>
      <ArrowButton
        click={() => onPageChange(currentPage + 1)}
        disabled={isNextDisabled}
        classes="disabled:bg-[#1c1b1f1f]"
      />
    </div>
  );

}

const Data = ({ data, error, loading, handleInput }: any) => {
  if (loading) return <h1>Data loading...</h1>;
  if (error) return <h1>Error</h1>;
  else return (
    <div className="grid grid-cols-3 gap-6">
      {data &&
        data.adoptions.adoptions.map((animal: any) => {
          return (
            <AnimalCard
              data={animal}
              key={animal.id}
              handleInput={handleInput}
            />
          )
        })}
    </div>
  )
}

const Chip = ({ click, label, input }: any) => {

  const bool = () => {
    if (input === null && label === "All") return true;
    if (typeof input === 'string') {
      if (label.toLowerCase() === input.toLowerCase()) return true;
    }
    else return false;
  }

  const style = () => {
    switch (true) {
      case (bool() === true): {
        return "bg-[#FFDBCC] border-none hover:color-[#351000] hover:bg-[#EDCBBF]"
      }
    }
  }

  return (
    <button
      onClick={click}
      className={`${style()} flex items-center justify-center h-8 w-[72px] border-[#857371] border-[1px] rounded-xl`}>
      <span className="text-xs color-[#534342] font-medium">{label}</span>
    </button>
  )
}

const AnimalCard = ({ data }: any) => {
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