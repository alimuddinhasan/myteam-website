import { INumberTrivia } from "domain/model/numberTrivia.model";
import httpClient from "common/httpClient";

const getNumberTrivia = async (value: number): Promise<INumberTrivia> => {
  const { data } = await httpClient.get("http://numbersapi.com/" + value);
  return {
    number: value,
    trivia: data,
  };
};

export default {
  getNumberTrivia,
};
