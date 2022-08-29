import React from "react";
import Image from "next/image";
import styles from "./styles";

const Lister = ({ results }) => (
  <ul style={styles.ul}>
    {results
      .sort((a, b) => (b.score1 + b.score2) - (a.score1 + a.score2))
      .map((result, i) => (
        <li key={result.name + i} style={styles.li}>
          <div style={styles.row}>
            <div style={styles.flex}>
              <span style={styles.span}>{i+1}: {result.name}</span>
              <span style={styles.span2}>
                <strong>{result.score1 + result.score2}</strong>
              </span>
            </div>
            <div style={styles.flex}>
              <Image
                width="64"
                height="64"
                style={styles.img}
                src={`/${result.team1}.gif`}
                alt={result.team1}
              />
              <span style={styles.span2}>{result.score1}</span>
            </div>
            <div style={styles.flex}>
              <Image
                width="64"
                height="64"
                style={styles.img}
                src={`/${result.team2}.gif`}
                alt={result.team2}
              />
              <span style={styles.span2}>{result.score2}</span>
            </div>
          </div>
        </li>
      ))}
  </ul>
);

export default Lister;
