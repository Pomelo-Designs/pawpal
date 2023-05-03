import { Card } from "../../components/Cards/Card";
import { NavCard } from "../../components/Cards/NavCard";
import { Heading } from "../../components/Heading";
import { ArrowCard } from "../../components/Cards/ArrowCard";
import { useRoutePath } from "../../hooks/useRoutePath";

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

export const Services = () => useRoutePath({
  path: "/services",
  children: (
    <>
      <section>
        <Heading label={`About our services`} />
        <div className="grid grid-cols-2 gap-6">
          <p className="text-sm w-[360px] p-6 pt-0 pl-0 whitespace-pre-line">
            {`In addition to providing a loving home for homeless pets, Pawpal also offers a range of services that can help pet owners take better care of their furry friends.\n We provide veterinarian care, pet training, pet grooming, and licensing services to ensure that our animals and your pets are healthy and happy. With our help, you can provide your furry friend with the care and attention they deserve.`}
          </p>
          <p className="text-sm w-[360px] p-6 pt-0 pl-0">
            At Pawpal Adoption Center, we believe in providing the best possible care for our furry friends. That's why we offer a range of services to ensure that your new pet is healthy, happy, and well-behaved. Our on-site veterinarians provide comprehensive medical care, from routine check-ups to emergency procedures. Our pet trainers work with each animal to create a personalized training plan, ensuring that they are well-behaved and obedient. And our professional groomers will keep your pet looking and feeling their best. Plus, we'll take care of all the necessary licensing to ensure that your new pet is legal and properly registered. Adopting a pet from Pawpal means giving an animal in need a second chance at life, and we're here to help you every step of the way.
          </p>
        </div>
      </section>
      <section>
        <Heading label="What we offer" />
        <div className="grid grid-cols-2 gap-6">
          <NavCard
            title={"Veterinary care"}
            src={Dog}
          />
          <NavCard
            title={"Chip my pet"}
            src={Dog}
          />
          <NavCard
            title={"License my pet"}
            src={Dog}
          />
          <NavCard
            title={"Grooming services"}
            src={Dog}
          />
        </div>
      </section>
      <section className="mt-28">
        <div className="grid grid-cols-2 gap-6">
          <ArrowCard
            title="Requirements: Working Cats"
            direction="left"
            path="/"
          />
          <ArrowCard
            title="Vet care"
            direction="right"
            path="/pets/adoption"
          />
        </div>
      </section>
    </>
  )
});

export { default as Chipping } from "./Chipping";
export { default as Grooming } from "./Grooming";
export { default as Licensing } from "./Licensing";
export { default as VetCare } from "./VetCare";