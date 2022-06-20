import { Feedback } from "../Components/Home/Feedback";
import { Introduction } from "../Components/Home/Introduction";
import { MostRequired } from "../Components/Home/MostRequired";
import { OurProfessionals } from "../Components/Home/OurProfessionals";
import { Procedures } from "../Components/Home/Procedures";

export default function Home() {
  return (
    <div className="w-full box-border bg-white-50 flex flex-col items-center ">
      <Introduction />

      <MostRequired />

      <OurProfessionals />

      <Procedures />

      <Feedback />
    </div>
  );
}
