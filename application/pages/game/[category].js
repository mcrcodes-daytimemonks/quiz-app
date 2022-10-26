import Game from "../../components/pageContainers/Game";
import getQuestionsByCategory from "../../database_queries/getQuestionsByCategory";

export const getServerSideProps = async (params) => {
  const { category, limit } = params.query;
  return {
    props: {
      questions: await getQuestionsByCategory({ category, limit }),
    },
  };
};

const Container = ({ questions }) => <Game questions={questions} />

export default Container;
