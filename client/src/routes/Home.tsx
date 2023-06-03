import * as Component from "../components/Components";
// assets
import Adopt from "../assets/home-page/adopt.png";
import Foster from "../assets/home-page/foster.png";
import Hire from "../assets/home-page/hire.png";
import News1 from "../assets/home-page/news1.png";
import News2 from "../assets/home-page/news2.png";
import News3 from "../assets/home-page/news3.png";
import News4 from "../assets/home-page/news4.png";

export default function Home() {
  return (
    <>
      <Component.Section cols="grid-cols-11" start="col-start-2">
        <div className="col-span-full grid grid-cols-11">
          <Component.Heading label="Adoption & Foster" cols="col-span-4" />
          <p className="col-span-4 text-sm w-[360px]">
            At our Adoption Center, we offer a wide range of adoption options to suit every lifestyle and preference. Whether you're looking for a furry friend to join your family or a companion for your existing pet, we have a variety of animals to choose from, including cats, dogs, rabbits, and more!
          </p>
        </div>
      </Component.Section>
      <Component.Section cols="grid-cols-11" start="col-start-2">
        <Component.NavCard
          title={"Adopt"}
          description="give a permanent home to an animal in need"
          image={Adopt}
          classname="h-[312px]"
          cols="col-span-3"
        />
        <div />
        <Component.NavCard
          title={"Foster"}
          description="provide a temporary home to an animal in need"
          image={Foster}
          classname="h-[312px]"
          cols="col-span-3"
        />
        <div />
        <Component.NavCard
          title={"Hire"}
          description="provide a barn/farm for a cat pest control expert"
          image={Hire}
          classname="h-[312px]"
          cols="col-span-3"
        />
      </Component.Section>
      <Component.Section cols="grid-cols-11" start="col-start-2">
        <Component.Heading label="Latest news" />
        <Component.Card
          image={News1}
          title={"Adopted Pitbull Lulu Overcomes Stereotypes"}
          description={"Our beloved senior Pitbull Lulu finally found a family! "}
          cols="col-span-5"
        />
        <Component.Card
          image={News2}
          title={"Foster Kitten Siblings Bean and Dove Rejoice as Getting Adopted Together"}
          description={"Two adorable kitten siblings brought to us after being found alone on the streets and they both finally found a Forever Home."}
          cols="col-span-5"
        />
        <Component.Card
          image={News3}
          title={"Resilient Parrot Momo Finds Home: From Abuse to Love and Happiness"}
          description={"Momo, the Parrot, Finds Love and Healing in His New Forever Home"}
          cols="col-span-5"
        />
        <Component.Card
          image={News4}
          title={"Hugo and Denji Find Forever Home: A Heartwarming Adoption Story"}
          description={"When they were brought to the Adoption Center, the staff immediately noticed their special bond and knew they needed to be adopted together."}
          cols="col-span-5"
        />
      </Component.Section>
      <Component.Section cols="grid-cols-11" start="col-start-2">
        <Component.Heading label="Resources" />
        <Component.Card
          title={"Claws out!"}
          description={`Reasons Why Your Cat Seems Angry All the Time...`}
          cols="col-span-3"
        />
        <Component.Card
          title={"How much space do rats need?"}
          description={`A Comprehensive Guide to a Perfect Rodent Home`}
          cols="col-span-3"
        />
        <Component.Card
          title={"Best toys for a puppy with chewy taste"}
          description={`Your Puppy Keeps Chewing on Everything in Their Sight?`}
          cols="col-span-3"
        />
      </Component.Section>
    </>
  )
}