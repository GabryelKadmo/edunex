import Image from "next/image";

export default function Home() {
  return (
    <header className="">
    <div className="md:hidden px-5">
      <Image alt="Logo Edunex" src={"/logoicon.svg"} width={43} height={43} />
    </div>

    <div>
      Home
    </div>
  </header>
  );
}
