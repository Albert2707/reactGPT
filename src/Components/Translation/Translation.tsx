import { FC } from "react";
import { Options } from "../../AIOptions";
interface Props {
  doStuff: () => void;
  result: string;
  setOption: React.Dispatch<React.SetStateAction<Options | undefined>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}
const Translation: FC<Props> = ({
  doStuff,
  setInput,
  result,
  setOption,
  setResult,
}) => {
  return (
    <div className="grid mt-5  md:mt-12 ">
      <button
        className="absolute top-2 left-5 text-white hidden md:block"
        onClick={() => {
          setResult("");
          setOption(undefined);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="block md:hidden text-white border-[1px] w-28 py-2 rounded-lg bg-[#444] hover:bg-gray-300 hover:text-black hover:border-pink-400  mx-auto"
        onClick={() => {
          setResult("");
          setOption(undefined);
        }}
      >
        Volver
      </button>
      <textarea
        name=""
        id=""
        cols={50}
        rows={10}
        className="bg-[#444] border-white border-[1px] rounded-lg text-xl p-2 font-poppins text-gray-100 outline-none placeholder-gray-300 mt-5 md:mt-0"
        placeholder="Enter a prompt"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      {result.length > 0 ? (
        <div className="flex flex-col mt-10 ">
          <textarea
            name=""
            id="answer"
            cols={50}
            rows={10}
            value={result}
            readOnly
            className="bg-[#444] outline-none border-[1px] border-gray-200 rounded-lg text-white font-poppins p-2"
          />
        </div>
      ) : (
        <></>
      )}

      <button
        className="w-[200px] h-[50px] mx-auto text-xl bg-[#444] rounded-lg text-gray-200 mt-5 px-2 py-2 border-[1px] border-slate-300 hover:bg-gray-300 transition hover:border-pink-400 hover:text-black duration-300"
        onClick={doStuff}
      >
        DO YOUR STUFF!
      </button>
    </div>
  );
};

export default Translation;
