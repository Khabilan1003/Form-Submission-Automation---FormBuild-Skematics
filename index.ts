import { generate } from "./generate";
import { FORM } from "./form-structure";
import axios from "axios";

const COUNT = 100;

const submit = async (count: number) => {
  for (let i = 0; i < count; i++) {
    const submission = await generate(FORM);
    const response = await axios.post(
      "http://localhost:8001/api/v1/submission",
      submission
    );
    console.log(response.data);
  }
};

submit(COUNT);