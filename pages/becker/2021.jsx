import styles from "../../components/styles";
import Lister from "../../components/Lister";
import { becker2021 } from "../../consts";

const Index2021 = () => {

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Becker Fam 2021 Unofficial Draft Order</h1>
        <Lister results={becker2021} />
      <h4>
        Draft Results are determined by the 2021 Week 3 Games of the NFL
        Preseason.
      </h4>
      <p style={styles.p}>
        By the selection above, the total number of points accumulated by those
        two teams in their designated game combined will rank the players in
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

export default Index2021;
