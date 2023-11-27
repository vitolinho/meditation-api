import Image from "next/image"
import img from "@/public/1.png"

export default async function Home() {
  return (
    <>
      <div className="absolute w-full h-full z-50 flex flex-col justify-center items-center px-5 gap-y-[3.75rem] lg:px-20 lg:items-start lg:gap-y-[5rem]">
        <p className="text-6xl font-gallery text-white lg:text-9xl lg:leading-[9.6rem]">meditation API</p>
        <p className="text-sm font-neue uppercase leading-[1.875] text-white lg:w-[25rem]">Welcome to our meditation API, a digital space crafted to enhance serenity and well-being. Explore our features with confidence, as our API is secure to ensure a peaceful and harmonious experience. Dive into guided meditation with assurance, as your peace of mind is our priority. Enjoy the fullness of this inner journey through our secure interface.
        </p>
        <a
          href="https://github.com/vitolinho/meditation-api/blob/main/README.md"
          target="_blank"
          className="w-full flex items-center justify-center px-8 py-4 border border-white text-white bg-transparent hover:cursor-pointer hover:brightness-50 text-sm font-neue uppercase leading-[1.875] tracking-[0.25rem] lg:w-fit">
            api documentation
        </a>
      </div>
      <Image
        alt="background"
        src={img}
        fill
        objectFit="cover"
        className="z-0 brightness-50"
      />
    </>
  )
}
