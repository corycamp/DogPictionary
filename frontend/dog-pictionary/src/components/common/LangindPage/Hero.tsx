export default function Hero() {
  return (
    <section>
      <div className="HeroContainer">
        <div className="Intro-Section">
          <div className="flex flex-row items-center mb-2 rounded-4xl bg-amber-50 w-50 pl-3 pr-3 pt-0.5 pb-0.5">
            {/* Icon goes here */}
            <span className="material-symbols-outlined text-amber-400">
              photo_library
            </span>
            <p className="text-[10px] text-amber-400 font-bold">
              PHOTO GUESSING CHALLENGE
            </p>
          </div>
          <div>
            <div>
              <h1 className="text-black font-bold">Unleash Your Inner</h1>
              <h1 className="text-yellow-400 font-bold underline mb-6">
                Dog Expert
              </h1>
              <h3 className="text-[#8a7c60] font-medium lg:w-100">
                Identify the breed from the picture and simply type the name. No
                drawing required-just test your dog knowledge and have fun!
              </h3>
            </div>
            <div className="Into-Buttons">
              <button className="Start-btn flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-[#181611] text-lg font-extrabold shadow-lg hover:shadow-primary/40 hover:transition-all duration-300 group">
                Start Guessing{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-black">
                  play_arrow
                </span>
              </button>
              <button className="Demo-btn bg-amber-400 text-black border">
                Demo
              </button>
            </div>
          </div>
        </div>
        <div className="DogPhoto-Section">
          <div className="w-full md:min-w-90 md:max-w-1/2 flex justify-center lg:justify-end relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div
                className="DogImage w-full h-full bg-cover bg-center"
                data-alt="Cute illustration or photo of a dog painting on a canvas with colorful paw prints"
              ></div>
              <div className="absolute bottom-1 left-6 bg-white dark:bg-[#3a352a] p-4 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    image
                  </span>
                  <span className="text-xs font-bold text-[#8a7c60] uppercase">
                    Image
                  </span>
                </div>
                <p className="font-bold text-sm text-[#181611] dark:text-white">
                  Golden Retriever
                </p>
              </div>
              <div className="absolute top-0 md:top-6 right-0 lg:right-6 bg-white dark:bg-[#3a352a] p-3 rounded-lg shadow-lg flex items-center gap-3">
                <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-lg">
                    check
                  </span>
                </div>
                <div>
                  <p className="text-xs text-[#8a7c60] font-bold">Score</p>
                  <p className="font-bold text-[#181611] dark:text-white">
                    +150 pts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
