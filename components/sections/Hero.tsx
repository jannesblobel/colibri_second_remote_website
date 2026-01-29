import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const data = {
  title: "Edit Markdown together. Without leaving GitHub.",
  subheading: (<>
    <span className="font-semibold text-primary">
      Colibri is a collaborative Markdown editor for GitHub repositories.
    </span>
    <br/>
    Open any <span className="bg-border rounded-md px-1 mx-0.5 py-0.5 text-primary/90">.md</span> file, edit in real time with your team, and merge it back as a clean pull request.
  </>),
};

const Hero = () => {
  return (
    <div className="w-full lg:grid grid-cols-12 gap-4 mt-16 lg:mt-44">
      <h1 className="col-span-10 col-start-2 text-4xl lg:text-6xl font-bold lg:text-center leading-tight">{data.title}</h1>
      <h2 className="col-span-8 col-start-3 pt-4 px-0 lg:px-12 text-lg lg:text-md font-regular lg:text-center leading-relaxed text-muted-foreground">{data.subheading}</h2>
      <Link href="/launch" className="col-span-6 col-start-4 flex items-center gap-2 justify-between bg-white rounded-full border border-border py-1 pr-1 pl-5 cursor-text hover:border-primary transition-all h-[54px] mt-16 lg:mt-4">
        <p className="hidden lg:block font-mono">
          <span className="text-muted-foreground/50">https://</span>
          <span className="text-primary/60">github.com/org/repo/document.md</span>
        </p>
        <p className="font-mono lg:hidden">
          <span className="text-primary/60">Enter your markdown link ...</span>
        </p>
        <div className="pointer-events-none bg-border rounded-full p-3 w-fit">
          <ArrowRightIcon className="size-5" />
        </div>
      </Link>
    </div>
  );
};

export default Hero;