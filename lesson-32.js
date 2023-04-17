
const reposList = document.getElementById("repositories-list");

fetch(`https://api.github.com/users/irynazelisko/repos`)
  .then((response) => response.json())
  .then((repos) => {
    repos.forEach((repo) => {
      const eachRepo = document.createElement("div");
      eachRepo.style.border = '1px solid black';
      eachRepo.style.padding = '10px';
      eachRepo.style.marginBottom = '15px';
     
      const repoLink = document.createElement("a");
      repoLink.textContent = repo.full_name;
      repoLink.href = repo.html_url;
      repoLink.style.textDecoration = 'underline';
      eachRepo.appendChild(repoLink);

      if (repo.description) {
        const description = document.createElement("p");
        description.textContent = repo.description;
        eachRepo.appendChild(description);
        description.style.margin = '0';
      }

      reposList.appendChild(eachRepo);
    });
  });
 

       




