import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const ImageGenerator = () => {
  const [promt, setPromt] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: promt,
      n: 1,
      size: "1024x1024",
    });
    setResult(response.data.data[0].url!);
  };
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="text-white text-2xl">
        Generate an Image using Open AI API
      </h2>
      <input
        type="text"
        className="outline-none p-5 w-[350px] rounded-xl caret-pink-500 bg-[#444] text-white placeholder-gray-300 border-white border-2 font-semibold"
        placeholder="Type something to generate an Image.."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPromt(e.target.value);
        }}
      />
      <button
        className="p-3 bg-[#333] rounded-2xl border-2 border-transparent border-white font-semibold hover:bg-[#444] hover:border-rose-500 transition duration-300 text-white"
        onClick={generateImage}
      >
        Generate an image
      </button>
      {result.length > 0 ? (
        <img
          className="mt-5 w-[500px] object-cover rounded-md "
          src={result}
          alt="result"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageGenerator;
