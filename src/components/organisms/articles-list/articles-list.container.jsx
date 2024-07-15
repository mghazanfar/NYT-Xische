import { useEffect, useState } from "react";
import { ArticlesList } from "../../molecules/articles-list";
import { getArticles } from "../../../api/getArticles";

export const ArticlesListContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [errorLoadingArticles, setErrorLoadingArticles] = useState("");

  useEffect(() => {
    setLoadingArticles(true);
    getArticles()
      .then((res) => setArticles(res?.data?.results))
      .catch((err) => setErrorLoadingArticles(err.toString()))
      .finally(() => {
        setLoadingArticles(false);
      });
  }, []);

  return (
    <ArticlesList
      articles={articles}
      loading={loadingArticles}
      error={errorLoadingArticles}
    />
  );
};
