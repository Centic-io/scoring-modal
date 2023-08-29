import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import scoreIndicator5 from "@centic-modal/assets/images/levels/poor.png";
import scoreIndicator4 from "@centic-modal/assets/images/levels/fair.png";
import scoreIndicator3 from "@centic-modal/assets/images/levels/good.png";
import scoreIndicator2 from "@centic-modal/assets/images/levels/very_good.png";
import scoreIndicator1 from "@centic-modal/assets/images/levels/exceptional.png";

type Props = {
  score: number;
  text?: string;
};
type scoreConfig = {
  color: string;
  image: string;
  text: string;
};
export const getWalletScoreConfig = (
  score: number
): scoreConfig | undefined => {
  if (score < 300 || score > 850) {
    return;
  }
  if (score <= 579) {
    return {
      color: "#DD6D3E",
      text: "Poor",
      image: scoreIndicator5,
    }; //Poor
  }
  if (score <= 669) {
    return {
      color: "#EDC022",
      text: "Fair",
      image: scoreIndicator4,
    }; //Fair
  }
  if (score <= 739) {
    return {
      color: "#9C4FFF",
      text: "Good",
      image: scoreIndicator3,
    }; //Good
  }
  if (score <= 799) {
    return {
      color: "#00B5F9",
      text: "Very Good",
      image: scoreIndicator2,
    }; //Very Good
  }
  if (score <= 850) {
    return {
      color: "#00FF9E",
      text: "Exceptional",
      image: scoreIndicator1,
    }; //Exceptional
  }
};

export default function ScoreDisplay({ score, text }: Props) {
  const scoreConfig = useMemo(() => {
    const config = getWalletScoreConfig(score);
    return config;
  }, [score]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ":hover": {
          "& #centic-modal-score-display": {
            transform: "rotateX(90deg)  translate(0px, 35px)",
            opacity: 0,
          },
          "& #centic-modal-text-display": {
            transform: "  translate(0px, 0px)",
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          height: "58px",

          overflowY: "hidden",
        }}
      >
        <Typography
          id="centic-modal-text-display"
          variant="h2"
          my={2}
          color={scoreConfig?.color}
          textAlign={"center"}
          sx={{
            transition: "all linear .3s",
            transform: "translate(0px, -50px)",
            opacity: 0,
          }}
        >
          {scoreConfig?.text}
        </Typography>
        <Typography
          id="centic-modal-score-display"
          variant="h2"
          my={2}
          color={scoreConfig?.color}
          textAlign={"center"}
          sx={{
            transition: "all linear .3s",
            transform: "translate(0px, -35px)",
            opacity: 1,
          }}
        >
          {score}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
        }}
      >
        {scoreConfig && (
          <img
            src={scoreConfig.image}
            style={{
              width: "240px",
              height: "80px",
              position: "relative",
              zIndex: 2,
            }}
            alt="centic-score-display"
          />
        )}
        <Box
          sx={{
            position: "absolute",
            width: "0px",
            height: "0px",
            top: "50%",
            left: "50%",
            boxShadow: `0px 0px 50px 35px ${scoreConfig!.color}`,
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
