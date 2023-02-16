interface ITournament {
  name: string;
  status: string;
  reward: number;
}
const tournaments: Array<ITournament> = [
  {
    name: "Have fun and earn our NFTs",
    status: "Expired",
  },
];
export default tournaments;
