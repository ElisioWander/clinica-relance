import { Feedback } from "../Components/Home/Feedback";
import { MostRequired } from "../Components/Home/MostRequired";
import { OurProfessionals } from "../Components/Home/OurProfessionals";
import { Procedures } from "../Components/Home/Procedures";

export default function Home() {
  return (
    <div className="w-full box-border bg-white-50 flex flex-col items-center ">
      <section className="w-full h-[320px] ">
        <img
          src="https://media.istockphoto.com/photos/beautician-is-applying-permanent-make-up-picture-id1345987858?s=612x612"
          alt="microblanding poster"
          className="w-full h-full object-cover brightness-50 "
        />
      </section>

      <MostRequired />

      <OurProfessionals />

      <Procedures />

      <Feedback />
    </div>
  );
}
