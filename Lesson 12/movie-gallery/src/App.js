import "./App.css";
import MyAppBar from "./AppBar";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import movies from "./data/movies.json"

// Commented out as we shift to using json instead
// const MOVIES = [
// 	{
// 		imdbId: "tt0110357",
// 		title: "The Lion King",
// 		year: 1994,
// 		description:
// 			"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
// 		imagelink:
// 			"https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_.jpg",
// 		score: 2,
// 		trailerUrl:"https://youtu.be/lFzVJEksoDY"
// 	},
// 	{
// 		imdbId: "tt2294629",
// 		title: "Frozen",
// 		year: 2013,
// 		description:
// 			"Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna's sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.",
// 		imagelink:
// 			"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
// 		score: 4,
// 		trailerUrl:"https://youtu.be/TbQm5doF_Uc"
// 	},
// 	{
// 		imdbId: "tt4154796",
// 		title: "Avengers: Endgame",
// 		year: 2019,
// 		description:
// 			"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
// 		imagelink:
// 			"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
// 		score: 5,
// 		trailerUrl:"https://youtu.be/TcMBFSGVi1c"
// 	},
// ];

function App() {
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
				<Box
					aria-label="movie list"
					sx={{ display: "flex", flexDirection: "row", gap: 2 }}
					textAlign="left"
				>
					{movies.map((m) => (
						// Method 1 using box
						// <Box
						// 	key={m.imdbId}
						// 	sx={{ py: 1, borderBottom: "1px solid #e5e7eb" }}
						// >
						// 	<Typography
						// 		variant="subtitle1"
						// 		sx={{ fontWeight: 700 }}
						// 	>
						// 		{m.title}
						// 	</Typography>
						// 	<Typography variant="body2" color="text.secondary">
						// 		{m.year}
						// 	</Typography>
						// </Box>
						// ------------------------------------------------
						// Method 2 using Card
						<Box sx={{ flex: 1 }}>
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
