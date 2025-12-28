import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResultView(): React.JSX.Element {
  const navigate = useNavigate();

  const handlePlayAgain = () => navigate("/game");
  const handleViewGallery = () => navigate("/gallery");

  const handleShare = async () => {
    const title = "I just guessed a breed on Dog Pictionary!";
    const url = window.location.href;
    const text = "I just guessed Golden Retriever on Dog Pictionary!";

    try {
      if ((navigator as any).share) {
        await (navigator as any).share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        alert("Result copied to clipboard");
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="p-8 bg-[#fbf7f4] flex items-start justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: result card */}
        <div>
          <div className="flex items-center gap-3 text-2xl font-bold text-black">
            <span className="material-symbols-outlined text-emerald-600">
              check_circle
            </span>
            Correct!
          </div>
          <p className="text-sm text-[#8a7c60] mt-2">
            You guessed it right.{" "}
            <span className="font-semibold">+50 points</span>
          </p>

          <div className="mt-6 bg-white rounded-2xl p-6 shadow-md">
            <div className="relative">
              <img
                src="https://bestforpet.co.nz/wp-content/uploads/2025/07/Golden_Retriever.jpg"
                alt="Golden Retriever"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-3 right-3 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                Rare Find
              </div>
            </div>

            <h3 className="mt-4 text-lg font-semibold">Golden Retriever</h3>
            <div className="text-sm text-gray-500">
              Sporting Group • Scotland
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-[#fff6ea] px-4 py-3 rounded-xl text-center">
                <div className="text-xs text-gray-500">SPEED</div>
                <div className="font-semibold">Fast</div>
              </div>
              <div className="bg-[#fff6ea] px-4 py-3 rounded-xl text-center">
                <div className="text-xs text-gray-500">POPULARITY</div>
                <div className="font-semibold">#3 in US</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: facts and actions */}
        <div>
          <div className="flex items-center justify-end">
            <button
              onClick={handleShare}
              className="bg-white px-4 py-2 rounded-full shadow text-sm text-black"
            >
              Share Result
            </button>
          </div>

          <div className="mt-4 bg-white rounded-2xl p-6 shadow-md">
            <h4 className="font-semibold">Did you know?</h4>
            <div className="mt-4 space-y-3">
              <div className="bg-[#fbfbfb] rounded-xl p-3">
                <div className="text-sm font-semibold">ScottishHeritage</div>
                <div className="text-xs text-gray-500">
                  Golden Retrievers were originally bred in Scotland in the
                  mid-19th century to retrieve game during hunting parties.
                </div>
              </div>

              <div className="bg-[#fbfbfb] rounded-xl p-3">
                <div className="text-sm font-semibold">Soft Mouth</div>
                <div className="text-xs text-gray-500">
                  They are known for their "softmouth" grip, meaning they can
                  carry raw eggs in their mouth without breaking them.
                </div>
              </div>

              <div className="bg-[#fbfbfb] rounded-xl p-3">
                <div className="text-sm font-semibold">Intelligence</div>
                <div className="text-xs text-gray-500">
                  Ranked as the 4th smartest dog breed, making them excellent
                  candidates for search and rescue operations.
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handlePlayAgain}
                className="bg-amber-400 px-6 py-3 rounded-full font-semibold text-black"
              >
                Play Again
              </button>
              <button
                onClick={handleViewGallery}
                className="bg-white border border-gray-200 px-6 py-3 rounded-full text-black"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
