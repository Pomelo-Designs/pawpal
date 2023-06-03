import { useRoutePath } from "../../hooks/useRoutePath";
import * as Component from "../../components/Components";
// assets
import Cats from "../../assets/pets-page/cats.png";
import Dogs from "../../assets/pets-page/dogs.png";
import Rodents from "../../assets/pets-page/rodents.png";
import Birds from "../../assets/pets-page/birds.png";
import News1 from "../../assets/pets-page/news1.png";
import News2 from "../../assets/pets-page/news2.png";
import News3 from "../../assets/pets-page/news3.png";
import News4 from "../../assets/pets-page/news4.png";

export default function Pets() {
  return useRoutePath({
    path: "/pets",
    children: (
      <>
        <Component.Section start="col-start-5">
          <Component.Heading label={`About adoption\nand foster programs`} />
          <p className="text-sm w-[360px]">
            At PawPal, we believe that every animal deserves a loving and permanent home. Our pet adoption and foster care services provide a safe and comfortable environment for animals in need. Adopting a pet not only brings joy to your life but also saves a life.
          </p>
          <p className="col-start-6 text-sm w-[360px]">
            Our adoption process is easy and efficient, ensuring that you find the perfect furry companion for your home. We also offer a foster care and working cats programs for those who want to make a difference in an animal's life but are not ready for a full-time commitment. By fostering, you provide a temporary home for an animal in need, helping them to socialize and prepare for their forever home. Contact us today to learn more about our adoption and foster care programs.
          </p>
        </Component.Section>
        <Component.Section start="col-start-5">
          <Component.Heading label="Available pets" />
          <Component.NavCard
            title={"Dogs"}
            image={Dogs}
            classname="h-[201px]"
            cols="col-span-2"
          />
          <Component.NavCard
            title={"Cats"}
            image={Cats}
            classname="h-[201px]"
            cols="col-span-2"
          />
          <Component.NavCard
            title={"Rodents"}
            image={Rodents}
            classname="h-[201px]"
            cols="col-span-2"
          />
          <Component.NavCard
            title={"Birds"}
            image={Birds}
            classname="h-[201px]"
            cols="col-span-2"
          />
        </Component.Section>
        <Component.Section start="col-start-5">
          <Component.Heading label="Success stories" />
          <Component.Card
            image={News1}
            title={`Finding Love at the Center: Noodle's Success Story`}
            description={"Local senior dog Noodle met her forever family last Monday"}
            cols="col-span-4"
          />
          <Component.Card
            image={News2}
            title={"A Happy Ending for a Rescued Bird Anthony"}
            description={"One Family's Journey to Adopting a Feathered Friend"}
            cols="col-span-4"
          />
          <Component.Card
            image={News3}
            title={"From Stray to Sweetheart"}
            description={"A Cat's Journey to Finding a Loving Home."}
            cols="col-span-4"
          />
          <Component.Card
            image={News4}
            title={"How Pet Adoption Changed My Life"}
            description={"Inspiring Stories from Adoptive Pet Parents."}
            cols="col-span-4"
          />
        </Component.Section>
        <Component.Section start="col-start-5">
          <Component.Heading label="Resources" />
          <Component.Card
            title={"The Benefits of Owning a Pet"}
            description={`Why Having a Furry Friendis Good for Your Health`}
            cols="col-span-3"
          />
          <Component.Card
            title={"The Pros and Cons of Adopting a Pet"}
            description={`Is Pet Ownership Right for You?`}
            cols="col-span-3"
          />
          <Component.Card
            title={"A Beginner's Guide to Pet Care"}
            description={`Everything You Need to Know Before Bringing Your New Pet Home`}
            cols="col-span-3"
          />
        </Component.Section>
        <Component.Section>
          <Component.ArrowCard
            title="Home"
            direction="left"
            path="/"
            cols="col-span-5"
          />
          <Component.ArrowCard
            title="Adoption"
            direction="right"
            path="/pets/adoption"
            cols="col-span-5"
          />
        </Component.Section>
      </>
    )
  })
};