import React from "react";
import Image from "next/image"
import styles from "./styles";

const Lister = ({ results }) => (
  <ul style={styles.ul}>
    {results
      .sort((a, b) => b.score1 + b.score2 - (a.score1 + a.score2))
      .map((result, i) => (
        <li key={result.name + i} style={styles.li}>
          <div style={styles.row}>
            <div style={styles.flexCol}>
              <span style={styles.span}>
                {i + 1}:&nbsp;{result.name}
              </span>
              <span style={styles.span2}>
                <strong>{result.score1 + result.score2}</strong>
              </span>
            </div>
            <div style={styles.flex}>
              <Image src={result.img1} alt={result.team1} width="64" height="64"/>
              <span style={styles.span2}>{result.score1 || 0}</span>
            </div>
            <div style={styles.flex}>
              <Image  src={result.img2} alt={result.team2} width="64" height="64" />
              <span style={styles.span2}>{result.score2 || 0}</span>
            </div>
          </div>
        </li>
      ))}
  </ul>
);

export default Lister;
