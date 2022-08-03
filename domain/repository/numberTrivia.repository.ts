import { INumberTrivia } from "domain/model/numberTrivia.model";

const getNumberTrivia = async (value: number): Promise<INumberTrivia> => {
  return {
    number: value,
    trivia: "string",
  };
};

export default {
  getNumberTrivia
}