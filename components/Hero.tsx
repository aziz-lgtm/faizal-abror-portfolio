import {hero} from "@/data/hero";

export default function Hero() {
  return (
    <section className="bg-transparent sm:pb-15 text-white flex items-center" id="hero">
      <div className="max-w-6xl mx-auto mt-23 mb-4 md:mt-23 md:mb-4 xl:mt-28 px-4 sm:px-6 lg:px-8 ">
        
        {/* Subtitle - "Hey, I'm ..." */}
        <p className="text-sm sm:text-base text-gray-400 font-medium tracking-wide mb-3 lg:font-medium">
          {hero.greeting}
        </p>

        {/* Main Heading - bold, large */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:font-semibold sm:leading-tight md:font-bold lg:font-bold xl:font-semibold xl:leading-25 tracking-tight mb-4">
          {hero.title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-xl sm:font-medium xl:font-light sm:leading-normal text-gray-300 max-w-2xl leading-tight mb-8">
          {hero.subtitle}
        </p>

        {/* Badges / Expertise */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Badge 1: Software Engineering */}
          <div className="border border-gray-700 rounded-lg px-5 py-3 hover:border-blue-400 transition-colors duration-300">
            <p className="text-xs text-gray-400 md:font-semibold">
              {hero.stacks}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}