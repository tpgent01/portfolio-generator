const profileDataArgs = process.argv.slice(2, process.argv.length);

const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };
console.log(generatePage('Jane', 'janehub'));