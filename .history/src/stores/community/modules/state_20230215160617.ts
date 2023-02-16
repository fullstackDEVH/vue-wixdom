export interface ExampleStateInterface {
  role: string;
}

function state(): ExampleStateInterface {
  return {
    role: "",
  };
}

export default state;
