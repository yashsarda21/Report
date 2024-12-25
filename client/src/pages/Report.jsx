import { useEffect, useState } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { useAuth } from '../store/auth';

const Report = () => {
    const [embedToken, setEmbedToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // New state to track loading
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [key, setKey] = useState(0);

    const { user } = useAuth();

    const getLayoutType = () =>
        screenWidth <= 800 ? models.LayoutType.MobilePortrait : models.LayoutType.Custom;

    const fetchAccessToken = async () => {
        try {
            const response = await fetch('http://localhost:5002/api/powerbi/getAccessToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error('Error fetching access token:', error);
            return null;
        }
    };

    const fetchEmbedToken = async (token) => {
        try {
            const response = await fetch('http://localhost:5002/api/powerbi/generateEmbedToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    groupId: user.groupID,
                    reportId: user.reportID,
                    accessToken: token,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setEmbedToken(data.token);

            // Schedule token refresh before it expires
            const tokenLifetime = 25 * 60 * 1000; // 25 minutes in milliseconds
            setTimeout(() => initializeTokens(), tokenLifetime);
        } catch (error) {
            console.error('Error fetching embed token:', error);
        }
    };

    const initializeTokens = async () => {
        setIsLoading(true); // Set loading state while initializing tokens
        if (!user || !user.groupID || !user.reportID) {
            console.error("User information is missing. Cannot fetch tokens.");
            setIsLoading(false); // Stop loading if user info is missing
            return;
        }

        const token = await fetchAccessToken();
        if (token) {
            await fetchEmbedToken(token);
        } else {
            console.error("Failed to fetch access token. Embed token cannot be fetched.");
        }
        setIsLoading(false); // Stop loading after fetching tokens
    };

    useEffect(() => {
        // Reset embed token and reinitialize tokens when user changes
        setEmbedToken(null);
        initializeTokens();
    }, [user]); // Dependency on `user`

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (
                (screenWidth <= 576 && newWidth > 576) ||
                (screenWidth > 576 && newWidth <= 576)
            ) {
                setScreenWidth(newWidth);
                setKey((prevKey) => prevKey + 1);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    // Show loading message if tokens are not yet initialized
    if (isLoading || !embedToken) {
        return <div className="header">Loading...</div>;
    }

    return (
        <div className="PowerBIEmbed">
            <PowerBIEmbed
                key={key}
                embedConfig={{
                    type: 'report',
                    id: user.reportID,
                    embedUrl:
                        `https://app.powerbi.com/reportEmbed?reportId=${user.reportID}&groupId=${user.groupID}`,
                    accessToken: embedToken,
                    tokenType: models.TokenType.Embed,
                    settings: {
                        layoutType: getLayoutType(),
                    },
                }}
                cssClassName="Embed-container"
            />
        </div>
    );
};

export default Report;
