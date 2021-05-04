import { useEffect, useState } from "react";
import Card from "../components/Card";
import ResultCard from "../components/ResultCard";
import styles from "../styles/containers/results.module.css";
import helpers from "../styles/helpers/helpers.module.css";

type resultsInfoType = {
  title: string;
  text: string;
};

const Results = () => {
  const [progressionWidth, setProgressionWidth] = useState<string>("0%");
  const [
    isHoveringProgressionStatus,
    setIsHoveringProgressionStats,
  ] = useState<boolean>(false);

  const resultsInfo: resultsInfoType[] = [
    { title: "$89,914", text: "of $100,000 backed" },
    {
      title: "5,007",
      text: "total backers",
    },
    { title: "56", text: "days left" },
  ];

  useEffect(() => {
    //Faking how I'd process to take value from DB and insert it dynamically to the design
    // The values would be from the DB instead of static
    const progressionPercentage = `${Math.round((89914 * 100) / 100000)}%`;
    setProgressionWidth(progressionPercentage);
  }, []);

  return (
    <Card>
      <div className={styles.result__row}>
        {resultsInfo &&
          resultsInfo.map(({ title, text }: resultsInfoType) => {
            return <ResultCard key={title} title={title} text={text} />;
          })}
      </div>
      <div
        className={styles.progression}
        onMouseEnter={() => setIsHoveringProgressionStats(true)}
        onMouseLeave={() => setIsHoveringProgressionStats(false)}
      >
        <span
          style={{ width: progressionWidth }}
          className={styles.progression__result}
        />

        <div
          className={`${styles.progression__review} ${
            isHoveringProgressionStatus && helpers.showContent
          }`}
          style={{ left: progressionWidth }}
        >
          <span>{`${resultsInfo[0].title} / $100,000`}</span>
          <span>{`${progressionWidth}`} 🎉</span>
        </div>
      </div>
    </Card>
  );
};

export default Results;
