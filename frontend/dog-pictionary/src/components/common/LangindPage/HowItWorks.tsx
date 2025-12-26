interface ItemCard {
  color: string;
  icon: string;
  title: string;
  message: string;
}

export default function HowItWorks() {
  const items: ItemCard[] = [
    {
      color: "bg-amber-300",
      icon: "image",
      title: "Obeserve",
      message:
        "View the photo of the dog breed shown on your screen. Look for clues!",
    },
    {
      color: "bg-green-400",
      icon: "keyboard",
      title: "Type & Guess",
      message:
        "Type the breed name into the box. No sketching involved, just vocabulary and speed!",
    },
    {
      color: "bg-purple-500",
      icon: "school",
      title: "Learn",
      message:
        " Unlock amazing facts and trivia about different breeds after every round.",
    },
  ];
  return (
    <section>
      <div className="ExplanationContainer">
        <div>
          <h2 className="font-bold text-[30px]">How It Works</h2>
          <div>
            <p className="text-[#8a7c60] font-medium pt-1">
              Forget about drawing! Your goal is simply to identify breeds from
              photos.
              <br />
              Spot the dog, type the name and score points.
            </p>
          </div>
          <span className="divider"></span>
          <div className="TileSection">
            {items.map((item, index) => {
              return (
                <div className="ItemCard">
                  <span
                    className={`Icon material-symbols-outlined ${
                      index == 0 ? "text-black" : "text-white"
                    } ${item.color}`}
                  >
                    {item.icon}
                  </span>
                  <p className="mt-5 font-bold text-[15px] pb-1">
                    {item.title}
                  </p>
                  <p className="text-[#8a7c60]">{item.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-20">
        <div className="flex flex-row p-10 justify-between items-center w-full bg-amber-400 rounded-4xl">
          <div>
            <h2 className="font-bold text-black text-[30px]">
              Ready to start guessing?
            </h2>
            <p className="text-black font-medium">
              Join the community and become a top dog expert today!
            </p>
          </div>
          <button className="h-12 rounded-4xl">Play Now</button>
        </div>
      </div>
    </section>
  );
}
