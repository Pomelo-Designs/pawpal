import { Card } from "../components/Cards/Card";
import { NavCard } from "../components/Cards/NavCard";
import { Heading } from "../components/Heading";

export default function Home() {
  return (
    <>
      <section className="grid col-start-2 grid-cols-11 col-span-full gap-5">
        <div className="grid grid-cols-11 col-span-full gap-5">
          <Heading label="Adoption & Foster" />
          <p className="col-span-4 text-sm w-[360px] p-6 pl-0">
            At our Adoption Center, we offer a wide range of adoption options to suit every lifestyle and preference. Whether you're looking for a furry friend to join your family or a companion for your existing pet, we have a variety of animals to choose from, including cats, dogs, rabbits, and more!
          </p>
        </div>
        <NavCard
          title={"Adopt"}
          description="give a permanent home to an animal in need"
          image="bg-home-adoption h-[305px]"
          classname=""
        />
        <div />
        <NavCard
          title={"Foster"}
          description="provide a temporary home to an animal in need"
          image="bg-home-foster h-[305px]"
          classname=""
        />
        <div />
        <NavCard
          title={"Hire"}
          description="provide a barn/farm for a cat pest control expert"
          image="bg-home-working-cats h-[305px]"
          classname=""
        />
      </section>
      <section className="grid col-start-2 grid-cols-11 col-span-full gap-5">
        <div className="col-span-full">
          <Heading label="Latest news" />
        </div>
        <Card
          image="bg-home-news1"
          title={"Adopted Pitbull Lulu Overcomes Stereotypes"}
          description={"Our beloved senior Pitbull Lulu finally found a family! "}
          cols="col-span-5"
        />
        <Card
          image="bg-home-news2"
          title={"Foster Kitten Siblings Bean and Dove Rejoice as Getting Adopted Together"}
          description={"Two adorable kitten siblings brought to us after being found alone on the streets and they both finally found a Forever Home."}
          cols="col-span-5"
        />
        <Card
          image="bg-home-news3"
          title={"Resilient Parrot Momo Finds Home: From Abuse to Love and Happiness"}
          description={"Momo, the Parrot, Finds Love and Healing in His New Forever Home"}
          cols="col-span-5"
        />
        <Card
          image="bg-home-news4"
          title={"Hugo and Denji Find Forever Home: A Heartwarming Adoption Story"}
          description={"When they were brought to the Adoption Center, the staff immediately noticed their special bond and knew they needed to be adopted together."}
          cols="col-span-5"
        />
      </section>
      <section className="grid col-start-2 grid-cols-11 col-span-full gap-5">
        <div className="col-span-full">
          <Heading label="Resources" />
        </div>
        <Card
          title={"Claws out!"}
          description={`Reasons Why Your Cat Seems Angry All the Time...`}
          cols="col-span-3"
        />
        <Card
          title={"How much space do rats need?"}
          description={`A Comprehensive Guide to a Perfect Rodent Home`}
          cols="col-span-3"
        />
        <Card
          title={"Best toys for a puppy with chewy taste"}
          description={`Your Puppy Keeps Chewing on Everything in Their Sight?`}
          cols="col-span-3"
        />
      </section>
    </>
  )
}