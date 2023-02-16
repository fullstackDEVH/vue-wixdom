export interface ExampleStateInterface {
  prop: boolean;
  role: string;
}

function state(): ExampleStateInterface {
  return {
    prop: true,
    role: "admin",
  };
}

export default state;
