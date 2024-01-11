import { key } from "../constant";
import OpenAI from 'openai';
import { openaiKey } from "../constant";
const keys=key()
console.log(keys)
    const openai = new OpenAI({
        apiKey: openaiKey, // This is the default and can be omitted
        dangerouslyAllowBrowser: true,
      });
export default openai