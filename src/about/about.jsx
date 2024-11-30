import React from 'react';
import "./about.css"

import apiKey from "./apiKey.json";

export function About() {

    // get ready for the calls to an external web service for the image and quote
    const [imageUrl, setImageUrl] = React.useState("gif_placeholder.png");
    const [quote, setQuote] = React.useState("loading...");
    const [quoteAuthor, setQuoteAuthor] = React.useState("loading...");

    let i;

    React.useEffect(() => {

        fetch(`https://tenor.googleapis.com/v2/search?q=laundry&key=${apiKey.key}&limit=1&random=true&contentfilter=medium&media_filter=gif&ar_range=standard`)
            .then((response) => response.json())
            .then((data) => {

                const gifUrl = data.results[0].media_formats.gif.url;

                setImageUrl(gifUrl);
            })
            .catch();

        const randomNum = Math.floor(Math.random() * 15) + 1;

        fetch('/api/quotes')
            .then((response) => response.json())
            .then((quotes) => {
                setQuote(quotes[randomNum].quote);
                setQuoteAuthor(quotes[randomNum].author);
            })
            .catch();
            
    }, [])
    

    return (
        <main>
            <div className="about-page">
                <div className="about card">
                    <h2>About</h2>

                    <p>
                        Have you ever lived in an apartment or dormitory building where everyone has to share the same laundry machines? With this new web application, you can easily avoid the inconveniences that come with it. With this app, you can see what laundry machines are being used, so you can know when the best time to do your laundry is.
                    </p>

                </div>

                <br />

                <div className="card">
                    <div className="inspiration">
                        <img className="gif" height="100%" src={imageUrl} alt="Random GIF" />
                        <div className="card-body">
                            <h2 className="card-title">Inspiration zone</h2>
                            <p className="card-text text-body-secondary">
                                Feeling unmotivated to do your laundry? Come back here to find a random laundry GIF and quote that will make your day!
                            </p>
                            <p className="card-text">
                                <div className="quote-text">“{quote}”</div>
                                <p className="text-body-secondary">
                                    <div className="quote">~ {quoteAuthor}</div>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

}