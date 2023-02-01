import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import ImageGenerator from "./Components/ImageGenerator/ImageGenerator";
import OptionSelection from "./Components/OptionSelection/OptionSelection";
import { arrayItems, Options } from "./AIOptions";
import Translation from "./Components/Translation/Translation";
import Footer from "./Components/Footer/Footer";
function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState<Options>();
  const [result , setResult]= useState<string>("");
  const [input, setInput] = useState<string>("");
  const selectOption = (options: Options) => {
    setOption(options);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion({
      model: object.model!,
      prompt: object.prompt,
      temperature: object.temperature,
      max_tokens: object.max_tokens,
      top_p: object.top_p,
      frequency_penalty: object.frequency_penalty,
      presence_penalty: object.presence_penalty,
    });
    setResult(response.data.choices[0].text!);
    //console.log(object)
  };
  //console.log(option);
  return (
    <div className="min-h-screen bg-[#242424] flex flex-col items-center p-[2rem] relative">
      {Object.values(option ?? {}).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} setOption={setOption} setResult={setResult}/>
      )}
      {/*      <ImageGenerator/>
       */}
       <Footer/>
    </div>
  );
}
export default App;
