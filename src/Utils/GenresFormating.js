function genresIDS (genres) {
    return genres.map(item => item.id)
}

export function genresFormating (data) {

    const newData = data.map(item => {
        item.genre_ids = genresIDS(item.genres)
        return item;
    })

    return newData;
};
