"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 70,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologies Mastered",
  },
  {
    num: 800,
    text: "Days of consistency",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 xl:pt-0 xl-pb-0 pb-12">

      <div className="container mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center xl:items-start gap-2"
              >

                <div className="flex items-center gap-2">

                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold text-accent"
                  />

                  <span className="text-4xl xl:text-5xl font-bold text-accent">
                    +
                  </span>

                </div>

                <p className="text-white/70 text-sm uppercase tracking-[1px] text-center xl:text-left">
                  {stat.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Stats;