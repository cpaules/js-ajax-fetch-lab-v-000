function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  $('#results').append(`<h3>Forked Successfully!</h3><a href="https://api.github.com/repos/${repo}/forks"> ${repo}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass


  return ''
}
