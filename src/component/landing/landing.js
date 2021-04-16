import React from "react";
import "./landing.css";
import singers from "../../data/singersLogin";
import { Link } from "react-router-dom";

function Landing() {
	return (
		<div className="landing">
			<div className="landing__left">
				<div className="landing__title">SMusic for everyone</div>
				<div className="landing__subtitle">
					Millions of songs. No credit card needed
				</div>
				<Link to="/signin" className="landing__link">
					<div className="landing__button">Login with SMusic</div>
				</Link>
			</div>
			<div className="landing__middle">
				<img
					className="landing__img"
					src="https://res.cloudinary.com/maivw/image/upload/v1618450187/konstantinos-hasandras-aivbDhWuFyw-unsplash_liialg.jpg"
					alt="music player"
				/>
				<div className="landing__singers">
					{singers?.map((singer) => (
						<div className="landing__singer" key={singer.id}>
							<img
								src={singer.imgUrl}
								alt="singer"
								className="landing__singer-img"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="landing__right">
				<img
					className="landing__musicNote"
					src="https://img.pngio.com/turquoise-musical-notes-typography-no-background-by-gdj-country-music-png-and-screensaver-1354_2342.png"
					alt="music note"
				/>
			</div>
		</div>
	);
}

export default Landing;
