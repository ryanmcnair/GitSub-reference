const renderToDom = (divId, htmlToRender) => {
    const selectedContainer = document.querySelector(divId);
    selectedContainer.innerHTML = htmlToRender;
  };

const renderNav = () => {
    const navBar = `
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Overview</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="repositories.html">Repositories</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="packages.html">Packages</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="projects.html">Projects</a>
        </li>
    </ul>
    `
    renderToDom("#navbar", navBar)
}

renderProfile = () => {
    const profile = `
    <div id="profileCard" class="card" style="width: 18rem;">
        <div class="circular--portrait">
            <img id="profileImage" src="Al_Bundy.webp" class="card-img-top" alt="Al Bundy">
        </div>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    `
    renderToDom('#sidebar', profile)
}

renderFooter = () => {
    const footer = `
     <footer id="footer" class="align-self-end">
        <ul id="footerList" class="d-flex justify-content-around">
            <li id="ghLogo">
            <img
                src="github-mark-white.svg"
                width="26px"
                height="26px"
                alt=""
            />
            </li>
            <li>&#169; 2023 GitSub, Inc.</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>Help</li>
            <li>Contact GitHub</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Training</li>
            <li>Blog</li>
            <li>About</li>
        </ul>
    </footer>`

    renderToDom("#footer", footer)
}

const repositories = [
    {
        id: 1,
        name: "First project",
        description: "Describing the project",
        isPinned: true,
        language: "JavaScript",
        stars: 88,
        forks: 12
    },
    {
        id: 2,
        name: "Second project",
        description: "Describing the second project",
        isPinned: true,
        language: "TypeScript",
        stars: 99,
        forks: 44
    },
]

const renderOverview = () => {
    const overview = `
    <div id="overview">
        <h1>Overview</h1>
        <div id="overviewCard"></div>
    </div>
    <div id="overviewForm"></div>
    `
    renderToDom('#overview', overview)
}

const renderOverviewCard = (array) => {
    let domString = "";
    for (repo of array) {
        domString += `${repo.isPinned ? `
        <div class="card" style="width: 26rem;">
            <div class="card-body">
                <h5 class="card-title">${repo.name}  📌</h5>
                <p class="card-text">${repo.description}</p>
                <div id="starsForks">
                    <div class="card-link">⭐️ ${repo.stars}</div>
                    <div class="card-link">⑂ ${repo.forks}</div>
                </div>
            </div>
        </div>
        ` : ''}`
    }
    renderToDom('#overviewCard', domString)
}

const renderOverviewForm = () => {
    const overviewForm = `
    <div id="overviewForm">
        <h2>Create a new project</h2>
        <p>Coordinate, track and update your work in one place</p>
        <form>
            <div class="mb-3">
                <label for="overviewName" class="form-label">Project board name</label>
                <input type="text" class="form-control" id="overviewName">
            </div>
            <div class="mb-3">
                <label for="overviewDescription" class="form-label">Description (optional)</label>
                <textarea class="form-control" id="overviewDescription" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Create project</button>
        </form>
    </div>
    `
    renderToDom('#overviewForm', overviewForm)
}

const addOverviewListener = () => {
    const form = document.querySelector("form");

    const addOverview = (e) => {
        e.preventDefault();
    
        const randNumForLanguages = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    
        const randNumStar = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
        const randNumFork = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    
        let randLanguage = "";
    
        switch (randNumForLanguages) {
            case 1:
                randLanguage = "JavaScript";
                break;
            case 2:
                randLanguage = "TypeScript";
                break;
            case 3:
                randLanguage = "Python";
                break;
            case 4:
                randLanguage = "C#";
                break;
        }
    
        const newRepoObj = {
            id: repositories.length + 1,
            name: document.querySelector('#overviewName').value,
            description: document.querySelector('#overviewDescription').value,
            isPinned: true,
            language: randLanguage,
            stars: randNumStar,
            forks: randNumFork
        }
        repositories.push(newRepoObj);
        renderOverviewCard(repositories);
        form.reset();
    }
    form.addEventListener('submit', addOverview);
}

const renderRepositories = () => {
    const repositories = `
    <h1>Repositories</h1>
    `
    renderToDom('#repositories', repositories)
}

const renderPackages = () => {
    const packages = `
    <h1>Packages</h1>
    `
    renderToDom('#packages', packages)
}

const renderProjects = () => {
    const projects = `
    <h1>Projects</h1>
    `
    renderToDom('#projects', projects)
}

const findDiv = () => {
    var overviewEl =  document.getElementById('overview');
    var repositoriesEl =  document.getElementById('repositories');
    var packagesEl =  document.getElementById('packages');
    var projectsEl =  document.getElementById('projects');
    if (document.body.contains(overviewEl))
        {
            renderOverview();
            renderOverviewCard(repositories);
            renderOverviewForm();
            addOverviewListener();
        }
    if (document.body.contains(repositoriesEl))
        {
            renderRepositories();
        }
    if (document.body.contains(packagesEl))
        {
            renderPackages();
        }
    if (document.body.contains(projectsEl))
        {
            renderProjects();
        }
}

const init = () => {
    renderNav();
    renderProfile();
    renderFooter();
    findDiv();
}

init();