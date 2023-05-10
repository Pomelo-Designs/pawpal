import { Card } from "../../components/Cards/Card";
import { NavCard } from "../../components/Cards/NavCard";
import { Heading } from "../../components/Heading";
import { useRoutePath } from "../../hooks/useRoutePath";
import { ArrowCard } from "../../components/Cards/ArrowCard";

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
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
          <NavCard
            title={"Cats"}
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
          <NavCard
            title={"Critters"}
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
          <NavCard
            title={"Birds"}
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
        </div>
      </section>
      <section>
        <Heading label="Success stories" />
        <div className="grid grid-cols-2 gap-6">
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB6YkgVdXqnLlFgACB2Lonl30JqQ_WN8o9xPDHvbeTG1mfK5a77HiP7XXxgWSTMauqxSLdS8qvnltAlO2d7LmOba5T7nijW7Z2YxzixutL5i9LzGk7hUSx0GsNz3jVsYYN585R3FMOjXeLNueMDmviAaM4jACzuvpYAzRPOW3req1zzzm4kpegQFt5cZnGyt1fFU6Zd-jrF3OG4320zn_yyucIcX17qsgk19W_OX9k97tyIaJfnHhSaq8EE7JNMC75kWyE2qrOsECaxN9RNqVYy2yP_g8gr-rd_tWXnSdaillC1jLhTyuXtGMsH3BQeUNIybVZ70f17tCzFYseHhoXqOKbEmj_Oqp1OrPjLeA7ucBrU_hy-zbXgWETNC-2q1lYM8ZclFGu0DX6dHqheHLDulg7Pi2CWpFLtM2elEbtaV_t5pF5P5P1AZ5WCno-B-Goy-RzkSU-eV6J35G9zsVygP/p.jpeg`}
            title={`Finding Love at the Center: Noodle's Success Story`}
            description={"Local senior dog Noodle met her forever family last Monday"}
          />
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB6RPs-54_uJDVj5Woyppr7ikRPh9DypDag5hX-Uqe-jv-E63HKVOWOTJOMaFDwksAEpA1X8rhWAVjuvOA2EiCoFWgLjhhgrQutZOIRNPlu3ijaql95rOrX5vHiTKYwA_1cDRzR02O_NaEktTsJgnJKLgkkRkxLtWwnfThUV0Q0zPzU3oJbr8boB9HMnUSSCgWUx6X_bBXQxVhNhQ3sLcBlp8_dZd-uDMV5tqG19nz5zsIOMt5ymQ2DylqdXj_EdOsBtlGCa8EGiwm-BKBZKX7bk6elLQ3wZZy_DTGL1pGaqiXnBtFlQaV3wz06NEFWVFSbYh6Q5zFs2GQ9idE6M-0qRgNGvFIS8lhV_J9nuX9JnJXcM7c1R6McQ1gZYn0lRsJE/p.jpeg`}
            title={"A Happy Ending for a Rescued Bird Anthony:"}
            description={"One Family's Journey to Adopting a Feathered Friend"}
          />
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB6kPM6zFOf__w0S_JSmMXRLbkKiUC-8irE8XwpfOW9VXCLdLRZ2FJ2Vdf0FIz4jUAloxVdtYR_p9awnSMbtC4llZ36RlVaq28B286a6KJPpK_3YjQAhKfvRxVbmKLbZ7T6NPsCfWG3lK56UdijUpWjLAhFRnnJ8BaHqcD8XuLV7uvheccfQnTUoMB57UteVhNcbwpeNzyTnXq1D3PWr7c4U9FLkqByikKf_RUsi_CC9zLf74-mOOnBB5ff7vv-gc4-Xf1B9fNLAR8Aq4p9Th3O-n9Tf_1KDRrx-h7PUBUQUVnYRb0Zfpt06NWl3hR_V-I7eq3USxoGWn5uY7053q2ni269kMJunV8fg03yAFqaw1MVDKMGmTvuJmz3DRCcSm7RrHvQYnxAb-D1zE6Iw2SzSP8m2v-a1UttuB8tA7DJ-VWiEd9_ZZ1efJlNEV8B5R9CLYMroY4GnCvT4tk5xh3nf5UpIL-e3EKleHixph5RwIH-inyT-AlvmCcrjt3liFM8/p.jpeg`}
            title={"From Stray to Sweetheart:"}
            description={"A Cat's Journey to Finding a Loving Home."}
          />
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB6_lDcVUkMG6Wv7-Zu9oJfWhjS9NvkJTuI96M_ZK8GlAEwkMU8f72pfecw7HZuFx7ZH5pcwlnL7Zp4ut4Qb1Gj2C2LZ_9rPmRZitd2A5kEV7T05-tqCCAl7AYDfTyIJPcpBXSMcOrtnRwetH82TRx2RFLtSKZtuB9rltmsxN2or2CYyQMsE_ncYsqwLC7hTattjLjM4UGiruUVkNYwDnSD8RPJLFXeFjMHhXZsVOsg6Saq6Qx3BXwnst40hlD9aA_3RFQ2JoEWjYyYcVzfS8tNZCougnrqSnyHYkY0DOek8OEx9X2lMwSi1hSxn008QLyvWQs5HKxWyjejmQ7kiAICJrmF4ihrU9zKMzNYpn2cgKqc1Qu4q2gkxbEP9UHHScyEy0-yHVJjEcMVSh3_ZR7_MHCbu09xxJ9UsM0Awvk4WlAcszsiaq6oF2tWM9wUUezWWF17sZR2B1tbtoUo0mgj4Wl6VOCqAaT_r8CBbDxnYUelNoyGxdOryUAo4AsJjOjs/p.jpeg`}
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
export { default as General } from "./General";
export { default as StepByStep } from "./StepByStep";