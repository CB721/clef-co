import React from "react";
import Waves from "../Waves";
import "./style.css";

function UserNews(props) {
    return (
        <div className="user-news">
            <div className="news-header">
                <h1 className="white">
                    News Feed
                </h1>
            </div>
            <ul className="news-list">
                {props.news.map((story, index) =>
                <li
                    key={index}
                    className="news-item white"
                    >
                        {story}
                    </li>
                )}
            </ul>
            <Waves />
        </div>
    )
}

export default UserNews;