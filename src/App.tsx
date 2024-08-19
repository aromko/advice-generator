import useScreenSize from "@/utils/useScreenSize.tsx";
import { useEffect, useState } from "react";

interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [advice, setAdvice] = useState<Advice>();
  const screenSize = useScreenSize();

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();

    setAdvice(json);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-dark-blue">
      <div className="flex flex-col items-center rounded-2xl bg-neutral-dark-grayish-blue p-8 sm:max-w-96 xl:max-w-[450px]">
        <p className="pb-3 text-sm uppercase tracking-[5px] text-primary-neon-green">
          Advice #{advice?.slip.id ?? null}
        </p>
        <p className="text-center text-xl text-primary-light-cyan">
          {advice?.slip.advice}
        </p>
        {screenSize.width <= 375 ? (
          <img className="m-8" src="pattern-divider-mobile.svg" />
        ) : (
          <img className="m-8" src="pattern-divider-desktop.svg" />
        )}
      </div>
      <button
        className="-mt-8 rounded-full border-[20px] border-primary-neon-green hover:ring-4 hover:ring-primary-neon-green/40"
        onClick={getAdvice}
      >
        <img className="bg-primary-neon-green" src="./icon-dice.svg" />
      </button>
    </div>
  );
}

export default App;
