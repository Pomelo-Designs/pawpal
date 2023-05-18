import { Card } from "../components/Cards/Card";
import { NavCard } from "../components/Cards/NavCard";
import { Heading } from "../components/Heading";

export default function Home() {
  return (
    <>
      <section>
        <Heading label="Adoption & Foster" />
        <p className="text-sm w-[360px] p-6 pl-0">
          At our Adoption Center, we offer a wide range of adoption options to suit every lifestyle and preference. Whether you're looking for a furry friend to join your family or a companion for your existing pet, we have a variety of animals to choose from, including cats, dogs, rabbits, and more!
        </p>
        <div className="grid grid-cols-3 gap-6">
          <NavCard
            title={"Adopt"}
            description="give a permanent home to an animal in need"
            image="bg-home-adoption h-[305px]"
          />
          <NavCard
            title={"Foster"}
            description="provide a temporary home to an animal in need"
            image="bg-home-foster h-[305px]"
          />
          <NavCard
            title={"Hire"}
            description="provide a barn/farm for a cat pest control expert"
            image="bg-home-working-cats h-[305px]"
          />
        </div>
      </section>
      <section>
        <Heading label="Latest news" />
        <div className="grid grid-cols-2 gap-6">
          <Card
            image="bg-home-news1"
            title={"Adopted Pitbull Lulu Overcomes Stereotypes"}
            description={"Our beloved senior Pitbull Lulu finally found a family! "}
          />
          <Card
            image="bg-home-news2"
            title={"Foster Kitten Siblings Bean and Dove Rejoice as Getting Adopted Together"}
            description={"Two adorable kitten siblings brought to us after being found alone on the streets and they both finally found a Forever Home."}
          />
          <Card
            image="bg-home-news3"
            title={"Resilient Parrot Momo Finds Home: From Abuse to Love and Happiness"}
            description={"Momo, the Parrot, Finds Love and Healing in His New Forever Home"}
          />
          <Card
            image="bg-home-news4"
            title={"Hugo and Denji Find Forever Home: A Heartwarming Adoption Story"}
            description={"When they were brought to the Adoption Center, the staff immediately noticed their special bond and knew they needed to be adopted together."}
          />
        </div>
      </section>
      <section>
        <Heading label="Resources" />
        <div className="grid grid-cols-3 gap-6">
          <Card
            title={"Claws out!"}
            description={`Reasons Why Your Cat Seems Angry All the Time...`}
          />
          <Card
            title={"How much space do rats need?"}
            description={`A Comprehensive Guide to a Perfect Rodent Home`}
          />
          <Card
            title={"Best toys for a puppy with chewy taste"}
            description={`Your Puppy Keeps Chewing on Everything in Their Sight?`}
          />
        </div>
      </section>
    </>
  )
}