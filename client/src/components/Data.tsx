import { useQuery } from "@apollo/client";
import { QUERY_ALL_ADOPTIONS } from "../queries/Adoption";
import { AnimalCard } from "./Cards/AnimalCard";
import { Pagination } from "./Pagination";
import { useLocation } from "react-router-dom";

export const Data = ({ input, setInput, handleInput }: any) => {
  const location = useLocation();

  const query = () => {
    if (location.pathname === "/pets/Adoption") return QUERY_ALL_ADOPTIONS;
    else return QUERY_ALL_ADOPTIONS;
  }

  const { loading, data, error } = useQuery(query(), {
    variables: { input }
  });

  return (
    <section>
      {data &&
        <div className="text-xs font-medium color-[#201A18] p-5 pl-0">
          Number of pets available&nbsp;:&nbsp;{data?.adoptions?.totalCount}
        </div>
      }
      <div className="grid grid-flow-row grid-cols-3 gap-6">
        <Cards
          data={data}
          error={error}
          loading={loading}
          handleInput={handleInput}
        />
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-6">
        <Pagination
          data={data}
          input={input}
          setInput={setInput}
        />
      </div>
    </section>
  );
}

export const Cards = ({ data, error, loading, handleInput }: any) => {
  if (loading) return <h1>Data loading...</h1>;
  if (error) return <h1>Error</h1>;
  else return (
    <>
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
    </>
  )
}