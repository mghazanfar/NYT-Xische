import { Box, Typography } from "@mui/material";

export const PageTitle = ({ title, boxProps }) => {
  return (
    <Box {...boxProps}>
      <Typography textAlign={"center"} variant="h4" fontFamily={"monospace"}>
        {title}
      </Typography>
    </Box>
  );
};
