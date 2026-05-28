import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[80vh] py-16 xl:py-24 flex items-center">

        <div className="container mx-auto max-w-[1400px] px-4 xl:px-0">

          <div
            className="
              flex flex-col xl:flex-row
              items-center justify-between
              gap-12 xl:gap-20
            "
          >

            {/* TEXT CONTENT */}
            <div className="text-center xl:text-left order-2 xl:order-none">

              {/* role */}
              <span className="text-lg xl:text-xl text-white/80 tracking-[3px] uppercase">
                Cyber Security Engineer
              </span>

              {/* heading */}
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  xl:text-7xl
                  font-bold
                  leading-tight
                  mt-4 mb-6
                "
              >
                Hello I&apos;m <br />

                <span className="text-accent">
                  Bhavani Singh
                </span>
              </h1>

              {/* description */}
              <p
                className="
                  max-w-[620px]
                  mx-auto xl:mx-0
                  mb-10
                  text-white/70
                  text-base xl:text-lg
                  leading-8
                "
              >
                Cybersecurity Engineer specializing in
                Web Application Security, API Security,
                Threat Modeling, Android Security,
                and Cloud Security.
              </p>

              {/* BUTTONS + SOCIALS */}
              <div
                className="
                  flex flex-col xl:flex-row
                  items-center
                  gap-6 xl:gap-8
                "
              >

                {/* DOWNLOAD CV */}
                <a
                  href="/Bhavani_Singh_Resume.pdf"
                  download
                  target="_blank"
                >

                  <Button
                    variant="outline"
                    size="lg"
                    className="
                      uppercase
                      w-full xl:w-fit
                      flex items-center justify-center
                      gap-3
                      border-accent
                      text-accent
                      hover:bg-accent
                      hover:text-primary
                      rounded-full
                      px-8 py-6
                      tracking-[2px]
                      transition-all duration-300
                    "
                  >

                    <span>Download CV</span>

                    <FiDownload className="text-xl" />

                  </Button>

                </a>

                {/* SOCIALS */}
                <Social
                  containerStyles="
                    flex flex-wrap
                    justify-center xl:justify-start
                    gap-4
                  "
                  iconStyles="
                    w-11 h-11
                    border border-accent
                    rounded-full
                    flex justify-center items-center
                    text-accent
                    text-base
                    hover:bg-accent
                    hover:text-primary
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                />

              </div>

            </div>

            {/* PHOTO */}
            <div className="order-1 xl:order-none mb-6 xl:mb-0">

              <Photo />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <Stats />

    </>
  );
};

export default Home;