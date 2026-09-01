

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import moodImage from "@/shared/images/look.jpg";
import styles from "./styles/slider.module.css";
import sliderLine from "@/shared/images/svg/slider-line.svg";
import { sliderMock } from "@/features/dashboard/mocks/slider";

const moods = [
  { name: "Soft Power", looks: 214, position: "50% 18%" },
  { name: "City Ease", looks: 328, position: "50% 32%" },
  { name: "Off Duty", looks: 487, position: "50% 45%", active: true },
  { name: "Y2K Energy", looks: 156, position: "50% 58%" },
  { name: "Dark Romance", looks: 289, position: "50% 72%" },
];

export default function Slider() {
  return (
    <section 
      className="relative mb-8 min-h-60 w-full overflow-hidden rounded-3xl rounded-bl-[3rem] rounded-tr-[3.75rem] border border-[#fff5f0] bg-[#fffdfc]"
      aria-labelledby="mood-orbit-title"
     >
      <div className="w-full overflow-x-auto py-7">
        <div className="relative mx-auto min-h-44 min-w-[960px] max-w-[1320px]">
          <Image
            src={sliderLine}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1 h-40 w-full"
          />

          <Sparkles
            aria-hidden="true"
            className="absolute -left-5 top-[6.15rem] z-10 h-4 w-4 text-pink"
          />

          <div className="relative z-10 grid grid-cols-[repeat(5,minmax(120px,1fr))_150px] items-center gap-5 pl-8">
            {sliderMock.map((mood) => (
              <article className={styles.mood} key={mood.name}>
                <div className={styles.portraitArea}>
                  {mood.isActive && (
                    <div className={styles.activeRings} aria-hidden="true">
                      <span />
                      <span />
                    </div>
                  )}

                  <div className={styles.portrait}>
                    <Image
                      src={mood.image}
                      alt={mood.name}
                      fill
                      sizes="88px"
                      className={styles.portraitImage}
                      style={{ objectPosition: mood.position }}
                    />
                  </div>

                  {mood.isActive && (
                    <span className={styles.currentMood}>Current mood</span>
                  )}
                </div>

                <h3 className={styles.moodName}>{mood.name}</h3>
                <p className={styles.lookCount}>{mood.looks} looks</p>
              </article>
            ))}

            <aside className="flex flex-col items-center justify-center gap-3 self-stretch px-2 text-center">
              <p className="max-w-28 -rotate-6 font-instrument text-lg italic leading-5 text-zinc-700">
                collect moments, not things.
              </p>
              <Link
                href="/trends"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-pink/40 text-pink backdrop-filter backdrop-blur-sm bg-opacity-0 transition-colors duration-300 hover:bg-pink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                aria-label="Explorar trends"
              >
                <ArrowRight size={18} />
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
