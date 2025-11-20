import { Box, Typography } from "@mui/material";
import BackgroundImage from "../../assets/images/image2.jpg"


export default function HeaderBanner({ title, subtitle }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        {title}
      </Typography>

      <Typography variant="subtitle1" mt={1}>
        HOME / {subtitle}
      </Typography>
    </Box>
  );
}
