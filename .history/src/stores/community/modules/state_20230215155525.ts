export interface ExampleStateInterface {
  prop: boolean;
  role: string;
}

function state(): ExampleStateInterface {
  return {
    prop: true,
  };
}

export default state;
