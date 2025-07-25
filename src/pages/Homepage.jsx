import Navigation from "../components/Navigation";
import ImgWithTextOverlay from "../components/ImgWithTextOverlay";
import Button from "../components/Button";
import Ticker from "../components/Ticker";
import ContentCard from "../components/ContentCard";
import SplitSection from "../components/SplitSection";
import Image from "../components/Image";
import Map from "../components/Map";
import Star from "../components/Star";
import contents from "../data/contents";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

  return (
    <div className="flex flex-col pb-20">
      <ImgWithTextOverlay
        src={"images/owner_03.jpg"}
        text={"Sisig Corner"}
        className={"[&>button]:text-sm"}
      >
        <Button fontVar={3}>Order Online</Button>
      </ImgWithTextOverlay>
      <Ticker item={<Star color="white" />} />
      <ContentCard {...contents[0]} onClick={() => navigateTo("about")} />
      <SplitSection>
        <Image
          height="h-100 sm:h-[40rem]"
          width="sm:w-[50%]"
          src="/images/sisig_01.jpg"
        />
        <ContentCard {...contents[1]} onClick={() => navigateTo("menu")} />
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
