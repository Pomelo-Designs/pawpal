import { useMutation } from "@apollo/client";
import { useState } from "react";
import { MUTATE_ADOPTION_BY_ID } from "../../queries/Adoption";

export const AnimalCard = ({ data, mutation }: any) => {
  return (
    <div className="flex flex-col h-[272px] w-full rounded-xl bg-pink-300">
      <div className="h-[72px] flex flex-row justify-between">
        <div className="pt-2.5 pl-4">
          <h4 className="text-xl">{data.name}</h4>
          <span className="text-sm font-medium color-[#534342]">{data.age} years</span>
        </div>
        <Like
          data={data}
          mutation={mutation}
        />
      </div>
      <img
        className="rounded-b-xl"
        style={{ height: "200px", width: "100%" }} src={data.data} />
    </div>
  )
}

const Like = ({ data, handleInput, mutation }: any) => {
  const [liked, setLiked] = useState(data.liked);
  const [mutateFunction, { loading, error }] = useMutation(mutation());

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