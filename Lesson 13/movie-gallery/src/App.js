import "./App.css";
import MyAppBar from "./AppBar";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/api/movies`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);
	return (
		<>
			<MyAppBar name="Movie Gallery"></MyAppBar>
			<Box
				component="main"
				sx={{ maxWidth: 960, mx: "auto", p: 2, textAlign: "center" }}
			>
				<Typography variant="h4" gutterBottom>
					Browse Movies
				</Typography>
				<Typography variant="body1" color="text.secondary">
					We'll list a few movies below and enhance the layout step by
					step with Material UI.
				</Typography>

				{loading && <Typography>Loading movies...</Typography>}

				<Box
					aria-label="movie list"
					sx={{ display: "flex", flexDirection: "row", gap: 2 }}
					textAlign="left"
				>
					{movies.map((m) => (
						// Method 2 using Card
						<Box sx={{ flex: 1 }} key={m._id}>
							<MovieCard
								imagelink={m.imagelink}
								title={m.title}
								year={m.year}
								description={m.description}
								link={"https://www.imdb.com/title/" + m.imdbId}
								score={m.score}
								trailerUrl={m.trailerUrl}
							></MovieCard>
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
}

export default App;
