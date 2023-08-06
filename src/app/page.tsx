import { Experience } from "@/app/_components/experience/experience";
import { Intro } from "@/app/_components/intro/intro";
import { EngineeringNotes } from "@/app/_components/engineering-notes/engineering-notes";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <EngineeringNotes />
    </>
  );
}
