import { Box, Typography, TypographyProps } from "@mui/material";
import CenticLoadingGif from "../../assets/images/centic_loading.gif";

export default function CenticLoading({
  size = 76,
  showTitle,
  title = "Loading data",
  titleProps,
}: {
  size?: number;
  title?: string;
  showTitle?: boolean;
  titleProps?: TypographyProps;
}) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        img: {
          width: size + "px",
          height: size + "px",
        },
      }}
    >
      <img src={CenticLoadingGif} alt="centic loading animation" />
      {showTitle && (
        <Typography
          fontWeight={500}
          variant="body2"
          mt={1}
          whiteSpace={"nowrap"}
          {...titleProps}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
}
