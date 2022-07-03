export const movieReviewGenresConverter = (data) => {

  return data.map(item => {
    return item.name
  }).join(", ");
};  