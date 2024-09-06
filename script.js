const a = document.querySelector('a');

function getApiGitHub() {
  fetch('https://api.github.com/users/Gabrielly-Souza123/repos')
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      const container = document.querySelector('#repos-container');

      const namesToFilter = ['Pomodoro-Timer', 'projeto-pass-in-nlw'];

      container.innerHTML = '';

      data
        .filter(item => namesToFilter.includes(item.name))
        .forEach(item => {
          const a = document.createElement('a');
          a.className = 'repo-button';
          a.href = item.html_url;
          a.target = '_blank';
          a.innerHTML = item.name.toUpperCase();
          container.appendChild(a);
      });
  })
  .catch((e) => console.log(e));
}

getApiGitHub();

function getApiGitHubEtec() {
  fetch('https://api.github.com/users/Gabrielly-Souza123/repos')
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      const container = document.querySelector('#repos-container-etec');

      const namesToFilter = ['Contador', 'Portifolio', 'Parceiros-iFood'];

      container.innerHTML = '';

      data
        .filter(item => namesToFilter.includes(item.name))
        .forEach(item => {
          const a = document.createElement('a');
          a.className = 'repo-button';
          a.href = item.html_url;
          a.target = '_blank';
          a.innerHTML = item.name.toUpperCase();
          container.appendChild(a);
      });
  })
  .catch((e) => console.log(e));
}

getApiGitHubEtec();

function getApiGitHubFatec() {
  fetch('https://api.github.com/users/Gabrielly-Souza123/repos')
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      const container = document.querySelector('#repos-container-fatec');

      const namesToFilter = [];

      container.innerHTML = '';

      data
        .filter(item => namesToFilter.includes(item.name))
        .forEach(item => {
          const a = document.createElement('a');
          a.className = 'repo-button';
          a.href = item.html_url;
          a.target = '_blank';
          a.innerHTML = 'Em breve';
          container.appendChild(a);
      });
  })
  .catch((e) => console.log(e));
}

getApiGitHubFatec();
