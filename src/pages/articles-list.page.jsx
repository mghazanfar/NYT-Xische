import { Box } from "@mui/material";
import { Header } from "../components/molecules/header";
import { PageTitle } from "../components/atoms/page-title";
import { ArticlesListContainer } from "../components/organisms/articles-list/articles-list.container";

export const ArticlesListPage = () => {
  return (
    <Box height={"100vh"} p={10} data-testid="articles-page">
      <Header />
      <PageTitle
        title="Most Popular Articles"
        boxProps={{ mt: 5 }}
        data-testid="articles-page-title"
      />
      <Box mt={3}>
        <ArticlesListContainer />
      </Box>
    </Box>
  );
};
