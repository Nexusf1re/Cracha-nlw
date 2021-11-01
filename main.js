const LinksSocialMedias = {
  github: 'Nexusf1re',
  instagram: 'biancabaruc',
  youtube: 'BiancaRosendo1',
  facebook: 'biianca.goncalves.1',
  twitter: 'biancabaruc?s=21'
}
function changeSocialLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedias[social]}`
  }
}

changeSocialLinks()

function changePersonalInfos() {
  mainName.textContent = 'Bianca Rosendo'
  picture.src = 'Arquivos/Bia.jpg'
  titleweb.textContent = 'Best fotografer ever'
  phrase.textContent =
    'A mais linda, deslumbrante fotógrafa já existente, faça já seu orçamento com essa perfeição divina :)'
  gitName.textContent = 'Marido_dela'
}
changePersonalInfos()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedias.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //mainName.textContent = data.name
    })
}
//getGitHubProfileInfos()

//Arrow Function
