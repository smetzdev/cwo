import faker from "faker"
import capitalize from "lodash/capitalize"

export const fakeBands = Array.from({ length: 12 }, () => ({
  Image: <img src="https://picsum.photos/720/380" alt="" />,
  title: faker.random.words(2),
  genre: `${capitalize(faker.random.word())} Metal`,
  stage: faker.random.arrayElement(["Mainstage", "Clubstage"]),
  startTime: "19:00",
  endTime: "20:00",
  links: [
    "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB?si=GhV6m4JZRFGxL5CfSmaDiQ",
    "https://de-de.facebook.com/Metallica",
    "https://thefals.bandcamp.com/",
    "https://www.instagram.com/metallica/",
    "https://www.metallica.com/",
  ],
}))
