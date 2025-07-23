/* reference: https://www.wix.com/website-template/view/html/3455 */

import Navigation from "./components/Navigation.jsx";
import ImgWithTextOverlay from "./components/ImgWithTextOverlay.jsx";
import Ticker from "./components/Ticker.jsx";
import Button from "./components/Button.jsx";
import ContentCard from "./components/ContentCard.jsx";
import Image from "./components/Image.jsx";
import Star from "./components/Star.jsx";
import SplitSection from "./components/SplitSection.jsx";
import Map from "./components/Map.jsx";

const contents = [
  {
    header: "About Us",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nesciunt quam at illo consectetur asperiores harum, voluptatem natus quo quaerat. Ratione in quas expedita nostrum ullam molestias id ipsa vero.",
    buttonText: "Read More",
    variant: 1,
  },
  {
    header: "Menu",
    paragraph:
      "This is the space to introduce the restaurant’s menu. Briefly describe the types of dishes and beverages offered and highlight any special features. Encourage site visitors to view the whole menu by exploring the menu page.",
    buttonText: "View Menu",
    variant: 2,
    color: "bg-primary",
  },
  {
    header: "Location",
    paragraph:
      "Located along the Ozamiz–Oroquieta National Highway, just beside 7-Eleven Clarin, our place is easy to find and perfect for quick stopovers. Whether you’re passing through Clarin or exploring Misamis Occidental, we’re in a convenient spot close to local shops and transportation hubs.",
    variant: 2,
    buttonText: "Get Direction",
    onClick: () => {
      const googleMapsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=8.1945863,123.8591501";
      window.open(googleMapsUrl, "_blank");
    },
    color: "bg-secondary",
  },
];

function App() {
  return (
    <div className="flex flex-col pb-20">
      <Navigation />
      <ImgWithTextOverlay src={"images/site_02.jpg"} text={"Sisig Corner"}>
        <Button fontVar={3} className={"mt-7"}>
          RESERVATIONS
        </Button>
      </ImgWithTextOverlay>
      <Ticker item={<Star color="white" />} />
      <ContentCard {...contents[0]} />
      <SplitSection>
        <Image
          height="h-80 sm:h-full"
          width="sm:w-[50%]"
          src="/images/sisig_01.jpg"
        />
        <ContentCard {...contents[1]} />
      </SplitSection>
      <Ticker
        variant={2}
        item={
          <div className="flex gap-15 items-center">
            <h1 className=" text-sm text-nowrap font-roboto uppercase font-semibold">
              Sisig Corner
            </h1>
            <Star size={15} />
          </div>
        }
      />
      <SplitSection reverse>
        <Map />
        <ContentCard {...contents[2]} />
      </SplitSection>
    </div>
  );
}

export default App;
