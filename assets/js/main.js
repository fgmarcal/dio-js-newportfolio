function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location

    // const phone = document.getElementById('profile.phone');
    // phone.innerText = profileData.phone
    // phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}


function updateHardSkills(profileData) {

    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education');
    education.innerHTML = profileData.education.map(educ => {
        return `
            <li>
                <p class="uni">${educ.name}</p>
                <p class="time">${educ.time}</p>
            </li>
        `
    }).join('');
}


function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.projects.map(project => {
        return `
            <li>
                <span class="title github">${project.repo}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('');
}


(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateLanguages(profileData);
    updateHardSkills(profileData);
    updateEducation(profileData);
    updatePortfolio(profileData);
})()
