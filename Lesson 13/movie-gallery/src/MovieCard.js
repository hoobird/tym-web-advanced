import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button"
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

export default function MovieCard({
	imagelink,
	title,
	year,
	description,
	link,
	score,
	trailerUrl,
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleEnterCard = () => {
		setIsFlipped(true);
		console.log("hovered");
	};
	const handleLeaveCard = () => {
		setIsFlipped(false);
		console.log("unhovered");
	};
	return (
		<Box
			sx={{ width: 300, cursor: "pointer", perspective: "1000px" }}
			onMouseEnter={handleEnterCard}
			onMouseLeave={handleLeaveCard}
		>
			<Box
				sx={{
					position: "relative",
					transformStyle: "preserve-3d",
					transition: "transform 0.5s ease",
					height: 420,
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
				}}
			>
				<Card
					variant="outlined"
					sx={{
						position: "absolute",
						inset: 0,
						backfaceVisibility: "hidden",
						overflow: "hidden",
						width: 300,
						borderRadius: 2,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							image={imagelink}
							alt="Movie poster"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								{title}
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: "text.secondary" }}
							>
								{year}
							</Typography>
							<Rating name="read-only" value={score} readOnly />
							<Typography
								variant="body2"
								sx={{ color: "text.secondary" }}
							>
								{description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card
					variant="outlined"
					sx={{
						position: "absolute",
						inset: 0,
						backfaceVisibility: "hidden",
						borderRadius: 2,
						overflow: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					<Box sx={{ width: "100%", height: 200 }}>
						{trailerUrl ? (
							<ReactPlayer
								src={trailerUrl}
								width="100%"
								height="100%"
								controls
								light={imagelink}
							/>
						) : (
							<Typography sx={{ color: "white", p: 2 }}>
								No trailer available
							</Typography>
						)}
					</Box>
					<CardContent>
						<Typography
							variant="subtitle2"
							sx={{ color: "black", fontWeight: 700 }}
						>
							Trailer Preview
						</Typography>
						<Typography variant="body2" sx={{ color: "black" }}>
							Click the thumbnail to play.
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="contained" href={link}>Visit IMDB Page</Button>
					</CardActions>
				</Card>
			</Box>
		</Box>
	);
}
