import React from "react";
import { useNavigate } from "react-router-dom";

type Player = {
  rank: number;
  name: string;
  score: number;
  expert: string;
  avatar?: string;
};

export default function Leaderboard(): React.JSX.Element {
  const navigate = useNavigate();

  const players: Player[] = [
    { rank: 1, name: "GoldenFan", score: 2500, expert: "Retrievers" },
    { rank: 2, name: "PoodlePro", score: 2350, expert: "Poodles" },
    { rank: 3, name: "BarkTwain", score: 2200, expert: "Hounds" },
    { rank: 4, name: "SpotTheDog", score: 2100, expert: "Beagle" },
    { rank: 5, name: "PawPatrol", score: 2050, expert: "Bulldog" },
    { rank: 6, name: "FetchMaster", score: 1980, expert: "Labrador" },
    { rank: 7, name: "BoneCollector", score: 1950, expert: "Pug" },
    { rank: 8, name: "TailWagger", score: 1900, expert: "Husky" },
    { rank: 9, name: "GoodBoy123", score: 1850, expert: "Boxer" },
    { rank: 10, name: "PuppyLuv", score: 1800, expert: "Collie" },
  ];

  const top1 = players.find((p) => p.rank === 1)!;
  const top2 = players.find((p) => p.rank === 2)!;
  const top3 = players.find((p) => p.rank === 3)!;

  return (
    <div className="py-12 px-6 md:px-12">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Top Pictionary Players
          </h1>
          <p className="text-sm text-[#8a7c60] mt-1">
            Masters of the breeds. Can you beat their score?
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate("/game")}
            className="bg-amber-400 text-white px-4 py-2 rounded-full font-semibold text-sm"
          >
            Play Now
          </button>
        </div>
      </div>

      {/* Top 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-sm text-gray-500">#2</div>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
                🐩
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-black">{top2.name}</h3>
            <div className="text-sm text-gray-400 text-[23px]">
              {top2.score.toLocaleString()} pts
            </div>
            <div className="mt-3 text-xs bg-gray-100 inline-block px-3 py-1 rounded-full text-black font-medium">
              Expert: {top2.expert}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-[#F8F7F5] rounded-2xl p-6 shadow-xl border-2 border-amber-400 text-center relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-amber-300 rounded-full px-3 py-1 font-bold text-[30px]">
                👑
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-4xl shadow">
                🐕
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-black">{top1.name}</h2>
            <div className="text-amber-500 font-semibold mt-2 text-[23px]">
              {top1.score.toLocaleString()} pts
            </div>
            <div className="mt-3 text-xs bg-amber-400 inline-block px-3 py-1 rounded-full text-black font-medium">
              Expert: {top1.expert}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="text-sm text-gray-500">#3</div>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
                🐶
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-black">{top3.name}</h3>
            <div className="text-sm text-gray-400 text-[23px]">
              {top3.score.toLocaleString()} pts
            </div>
            <div className="mt-3 text-xs bg-gray-100 inline-block px-3 py-1 rounded-full text-black font-medium">
              Expert: {top3.expert}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl p-0 shadow-md overflow-hidden">
        <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 p-4 text-xs text-gray-400">
          <div className="col-span-1">RANK</div>
          <div className="col-span-6">PLAYER</div>
          <div className="col-span-3">BREED EXPERT</div>
          <div className="col-span-2 text-right">SCORE</div>
        </div>

        <div>
          {players
            .filter((p) => p.rank >= 4)
            .map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-12 items-center gap-4 p-4 hover:bg-[#fbf7f4]"
              >
                <div className="col-span-1 text-sm text-gray-500">
                  {player.rank}
                </div>
                <div className="col-span-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                    {player.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-black">{player.name}</div>
                  </div>
                </div>
                <div className="col-span-3 text-sm">
                  <span className="inline-block bg-[#fff6ea] text-amber-700 px-3 py-1 rounded-full text-xs">
                    {player.expert}
                  </span>
                </div>
                <div className="col-span-2 text-right font-semibold text-black">
                  {player.score.toLocaleString()}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="mt-10 left-0 right-0 bottom-4 flex items-center justify-between max-w-4xl mx-auto bg-white rounded-full px-4 py-3 shadow-lg border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-black">
            You
          </div>
          <div>
            <div className="text-xs text-gray-500">
              Your Rank: <span className="font-semibold">#42</span>
            </div>
            <div className="text-sm text-amber-600 font-semibold">
              1,200 pts
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">Keep playing to climb up!</div>
          <button
            onClick={() => navigate("/game")}
            className="bg-amber-400 text-white px-4 py-2 rounded-full font-semibold"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
