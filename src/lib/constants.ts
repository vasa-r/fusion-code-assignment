import First from "../assets/golden-bg.jpg";
import Second from "../assets/two-bottle-bulb.jpg";
import Third from "../assets/paste-bottle.jpg";
import { HeroContents } from "./types";

import FirstProduct from "../assets/first-product.avif";
import SecondProduct from "../assets/second-product.avif";
import ThirdProduct from "../assets/third-product.avif";
import FourthProduct from "../assets/fourth-product.avif";
import FifthProduct from "../assets/fifth-product.avif";
import SixthProduct from "../assets/sixth-product.webp";
import SeventhProduct from "../assets/seventh-product.png";

import SecondFirst from "../assets/second-first.avif";
import SecondSecond from "../assets/second-second.avif";
import SecondThird from "../assets/second-third.avif";
import SecondFourth from "../assets/second-fourth.avif";
import SecondFifth from "../assets/second-fifth.png";
import SecondSixth from "../assets/second-sixth.png";

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

export const productsData = [
  {
    id: 1,
    title: "Brilliant Performers Duo",
    subHeading: "Synchronised support to refine and replenish the skin",
    img: FirstProduct,
  },
  {
    id: 2,
    title: "Lucent Facial Concentrate",
    subHeading: "A Vitamin C-rich layering serum",
    img: SecondProduct,
  },
  {
    id: 3,
    title: "Immaculate Facial Tonic",
    subHeading: "Exfoliating tonic with light finish",
    img: ThirdProduct,
  },
  {
    id: 4,
    title: "B Triple C Facial Balancing Gel",
    subHeading: "Emracing, vitamin rich hydration",
    img: FourthProduct,
  },
  {
    id: 5,
    title: "Exalted Eye Serum",
    subHeading: "Lightweight, vitamin rich serum",
    img: FifthProduct,
  },
  {
    id: 6,
    title: "Perfect Facial Hydrating Cream",
    subHeading: "Sumptuous, replenishing, matte finish",
    img: SixthProduct,
  },
  {
    id: 7,
    title: "Sublime Replenishing Night Masque",
    subHeading: "Richly nourishing hydration for overnight use",
    img: SeventhProduct,
  },
];

export const secondProductsData = [
  {
    id: 1,
    title: "Reverence Aromatique Hand Wash",
    subHeading: "A gently exfoliating formulation",
    img: SecondFirst,
  },
  {
    id: 2,
    title: "Geranium Leaf Body Scrub",
    subHeading: "Leaves skin feeling fresh, smooth and soft",
    img: SecondSecond,
  },
  {
    id: 3,
    title: "Screen 1",
    subHeading: "A quartet of staples for the hands, body and home",
    img: SecondThird,
  },
  {
    id: 4,
    title: "Virēre Eau de Parfum",
    subHeading: "Citrus, green, woody",
    img: SecondFourth,
  },
  {
    id: 5,
    title: "States of Being: Aromatique Room Spray Trio",
    subHeading: "An evocative trio for any interior",
    img: SecondFifth,
  },
  {
    id: 6,
    title: "Callippus Aromatique Candle",
    subHeading: "A marriage of deep greens and earthy spices",
    img: SecondSixth,
  },
];
