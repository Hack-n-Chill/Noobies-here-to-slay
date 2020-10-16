import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './Room.css';
import queryString from "query-string";

export const Room = ({ location }) => {
    const [room, setRoom] = useState('');

    const [appState, setAppState] = useState({
        loading: false,
        rooms: [],
    });
    const { name } = queryString.parse(location.search);

    useEffect(() => {
        setAppState({ loading: true , rooms: []});
        const apiUrl = "http://localhost:5000/room";
        axios.get(apiUrl).then((repos) => {
            const data = repos.data;
            console.log(data);
            setAppState({loading: false, rooms: data});
        });
    }, [setAppState]);

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <ul>
                    <h2 className='heading'>Available Rooms</h2>
                    { !appState.loading && appState.rooms.length === 0 ? (<span className='activeItem'>No Room Found</span>)
                        : appState.rooms.map((room) => {
                        return (
                            <li className='list'>
                                <span className='activeItem'>{room}</span>
                                <Link onClick={e => (!room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                    <button className={'button mt-20'} type="submit">Go</button>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <h2 className='heading'>Create a Room</h2>
                    <div>
                        <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                    </div>
                    <Link onClick={e => (!room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className={'button mt-20'} type="submit">Create</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
