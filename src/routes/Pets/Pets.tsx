import { Card } from "../../components/Cards/Card";
import { NavCard } from "../../components/Cards/NavCard";
import { Heading } from "../../components/Heading";
import { useRoutePath } from "../../hooks/useRoutePath";
import { ArrowCard } from "../../components/Cards/ArrowCard";

// @ts-ignore
import Dog from "./../../components/assets/Dog1.jpeg"

// @ts-ignore
import Success1 from "./../../components/assets/success1.jpeg"
// @ts-ignore
import Success2 from "./../../components/assets/success2.jpeg"
// @ts-ignore
import Success3 from "./../../components/assets/success3.jpeg"
// @ts-ignore
import Success4 from "./../../components/assets/success4.jpeg"

export const Pets = () => useRoutePath({
  path: "/pets",
  children: (
    <>
      <section>
        <Heading label={`About adoption\nand foster programs`} />
        <div className="grid grid-cols-2 gap-6">
          <p className="text-sm w-[360px] p-6 pl-0">
            At PawPal, we believe that every animal deserves a loving and permanent home. Our pet adoption and foster care services provide a safe and comfortable environment for animals in need. Adopting a pet not only brings joy to your life but also saves a life.
          </p>
          <p className="text-sm w-[360px] p-6 pl-0">
            Our adoption process is easy and efficient, ensuring that you find the perfect furry companion for your home. We also offer a foster care and working cats programs for those who want to make a difference in an animal's life but are not ready for a full-time commitment. By fostering, you provide a temporary home for an animal in need, helping them to socialize and prepare for their forever home. Contact us today to learn more about our adoption and foster care programs.
          </p>
        </div>
      </section>
      <section>
        <Heading label="Available pets" />
        <div className="grid grid-cols-4 gap-6">
          <NavCard
            title={"Dogs"}
            src={Dog}
          />
          <NavCard
            title={"Cats"}
            src={Dog}
          />
          <NavCard
            title={"Critters"}
            src={Dog}
          />
          <NavCard
            title={"Birds"}
            src={Dog}
          />
        </div>
      </section>
      <section>
        <Heading label="Success stories" />
        <div className="grid grid-cols-2 gap-6">
          <Card
            src={Success1}
            title={`Finding Love at the Center: Noodle's Success Story`}
            description={"Local senior dog Noodle met her forever family last Monday"}
          />
          <Card
            src={Success2}
            title={"A Happy Ending for a Rescued Bird Anthony:"}
            description={"One Family's Journey to Adopting a Feathered Friend"}
          />
          <Card
            src={Success3}
            title={"From Stray to Sweetheart:"}
            description={"A Cat's Journey to Finding a Loving Home."}
          />
          <Card
            src={Success4}
            title={"How Pet Adoption Changed My Life: "}
            description={"Inspiring Stories from Adoptive Pet Parents."}
          />
        </div>
      </section>
      <section>
        <Heading label="Resources" />
        <div className="grid grid-cols-3 gap-6">
          <Card
            title={"The Benefits of Owning a Pet:"}
            description={`Why Having a Furry Friendis Good for Your Health`}
          />
          <Card
            title={"The Pros and Cons of Adopting a Pet:"}
            description={`Is Pet Ownership Right for You?`}
          />
          <Card
            title={"A Beginner's Guide to Pet Care:"}
            description={`Everything You Need to Know Before Bringing Your New Pet Home`}
          />
        </div>
      </section>
      <section className="mt-28">
        <div className="grid grid-cols-2 gap-6">
          <ArrowCard
            title="Home"
            direction="left"
            path="/"
          />
          <ArrowCard
            title="Adoption"
            direction="right"
            path="/pets/adoption"
          />
        </div>
      </section>
    </>
  )
});

export { default as Adoption } from "./Adoption";
export { default as FosterCare } from "./FosterCare";
export { default as Requirements } from "./Requirements";
export { default as WorkingCats } from "./WorkingCats";