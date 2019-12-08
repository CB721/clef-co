import React, { useEffect, useState } from "react";
import moment from "moment";
import Zoom from 'react-reveal/Zoom';
import Waves from "../Waves";
import MonthNews from "../../pages/Assets/Data/season-news.json";
import "./style.css";

function UserNews(props) {
    const [news, setNews] = useState([]);
    const todayMonth = moment().format("MMMM");
    const today = moment().format("YYYY-MM-DDTHH:mm:ss");

    useEffect(() => {
        for (let i = 0; i < MonthNews.length; i++) {
            if (MonthNews[i] === todayMonth) {
                setNews(news => [...news, MonthNews[i]]);
            }
        }
    }, []);
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
            case 'form_id':
                if (moment(today).diff(item.created_at, 'days') < 2) {
                    let contactStr = "We have received your support ticket about " + item.product_name + ".  Our support team will reach out to you soon!";
                    handleNews(contactStr);
                } else if (moment(today).diff(item.created_at, 'days') > 2 && moment(today).diff(item.created_at, 'days') < 7) {
                    let contactStr = "We haven't heard back from you. Where you able to get your " + item.product_name + " up and running?";
                    handleNews(contactStr);
                } else {
                    let contactStr = "Our customer service team is available 24/7 and will give you expert advice.  We know all of the products we sell inside and out and would love to help you!";
                    handleNews(contactStr);
                }
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