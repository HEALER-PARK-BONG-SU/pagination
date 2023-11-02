const paginate = (followers) => {
  const itemPerPage = 10;
  let numberOfPages = Math.ceil(followers.length / itemPerPage);
  let newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    let start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });
  return newFollowers;
};

export default paginate;
