import SplitSection from "../components/SplitSection";
import contents from "../data/contents";
import ContentCard from "../components/ContentCard";
import Image from "../components/Image";
export default function About() {
  return (
    <div className="bg-white h-[100vh]">
      <SplitSection reverse>
        <Image
          height="h-100 sm:h-[40rem]"
          width="sm:w-[50%]"
          src="/images/owner_03.jpg"
        />
        <ContentCard
          {...contents[3]}
          variant={3}
          color="bg-white"
          textColor="text-black"
        />
      </SplitSection>
    </div>
  );
}
