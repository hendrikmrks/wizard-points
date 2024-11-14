"use client"

import { useState } from "react";
import Player from "./player";

export default function Home() {
  const [round, setRound] = useState(1);
  const [player, setPlayer] = useState(4);
  const [showAddPlayerButton, setShowAddPlayerButton] = useState(true);

  const addPlayer = () => {
    if (player == 5) {
      setShowAddPlayerButton(false);
    }
    if (player < 6) {
      setPlayer(player + 1);
    }
  };

  const components: any = Array.from({ length: player });

  // @ts-ignore
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg space-y-6 w-full max-w-sm mx-4">
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold">Wizard Punkterechner</h1>
          </div>

          {components.map((_: any, index: number) => (
            <Player key={index} playerNumber={index} playerName={"Test"} />
          ))}

          {showAddPlayerButton ? <button onClick={addPlayer} className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Weiterer Spieler</button> : null}

        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-auto w-full">
        <p className="text-sm">Made with ❤️ as <a href="https://github.com/hendrikmrks/wizard-points">Open Source Software</a></p>
      </footer>
    </div>
  );
}


