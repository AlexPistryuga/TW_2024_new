import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MovieCard3: React.FC = () => {
    return (
        <React.Fragment>
            <div className="container3">
                <div className="cellphone-container">
                    <div className="movie">
                        <div className="menu"><InsertEmoticonIcon/></div>
                        <div className="movie-img3"></div>
                        <div className="text-movie-cont">
                            <div className="mr-grid">
                                <div className="col1">
                                    <h1>The Gentlemen</h1>
                                    <ul className="movie-gen">
                                        <li>R /</li>
                                        <li>2h 53min /</li>
                                        <li>Action, Crime,</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid summary-row">
                                <div className="col2">
                                    <h5>SUMMARY</h5>
                                </div>
                                <div className="col2">
                                    <ul className="movie-likes">
                                        <li><InsertEmoticonIcon/>258</li>
                                        <li><MoodBadIcon/> 20</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p className="movie-description">An American expat tries to sell off his highly profitable marijuana empire in London,
                                        triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.</p>
                                </div>
                            </div>
                            <div className="mr-grid actors-row">
                                <div className="col1">
                                    <p className="movie-actors">Matthew McConaughey, Charlie Hunnam, Michelle Dockery</p>
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

export default MovieCard3;
