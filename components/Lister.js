import React from "react";
import styles from "./styles";

const Lister = (props) => {
  const { results } = props;

  return (
    <ul style={styles.ul}>
      {results.map((result, i) => (
        <li key={result.name + i} style={styles.li}>
          <div style={styles.row}>
            <div style={styles.flex}>
              <span style={styles.span}>{result.name}</span>
              <span style={styles.span2}>
                <strong>{result.score1 + result.score2}</strong>
              </span>
            </div>
            <div style={styles.flex}>
              <img style={styles.img} src={result.img1} alt={result.team1} />
              <span style={styles.span2}>{result.score1}</span>
            </div>
            <div style={styles.flex}>
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
