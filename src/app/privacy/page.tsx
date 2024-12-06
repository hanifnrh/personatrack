"use client";


const Privacy = () => {
    return (
        <div className="px-8 sm:px-0 grid grid-cols-1 gap-4 py-20">
            <h1 className="text-center text-white body-bold text-xl">Privacy Policy</h1>
            <p className="text-white body-light text-center text-sm">
                Spotify was created as an open-source app that utilizes the Spotify/Last.fm/Apple Music Web API. By using this app, you consent to the use of your Spotify account username and data to display your top artists.

                Personalify does not store or collect any data, nor does it share your information with third parties. All data is used exclusively for generating your personality description.

                While you can be confident that your data is neither stored nor misused, you can revoke Personalify access through the apps page and click &quot;REMOVE ACCESS&quot; for Personalify.
            </p>

            <h1 className="text-center text-white body-bold text-xl mt-10">How This App Works</h1>
            <p className="text-white body-light text-center text-sm">
                I use the official Spotify API so I do not collect any data from your account authentication, means I am just connecting you to the Spotify official data. I generate the description using ChatGPT API. There is nothing you should worry about, your data is safe.
            </p>
        </div>
    );
};

export default Privacy;
