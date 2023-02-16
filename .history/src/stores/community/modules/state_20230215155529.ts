export interface ExampleStateInterface {
  prop: boolean;
  role: string;
}

function state(): ExampleStateInterface {
  return {
    prop: true,
    role: "",
  };
}

export default state;
