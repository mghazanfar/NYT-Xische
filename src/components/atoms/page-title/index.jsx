import { Box, Typography } from "@mui/material";

export const PageTitle = ({ title, boxProps }) => {
  return (
    <Box {...boxProps} data-testid="page-title">
      <Typography
        textAlign={"center"}
        variant="h4"
        fontFamily={"monospace"}
        data-testid={title}
      >
        {title}
      </Typography>
    </Box>
  );
};
