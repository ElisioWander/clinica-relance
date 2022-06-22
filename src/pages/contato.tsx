import { Form } from "../Components/Form";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1
        className="w-full p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
        uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
        after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
        after:border-r-transparent after:-translate-x-1/2"
      >
        Fale conosco
      </h1>
      <div className="w-full max-w-[1024px] md:h-480px py-14 md:grid md:grid-cols-2 ">
        <div>
        </div>
        <Form />
      </div>
    </div>
  );
}
