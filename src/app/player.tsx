import { useState, useEffect } from "react";

interface PlayerProps {
    playerNumber: number;
    playerName: string;
}

export default function Player({playerNumber, playerName}: PlayerProps) {
    const [assumed, setAssumed] = useState(0);
    const [actual, setActual] = useState(0);
    const [result, setResult] = useState("");

    const handleAssumedChange = (e: any) => {
        if (Number(e.target.value) >= 0) {
            setAssumed(Number(e.target.value));
        }
    };

    const handleActualChange = (e: any) => {
        if (Number(e.target.value) >= 0) {
            setActual(Number(e.target.value));
        }
    };

    useEffect(() => {
        let calculatedResult = 0;
        if(assumed == actual){
            calculatedResult = calculatedResult + 20;
            calculatedResult = calculatedResult + (10 * actual);
        }
        else if(assumed < actual){
            calculatedResult = calculatedResult - ((actual - assumed) * 10);
        }
        else{
            calculatedResult = calculatedResult - ((assumed - actual) * 10);
        }
        if(calculatedResult > 0){
            setResult("+"+calculatedResult+" Punkte");
        }
        if(calculatedResult <= 0){
            setResult(calculatedResult+" Punkte");
        }
      }, [assumed, actual]);

    return (
        <div className="flex flex-col items-start space-y-4">
            {/* Container für die Eingabefelder und das Ergebnis nebeneinander */}
            <div className="flex items-center space-x-4 w-full">
                <div className="flex items-center w-1/3">
                    <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                        Spieler {playerNumber + 1}
                    </span>
                </div>

                {/* Angenommener Wert */}
                <div className="flex flex-col w-1/3">
                    <p className="text-sm text-gray-600">Tipp</p>
                    <input
                        type="number"
                        value={assumed}
                        onChange={handleAssumedChange}
                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Tatsächlicher Wert */}
                <div className="flex flex-col w-1/3">
                    <p className="text-sm text-gray-600">Tatsächlich</p>
                    <input
                        type="number"
                        value={actual}
                        onChange={handleActualChange}
                        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Ergebnistext */}
                <div className="flex items-center w-1/3">
                    <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                        {result}
                    </span>
                </div>
            </div>
        </div>
    );
}

