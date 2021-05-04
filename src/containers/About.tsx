import Card from "../components/Card";
import Reward from "../components/Reward";
import styles from "../styles/containers/about.module.css";

export type rewardTypes = {
  title: string;
  pledge?: number;
  text: string;
  nbLeft: number;
};

export const rewards: rewardTypes[] = [
  {
    title: "Bamboo Stand",
    pledge: 25,
    text: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you'll be added to a special Backer member list.`,
    nbLeft: 101,
  },
  {
    title: "Black Edition Stand",
    pledge: 75,
    text: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.`,
    nbLeft: 64,
  },
  {
    title: "Mahogany Special Edition",
    pledge: 200,
    text: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.`,
    nbLeft: 0,
  },
];

const About = () => {
  return (
    <Card>
      <h2 className={styles.title}>About this project</h2>
      <p className={styles.text}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className={styles.text}>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div className={styles.rewards}>
        {rewards.map(({ title, pledge, text, nbLeft }: rewardTypes) => {
          return (
            <Reward
              key={title}
              title={title}
              pledge={pledge}
              text={text}
              nbLeft={nbLeft}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default About;
