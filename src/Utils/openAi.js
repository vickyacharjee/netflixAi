import OpenAI from 'openai';
import { gptApi } from './constants';

const openai = new OpenAI({
  apiKey: gptApi, 
  dangerouslyAllowBrowser:true
});

export default openai;