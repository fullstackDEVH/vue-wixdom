interface ICommunity {
  _id: number;
  img: string;
  name: string;
}

const communities: Array<ICommunity> = [
  {
    _id: 1
    img: "https://static.wixdomplanet.io/public/images/Logo-wxp.png",
    name: "Wixdom Plannet",
  },
  {
    _id: 2,
    img: "https://static.wixdomplanet.io/public/images/Logo-wxp.png",
    name: "Wixdom Plannet 2",
  },
  {
    _id: 3, 
    img: "https://static.wixdomplanet.io/public/images/Logo-wxp.png",
    name: "Wixdom Plannet 3",
  },
];
export default communities;
