import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MovieCard2: React.FC = () => {
    return (
        <React.Fragment>
            <div className="container2">
                <div className="cellphone-container">
                    <div className="movie">
                        <div className="menu"><InsertEmoticonIcon/></div>
                        <div className="movie-img2"></div>
                        <div className="text-movie-cont">
                            <div className="mr-grid">
                                <div className="col1">
                                    <h1>Inception</h1>
                                    <ul className="movie-gen">
                                        <li>PG-13 /</li>
                                        <li>2h 28min /</li>
                                        <li>Adventure, Drama, Sci-Fi,</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid summary-row">
                                <div className="col2">
                                    <h5>SUMMARY</h5>
                                </div>
                                <div className="col2">
                                    <ul className="movie-likes">
                                        <li><InsertEmoticonIcon/>220</li>
                                        <li><MoodBadIcon/> 8</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p className="movie-description">A thief who steals corporate secrets through the use of dream-sharing technology
                                        is given the inverse task of planting an idea into the mind of a C.E.O.,
                                        but his tragic past may doom the project and his team to disaster. </p>
                                </div>
                            </div>
                            <div className="mr-grid actors-row">
                                <div className="col1">
                                    <p className="movie-actors">Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page</p>
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

export default MovieCard2;
