const heading = document.querySelector('.section-title h1');
const container = document.querySelector('.container');
const display = (followers) => {
  heading.textContent = 'pagination';
  const newFollowers = followers
    .map((follower) => {
      const { avatar_url, html_url, login } = follower;
      return `<article class="card">
              <img src="${avatar_url}" alt="${login}"/>
              <h4>${login}</h4>
              <a href="${html_url}" class="btn">View Profile</a>
              </article>`;
    })
    .join('');
  container.innerHTML = newFollowers;
};

export default display;
