document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


function showWorkTab() {
    const workTab = document.querySelector('.work-tab');
    workTab.style.display = 'block';
}

function hideWorkTab() {
    const workTab = document.querySelector('.work-tab');
    workTab.style.display = 'none';
}



function showResumeTab() {
    const workTab = document.querySelector('.resume-tab');
    workTab.style.display = 'block';
}

function hideResumeTab() {
    const workTab = document.querySelector('.resume-tab');
    workTab.style.display = 'none';
}



function showLinkedinTab() {
    const workTab = document.querySelector('.linkedin-tab');
    workTab.style.display = 'block';
}

function hideLinkedinTab() {
    const workTab = document.querySelector('.linkedin-tab');
    workTab.style.display = 'none';
}



function showLinksTab() {
    const workTab = document.querySelector('.links-tab');
    workTab.style.display = 'block';
}

function hideLinksTab() {
    const workTab = document.querySelector('.links-tab');
    workTab.style.display = 'none';
}


function showSkillsTab() {
    const workTab = document.querySelector('.skills-tab');
    workTab.style.display = 'block';
}

function hideSkillsTab() {
    const workTab = document.querySelector('.skills-tab');
    workTab.style.display = 'none';
}


function showEmailTab() {
    const workTab = document.querySelector('.email-tab');
    workTab.style.display = 'block';
}

function hideEmailTab() {
    const workTab = document.querySelector('.email-tab');
    workTab.style.display = 'none';
}



function showProjectsTab() {
    const workTab = document.querySelector('.projects-tab');
    workTab.style.display = 'block';
}

function hideProjectsTab() {
    const workTab = document.querySelector('.projects-tab');
    workTab.style.display = 'none';
}

function showGitHubTab() {
    const workTab = document.querySelector('.github-tab');
    workTab.style.display = 'block';
}

function hideGitHubTab() {
    const workTab = document.querySelector('.github-tab');
    workTab.style.display = 'none';
}

function showBehanceTab() {
    const workTab = document.querySelector('.behance-tab');
    workTab.style.display = 'block';
}

function hideBehanceTab() {
    const workTab = document.querySelector('.behance-tab');
    workTab.style.display = 'none';
}




function showYoutube() {
    const workTab = document.querySelector('.youtube-tab');
    workTab.style.display = 'block';
}

function hideYoutube() {
    const workTab = document.querySelector('.youtube-tab');
    workTab.style.display = 'none';
}

function showNote() {
    const workTab = document.querySelector('.note-tab');
    workTab.style.display = 'block';
}

function hideNote() {
    const workTab = document.querySelector('.note-tab');
    workTab.style.display = 'none';
}


function showThreeD() {
    const workTab = document.querySelector('.threed-tab');
    workTab.style.display = 'block';
}

function hideThreeD() {
    const workTab = document.querySelector('.threed-tab');
    workTab.style.display = 'none';
}

function showNote2() {
    const workTab = document.querySelector('.note-tab2');
    workTab.style.display = 'block';
}

function hideNote2() {
    const workTab = document.querySelector('.note-tab2');
    workTab.style.display = 'none';
}

function showJR() {
    const workTab = document.querySelector('.jr-tab');
    workTab.style.display = 'block';
}

function hideJR() {
    const workTab = document.querySelector('.jr-tab');
    workTab.style.display = 'none';
}

function showNote3() {
    const workTab = document.querySelector('.note-tab3');
    workTab.style.display = 'block';
}

function hideNote3() {
    const workTab = document.querySelector('.note-tab3');
    workTab.style.display = 'none';
}

function showGames() {
    const workTab = document.querySelector('.games-tab');
    workTab.style.display = 'block';
}

function hideGames() {
    const workTab = document.querySelector('.games-tab');
    workTab.style.display = 'none';
}

function showNote4() {
    const workTab = document.querySelector('.note-tab4');
    workTab.style.display = 'block';
}

function hideNote4() {
    const workTab = document.querySelector('.note-tab4');
    workTab.style.display = 'none';
}

fetch("https://api.github.com/users/ARitaNevesR/repos")
.then(response => response.json())
.then(data => {
  let reposHTML = "<h2 style='color: white; font-size: 1.7rem;'>Repositórios</h2><ul>";
  data.forEach(repo => {
    reposHTML += `
      <li>
        <a href="${repo.html_url}" target="_blank" class="repo-link">
          <span class="repo-name">${repo.name}</span>
          <span class="repo-description">${repo.description ? repo.description : 'No description available'}</span>
        </a>
      </li>
    `;
  });
  reposHTML += "</ul>";
  document.getElementById("github-repos").innerHTML = reposHTML;
})
.catch(error => console.error("Error fetching GitHub repos:", error));



function checkForm() {
    let form = document.getElementById("contactForm");
    if (form.checkValidity()) {
        const workTab = document.querySelector('.confirmation');
        workTab.style.display = 'block';
    } else {
        alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
    }
}

function hideConfirmation() {
    const workTab = document.querySelector('.confirmation');
    workTab.style.display = 'none';
}


function changePT() {
    const ptElements = document.querySelectorAll('.pt');
    ptElements.forEach(el => {
        el.style.display = 'block';
    });
}

function hideENG() {
    const engElements = document.querySelectorAll('.eng');
    engElements.forEach(el => {
        el.style.display = 'none';
    });
}

function changeENG() {
    const engElements = document.querySelectorAll('.eng');
    engElements.forEach(el => {
        el.style.display = 'block';
    });
}

function hidePT() {
    const ptElements = document.querySelectorAll('.pt');
    ptElements.forEach(el => {
        el.style.display = 'none';
    });
}
