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
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
          <NavCard
            title={"Foster"}
            description="provide a temporary home to an animal in need"
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
          <NavCard
            title={"Hire"}
            description="provide a barn/farm for a cat pest control expert"
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
          />
        </div>
      </section>
      <section>
        <Heading label="Latest news" />
        <div className="grid grid-cols-2 gap-6">
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
            title={"Adopted Pitbull Lulu Overcomes Stereotypes"}
            description={"Our beloved senior Pitbull Lulu finally found a family! "}
          />
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB5YjT9Gexc2TjlyMdN7qt6YzO6MPLslQpbjj7OVEfDagIcQ4fTIV7LlxyBC4IjzAyPkzEnvxze9V7mNuqD-9GlPeiMuTdHH_RYwfmR3Dgvb6p-BNMu13CamJcKloYIomBkw5UX9Z0xoUVXsaCr1-po9xX5M_vC5_GACVqzsTGEtyD63GltpmMdYrcv4_Mrc0obVlSlRQiMihg0Uh3p3ahpIVBWMp_Lgjo6xN3Qvw3HbzoTiztFOudspF34b9CTjp-XjNGvlsVEFom4ap8Bw5lmkhUbsnG_vqbsnCIpjI5DU26wzUIVnhv-46swkF8obobBHTdfTmrbXqwu-E0Zl-gn0F3dhvwcOmJrBRd3fviKao2okrG8H7q_WE4ESE4gcQymJi34iUjuu61xNu_V_l2PEpKZzzB5AdhEKBib2-Pdsc0RRhe5d-BqV7-4ovDmgYxM/p.jpeg`}
            title={"Foster Kitten Siblings Bean and Dove Rejoice as Getting Adopted Together"}
            description={"Two adorable kitten siblings brought to us after being found alone on the streets and they both finally found a Forever Home."}
          />
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB6JN-RNXdfhoxA70-RTSb_YDtDjuj-F9aY3RLIiEOxJ_omPhzdQlpMyahNgEt8esJ6OGIfdQ_4b2dD_K7vQ3FIdM7En93xiYTDPKQjWYnYIkAAvBi50oykOxxPQyl0D7HL4sn1uVonhoqiNVOrvBNqhIX-X_6urIp36OZ7GyR_Y0jVhmaErWJMvv0L8yvYCjxcZlkO3u4rWiODeRrRzzx-Cla4HWjfcE5Zf_4gBKLRUB3atGzZpDjCdaGXdnmkBSUVx29vI4rf-a0Fb7mGY9nJEzM52c8BCB6hhVysq0kNq77su9-w8PBdcK6PYuUkPZU20eczJbh516VgAhw1eFXXjcUsmVrVI63K8SPxFXrsSgqPxn3eifTwaY7ot0XuNbV8uVYozM1wTLHDp6CwRxPTDO7GiyQ0f6qLG3wvqMFkfkzeV6E2ty45W3ZhAYk9FkQwT_4hJ941oIlo58Thk79BGuqvLtyGPQ05GpxIYdgV44fUWCwjJDsOQQGOSNw07np0/p.jpeg`}
            title={"Resilient Parrot Momo Finds Home: From Abuse to Love and Happiness"}
            description={"Momo, the Parrot, Finds Love and Healing in His New Forever Home"}
          />
          <Card
            src={`https://previews.dropbox.com/p/thumb/AB7mg7N1zlrXRWgUs023Zhn-d8LmajgtCOtRsryj6ziZ0ZLOVakB9FQNQTG1-JfVkfiPwdaITTUhU9yopw7SOEYkveqfGxpV2pJg4UUR4Pzk1Pp-pNN0q-RAVWU8y9FhiKZV0J76n8-__BzASEmV7atAsIUkuAznCzwJt7j7GQvIq1ez0sT2fJwzQOyRJhMuWMn3O07hytl1AK91blD5fhPRGouhbmsNbcajDZ3XWkdI4dVaIQ_h7zA3P3mtcYAXD38h0WR8fO3WGG7-nKyTsDhP1inBur9FoTGpi6ZnwueZ98wSjbLbHSm6C-nJXRZbCN0u7Id_lVI6s068k-EKKAdd98ZSE1NFy1EQD8HbPLzis8P0LGQGxf9Ze5a_bkNx7o0/p.jpeg`}
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