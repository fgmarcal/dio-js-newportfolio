async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/fgmarcal/dio-js-newportfolio/main/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}