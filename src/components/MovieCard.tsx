import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MovieCard: React.FC = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="cellphone-container">
                    <div className="movie">
                        <div className="menu"><InsertEmoticonIcon/></div>
                        <div className="movie-img"></div>
                        <div className="text-movie-cont">
                            <div className="mr-grid">
                                <div className="col1">
                                    <h1>Pulp Fiction</h1>
                                    <ul className="movie-gen">
                                        <li>R /</li>
                                        <li>2h 34m /</li>
                                        <li>Crime, Drama, </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid summary-row">
                                <div className="col2">
                                    <h5>SUMMARY</h5>
                                </div>
                                <div className="col2">
                                    <ul className="movie-likes">
                                        <li><InsertEmoticonIcon/>124</li>
                                        <li><MoodBadIcon/> 3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p className="movie-description">The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in
                                        four tales of violence and redemption. </p>
                                </div>
                            </div>
                            <div className="mr-grid actors-row">
                                <div className="col1">
                                    <p className="movie-actors">John Travolta, Uma Thurman, Samuel L. Jackson</p>
                                </div>
                            </div>
                            <div className="mr-grid action-row">
                                <div className="col2">
                                    <div className="watch-btn"><h4><PlayArrowIcon/>WATCH
                                        TRAILER</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
)
    ;
};

export default MovieCard;
