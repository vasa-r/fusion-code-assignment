import First from "../assets/golden-bg.jpg";
import Second from "../assets/two-bottle-bulb.jpg";
import Third from "../assets/paste-bottle.jpg";
import { HeroContents } from "./types";

export const heroContents: HeroContents[] = [
  {
    id: 1,
    mainTitle: "Resurgent beginnings",
    body: "This new year, wishes for revitalised energy take form in a curated collection of gifts for family and close companions. Receive complimentary red envelopes with purchases over HKD 900 by entering NY25 at checkout.",
    button: "Explore seasonal gifts",
    image: First,
  },
  {
    id: 2,
    topSubTitle: "Brilliant performers",
    mainTitle: "Immaculate to exfoliate. Lucent to brighten.",
    body: "Immaculate Facial Tonic and Lucent Facial Concentrate: applied in sequence, these vitamin-rich formulations leave the skin refined, balanced and hydrated.",
    button: "Discover the duo",
    image: Second,
  },
  {
    id: 3,
    topSubTitle: "Online only",
    mainTitle: "Four bundles for hair, hands and home",
    body: "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
    button: "Explore bundles",
    image: Third,
  },
];
