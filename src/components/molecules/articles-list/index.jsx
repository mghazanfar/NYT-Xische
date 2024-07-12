import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { Article } from "../article";

const loader = () => (
  <Box
    p={20}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
  >
    <CircularProgress size={80} color="inherit" />
    <Typography mt={6} variant="h4" fontFamily={"monospace"}>
      Fetching articles...
    </Typography>
  </Box>
);

export const ArticlesList = ({ articles = [], loading }) => {
  return (
    <Paper elevation={7} style={{ borderRadius: 16 }}>
      <Box p={3}>
        {loading
          ? loader()
          : articles?.map((article) => (
              <Article article={article} key={article.id} />
            ))}
      </Box>
    </Paper>
  );
};
