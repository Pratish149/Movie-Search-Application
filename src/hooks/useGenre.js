function useGenre(selectedGenres) {
    if (selectedGenres.length < 1) return "";

    const GenreIDs = selectedGenres.map((g) => g.id);

    return GenreIDs.join(',')
}

export default useGenre;