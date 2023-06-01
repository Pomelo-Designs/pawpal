import * as Component from "../components/Components";
import { useRoutePath } from "../hooks/useRoutePath";

export default function Services() {

  return useRoutePath({
    path: "/services",
    children: (
      <>
        <section>
          <Component.Heading label={`About our services`} />
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
          <Component.Heading label="What we offer" />
          <div className="grid grid-cols-2 gap-6">
            <Component.NavCard
              title={"Veterinary care"}
              src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
            />
            <Component.NavCard
              title={"Chip my pet"}
              src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
            />
            <Component.NavCard
              title={"License my pet"}
              src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
            />
            <Component.NavCard
              title={"Grooming services"}
              src={`https://previews.dropbox.com/p/thumb/AB4TtsUU6FETdXVuCGAcGx_TCEEJgFtUuZQ_z6LnL95dcpAaL5XbuhuP3K5-irplKQWZmTYNGtD2L81N6PTTY3hSq3fNa8d58rw3Udh9i3qXFI8SF-rKjKGR1wlHya-CqO1yNwA85f80DP6BGAjMJvzIKEwFHzJi4ji8bD35CiqkwIwhSfQj3yaCi_QvweMZa-EBweffhP8Socl6mnDqMFO6b0CZjb-hwlSBhdtoMpXVc-fpFgOPplCXKMbtvLY9cez2nbQIkjGgUbN44gwR2uZ-VZuQIB0Di-M_KM4I20i_WHwj4Vb4ZuLc7m9IoJIhG6x1YQoZQb6d9RaywzQfIP0FZsGHISuhaDXLMZLXL7GB-tKIp-Lc5wTGMEHHIsFa5wc/p.jpeg`}
            />
          </div>
        </section>
        <section className="mt-28">
          <div className="grid grid-cols-2 gap-6">
            <Component.ArrowCard
              title="Requirements: Working Cats"
              direction="left"
              path="/"
            />
            <Component.ArrowCard
              title="Vet care"
              direction="right"
              path="/pets/adoption"
            />
          </div>
        </section>
      </>
    )
  })
};