interface ITournament {
  _id: number;
  name: string;
  status: string;
  reward: string;
  currentParticipants: number;
  limitParticipants: number;
  duration: string;
  banner: string;
}
const tournaments: Array<ITournament> = [
  {
    _id: 1,
    name: "Have fun and earn our NFTs",
    status: "Expired",
    reward: "30 NFT",
    currentParticipants: 0,
    limitParticipants: 2,
    duration: "3days",
    banner:
      "https://static.wixdomplanet.io/public/images/KOL/Cover_detail_event_KOL.png",
  },
  {
    _id: 2,
    name: "Have fun and earn our NFTs",
    status: "Expired",
    reward: "30 NFT",
    currentParticipants: 0,
    limitParticipants: 2,
    duration: "3days",
    banner:
      "https://static.wixdomplanet.io/public/images/KOL/Cover_detail_event_KOL.png",
  },
];
export default tournaments;
