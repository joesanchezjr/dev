import Image from "next/image"
import Header from "~components/header"
import DownArrow from "~icons/down-arrow"

export default function Cover() {
  return (
    <section className="h-[1024px] max-h-[75vh] flex justify-center relative">
      <Image
        src="/static/aurora.jpeg"
        role="presentation"
        alt=""
        className="object-cover object-center pointer-events-none -z-50"
        fill
        quality="90"
        priority
      />

      <div className="w-full max-w-screen-2xl flex flex-col justify-between align-self-center px-2 sm:px-4">
        <Header />
        <div className="flex flex-col relative mb-8 md:mb-16">
          <h1 className="flex flex-col text-slate-50 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-none">
            <span>Senior Software Engineer</span>
            <span className="[@media(max-width:374px)]:ml-[8ch] ml-[15.5ch]">Front-End</span>
          </h1>
          <DownArrow />
        </div>
      </div>
    </section>
  )
}
