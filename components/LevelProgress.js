import React from "react";
import styles from "../styles/Home.module.css";
import ActiveBadge from "../public/imgs/badge-active.png";
import LockedBadge from "../public/imgs/badge.png";
import LockIcon from "@material-ui/icons/Lock";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function LevelProgress({ UserOverall }) {
  const PlayerLevels = [
    { level: 0, requiredOverall: 0 },
    { level: 1, requiredOverall: 10 },
    { level: 2, requiredOverall: 20 },
    { level: 3, requiredOverall: 30 },
    { level: 4, requiredOverall: 40 },
    { level: 5, requiredOverall: 50 },
    { level: 6, requiredOverall: 60 },
    { level: 7, requiredOverall: 70 },
    { level: 8, requiredOverall: 80 },
    { level: 9, requiredOverall: 90 },
    { level: 10, requiredOverall: 100 },
    { level: 11, requiredOverall: 110 },
    { level: 13, requiredOverall: 130 },
    { level: 14, requiredOverall: 140 },
    { level: 15, requiredOverall: 150 },
    { level: 16, requiredOverall: 160 },
    { level: 17, requiredOverall: 170 },
    { level: 18, requiredOverall: 180 },
    { level: 19, requiredOverall: 190 },
    { level: 20, requiredOverall: 200 },
  ];

  const handleCurrentLevel = (elements, index) => {
    if (UserOverall === 200) {
      return (
        <>
          <h5>Completed</h5>
          {index !== 19 && (
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                width: "184px",
                position: "absolute",
                top: "13%",
                left: "58px",
              }}
            />
          )}
        </>
      );
    }
    if (
      elements[index + 1] &&
      elements[index + 1].requiredOverall > UserOverall
    ) {
      const lastDigit = UserOverall % 10;
      const progress = lastDigit * 10;
      return (
        <>
          <h5 className={styles.currentLevelTitle}>Current level</h5>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              width: "171px",
              position: "absolute",
              top: "13%",
              left: "65px",
              backgroundColor: "#000000",
            }}
          />
        </>
      );
    } else {
      if (index !== 19) {
        return (
          <>
            <h5>Completed</h5>
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                width: "184px",
                position: "absolute",
                top: "13%",
                left: "58px",
              }}
            />
          </>
        );
      }
    }
  };

  return (
    <div className={styles.userLevelProgress}>
      {PlayerLevels.map((item, index, elements) => {
        return (
          <Box
            key={item.level}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "150px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {item.requiredOverall <= UserOverall ? (
              <>
                <span className={styles.level}>{item.level}</span>
                {handleCurrentLevel(elements, index)}
                <img
                  className={styles.activeBadge}
                  src={ActiveBadge.src}
                  alt="Badge for completed level"
                />
              </>
            ) : (
              <>
                {elements[index - 1] &&
                elements[index - 1].requiredOverall <= UserOverall &&
                elements[index].requiredOverall >= UserOverall ? (
                  <span className={styles.level}>{item.level}</span>
                ) : (
                  <span className={styles.level}>
                    <LockIcon />
                  </span>
                )}

                <h5>Locked</h5>
                {index !== 19 && (
                  <LinearProgress
                    variant="determinate"
                    value={100}
                    color="inherit"
                    sx={{
                      width: "153px",
                      position: "absolute",
                      top: "13%",
                      left: "46px",
                      backgroundColor: "#465173",
                    }}
                  />
                )}
                <img
                  className={styles.activeBadge}
                  src={LockedBadge.src}
                  alt="Badge for completed level"
                />
              </>
            )}
          </Box>
        );
      })}
    </div>
  );
}

export default LevelProgress;
