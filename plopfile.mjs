const plop = (plop) => {
  // controller generator
  plop.setGenerator("component", {
    description: "new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "react component name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{properCase name}}",
        base: "./plop-templates/react-component",
        templateFiles: "./plop-templates/react-component/**/*.hbs",
        verbose: true,
      },
    ],
  });
};

export default plop;
