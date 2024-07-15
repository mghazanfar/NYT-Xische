import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { Article } from "../article";

const loader = () => (
  <Box
    p={20}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
    data-testid="loading-articles"
  >
    <CircularProgress size={80} color="inherit" />
    <Typography mt={6} variant="h4" fontFamily={"monospace"}>
      Fetching articles...
    </Typography>
  </Box>
);

export const ArticlesList = ({ articles = [], loading, error }) => {
  return (
    <Paper
      elevation={7}
      style={{ borderRadius: 16 }}
      data-testid={`articles-${articles}`}
    >
      <Box p={3}>
        {loading ? (
          loader()
        ) : error.length > 0 ? (
          <Box
            height={400}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            data-testid="error-loading-data"
          >
            <Typography textAlign={"center"} fontWeight={"bold"}>
              {error}
            </Typography>
          </Box>
        ) : (
          articles?.map((article) => (
            <Article article={article} key={article.id} />
          ))
        )}
      </Box>
    </Paper>
  );
};
