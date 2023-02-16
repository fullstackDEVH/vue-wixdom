interface ITournament {
  id: nunber;
  name: string;
  status: string;
  reward: string;
  limitParticipants: number;
  currentParticipants: number;
  duration: string;
}
const tournaments: Array<ITournament> = [
  {
    name: "Have fun and earn our NFTs",
    status: "Expired",
  },
];
export default tournaments;
