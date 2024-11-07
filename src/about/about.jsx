import React from 'react';
import "./about.css"

export function About() {
    return (
        <main>
            <div className="about-page">
                <div className="about card mb-3">
                    <h2>About</h2>

                    <p>
                        Have you ever lived in an apartment or dormitory building where everyone has to share the same laundry machines? With this new web application, you can easily avoid the inconveniences that come with it. With this app, you can see what laundry machines are being used, so you can know when the best time to do your laundry is.
                    </p>

                </div>

                <br />

                <div className="card mb-3">
                    <div className="row g-0">
                    <div className="gif">
                        {/* <!-- In the future, a link to an external web service will be put here that grabs a random laundry gif from GIPHY --> */}
                        <img height="100%" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODdudjlzZWN3dTFidmE5am5laHZibDcydXRwbHRzdnRkcmlpc2R6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bCvO8biVh8WyI/giphy.webp" alt="Random GIF" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Inspiration zone</h3>
                            <p className="card-text"><small className="text-body-secondary">Feeling unmotivated to do your laundry? Come back here to find a random laundry GIF and quote that will make your day!</small></p>
                            <p className="card-text">
                                <div className="quote-text">"Laundry today or naked tomorrow"</div>
                                <small className="text-body-secondary">
                                <div className="quote">~ A sign that used to be in our laundry room</div></small>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    );

}