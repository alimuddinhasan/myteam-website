import numberTriviaRepository from "../repository/numberTrivia.repository";

const getNumberTrivia = (value: number) =>
  numberTriviaRepository.getNumberTrivia(value);

export default {
  getNumberTrivia,
};
