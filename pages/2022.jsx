import styles from "../components/styles";
import Lister from "../components/Lister";
import { btff2022 } from "../consts";

const Index = () => {
  const results = btff2022;

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>BTFF 2022 Unofficial Draft Order</h1>
      <Lister results={results} />
      <h4>
        Draft Results are determined by the 2022 Game 3 of the NFL Preseason.
      </h4>
      <p style={styles.p}>
        By the selection above, the total number of shots accumulated by those
        two teams in their designated periods combined will rank the players in
        order of which they will make their selections.
      </p>
      <p style={styles.p}>
        If by chance there are any ties, those within the tie have the
        opportunity to resolve in any creative way possible.
      </p>
      <p style={styles.p}>
        If this doesn&apos;t come to a resolution, another random ranking will
        determine those slots.
      </p>
    </div>
  );
};

export default Index;
