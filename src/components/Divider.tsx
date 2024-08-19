import useScreenSize from "@/utils/useScreenSize.tsx";

function Divider() {
  const screenSize = useScreenSize();

  return (
    <>
      {screenSize.width <= 375 ? (
        <img className="m-8" src="pattern-divider-mobile.svg" />
      ) : (
        <img className="m-8" src="pattern-divider-desktop.svg" />
      )}
    </>
  );
}

export default Divider;
