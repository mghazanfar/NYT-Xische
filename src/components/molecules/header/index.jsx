import { Box, Button, Typography } from "@mui/material";
import { Logo } from "../../atoms/svgs/logo";

export const Header = () => {
  return (
    <Box pb={0.5} borderBottom="2px solid black">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        pb={10}
        borderBottom="2px solid black"
      >
        <Box width={300}>
          <Typography>Friday, July 12, 2024</Typography>
          <Typography>Popular Articles</Typography>
        </Box>
        <Box flex={1} display={"flex"} justifyContent={"center"}>
          <Logo width={485} />
        </Box>
        <Box display={"flex"} width={300}>
          <Button size="small">Subscribe For $0.25/Week</Button>
          <Button size="small">Login</Button>
        </Box>
      </Box>
    </Box>
  );
};
