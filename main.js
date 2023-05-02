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

const renderOverview = () => {
    const overview = `
    <h1>Overview</h1>
    `
    renderToDom('#overview', overview)
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