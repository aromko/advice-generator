import useScreenSize from "@/utils/useScreenSize.tsx";

function App() {
  const screenSize = useScreenSize();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-dark-blue">
      <div className="flex flex-col items-center rounded-2xl bg-neutral-dark-grayish-blue p-8 sm:max-w-96 xl:max-w-[450px]">
        <p className="pb-3 text-sm uppercase tracking-[5px] text-primary-neon-green">
          Advice #117
        </p>
        <p className="text-center text-xl text-primary-light-cyan">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        {screenSize.width <= 375 ? (
          <img className="m-8" src="pattern-divider-mobile.svg" />
        ) : (
          <img className="m-8" src="pattern-divider-desktop.svg" />
        )}
      </div>
      <button className="-mt-8 rounded-full border-[20px] border-primary-neon-green hover:ring-4 hover:ring-primary-neon-green/40">
        <img className="bg-primary-neon-green" src="./icon-dice.svg" />
      </button>
    </div>
  );
}

export default App;
