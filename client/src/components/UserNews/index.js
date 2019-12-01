import React, { useEffect, useState } from "react";
import moment from "moment";
import Zoom from 'react-reveal/Zoom';
import Waves from "../Waves";
import MonthNews from "../../pages/Assets/Data/season-news.json";
import "./style.css";

function UserNews(props) {
    const [news, setNews] = useState([]);
    const todayMonth = moment().format("MMMM");

    useEffect(() => {
        MonthNews.forEach(month => 
            handleMonthNews(month.month, month.news))
    }, []);
    function handleMonthNews(month, monthNews) {
        if (month === todayMonth) {
            setNews(news => [...news, monthNews]);
        }
    }
    useEffect(() => {
        for (let i = 0; i < props.news.length; i++) {
            if (props.news[i]) {
                routeNews(props.news[i]);
            }
        }
    }, []);
    function routeNews(item) {
        switch (Object.keys(item)[0]) {
            case 'review':
                if (item.rating.data[0] < 4) {
                    let reviewStr = "You recently rated " + item.product_name + " with only " + item.rating.data[0] + " stars.  Please contact us so we can help!";
                    handleNews(reviewStr);
                } else {
                    let reviewStr = "Thanks for submitting your review about " + item.product_name + ".  We really appreciate it!";
                    handleNews(reviewStr);
                }
                break;
            case 'order_id':
                let orderDate = moment(
                    item.checked_out_at.split("T")[0].split("-")[1] +
                    " " +
                    item.checked_out_at.split("T")[0].split("-")[2] +
                    " "
                )
                    .format(
                        "MMM Do"
                    )
                let orderStr = "How is your order from " + orderDate + " working out for you?";
                handleNews(orderStr);
                break;
            default:
                return;
        }
    }
    function handleNews(str) {
        setNews(news => [...news, str]);
    }
    return (
        <div className="user-news">
            <div className="news-header">
                <h1 className="white">
                    News Feed
                </h1>
            </div>
            <Zoom bottom cascade>
                <ul className="news-list">
                    {news.map((story, index) =>
                        <li
                            key={index}
                            className="news-item white"
                        >
                            {story}
                        </li>
                    )}
                </ul>
            </Zoom>
            <Waves />
        </div>
    )
}

export default UserNews;