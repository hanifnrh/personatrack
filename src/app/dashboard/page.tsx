"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
    const [artists, setArtists] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [personality, setPersonality] = useState<string | null>(null); // State to hold ChatGPT's response

    useEffect(() => {
        // Get token from cookies
        const getCookie = (name: string) => {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? match[2] : null;
        };

        const token = getCookie('access_token');
        if (!token) {
            window.location.href = '/'; // Redirect to login if no token
            return;
        }

        const fetchTopArtists = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(`Error: ${response.status} - ${errorData.error.message}`);
                    setLoading(false);
                    return;
                }

                const data = await response.json();
                setArtists(data.items); // Store top artists
                setLoading(false);

                // Prepare the content to send to ChatGPT
                const artistNames = data.items.map((artist: any) => artist.name).join(", ");
                const genres = data.items.flatMap((artist: any) => artist.genres).join(", ");

                // Send data to ChatGPT API
                const chatResponse = await fetchChatGPT(artistNames, genres);
                setPersonality(chatResponse); // Store the response from ChatGPT
            } catch (error) {
                console.error('Error fetching top artists', error);
                setError('Failed to fetch top artists. Please try again later.');
                setLoading(false);
            }
        };

        fetchTopArtists();
    }, []);

    const fetchChatGPT = async (artistNames: string, genres: string) => {
        const url = 'https://chatgpt-42.p.rapidapi.com/gpt4';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '23380cf958mshacfe5b08a78621ap1efa9ejsnf3a75df334e7',
                'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: `Based on the following artists and genres: ${artistNames}, ${genres}, can you describe my personality? Describe in paragraph not in points, also define what animal am I (just one animal) and what celebrity am I (just one celebrity)`
                    }
                ],
                web_access: false
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result.result || 'I couldn\'t get a personality description at the moment.'; // Ensure response contains the expected result
        } catch (error) {
            console.error('Error fetching from ChatGPT', error);
            return 'Failed to get a personality description.';
        }
    };

    return (
        <div className="px-6 sm:px-0 grid grid-cols-1 gap-4 py-10">
            <h1 className="text-center text-white body-bold text-xl">Your Top Artists</h1>
            <div className="">
                {loading ? (
                    <p className="text-center body-light text-white">Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <ul className="grid grid-cols-2 gap-2">
                        {artists.map((artist) => (
                            <li key={artist.id} className="flex gap-2 bg-white bg-opacity-10 rounded-xl p-2">
                                <img src={artist.images[0]?.url} alt={artist.name} className="w-10 h-10 rounded-md" />
                                <div className="text-xs text-white">
                                    <p className="body">{artist.name}</p>
                                    <p className="line-clamp-1 body-light">{artist.genres.join(', ')}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <h2 className="text-center text-white body-bold text-xl mt-10">Your Personality Based on Your Top Artists:</h2>
            {personality ? (
                <p className="text-white body-light text-justify text-sm">{personality}</p>
            ) : (
                <p className="text-center body-light text-white">Loading personality description...</p>
            )}
        </div>
    );
};

export default Dashboard;
