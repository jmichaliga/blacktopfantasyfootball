import React from "react";
import styles from "./styles";

const Lister = (props) => {
  const { results } = props;

  return (
    <ul style={styles.ul}>
      {results
        .sort((a, b) => b.score1 + b.score2 - (a.score1 + a.score2))
        .map((result, i) => (
          <li key={i} style={styles.li}>
            <div style={styles.row}>
              <div style={styles.flex}>
                <span style={styles.span}>{result.name}</span>
                <span style={styles.span2}>
                  <strong>{result.score1 + result.score2}</strong>
                </span>
              </div>
              <div style={styles.flex}>
                <span style={styles.badge}>Period {result.pd1} Shots</span>
                <img style={styles.img} src={result.img1} alt={result.team1} />
                <span style={styles.span2}>{result.score1}</span>
              </div>
              <div style={styles.flex}>
                <span style={styles.badge}>Period {result.pd2} Shots</span>
                <img style={styles.img} src={result.img2} alt={result.team2} />
                <span style={styles.span2}>{result.score2}</span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Lister;
