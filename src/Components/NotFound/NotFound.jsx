import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      style={{
        height: "80dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography align="center" color="#888" variant="h4">
        There is no design
        <br />
        <br />
        Please try again later...
      </Typography>
    </Box>
  );
};

export default NotFound;
