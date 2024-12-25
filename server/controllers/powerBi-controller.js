const axios = require('axios');


const accessToken = async (req,res) =>{
    try {
        const response = await fetch(`https://login.microsoftonline.com/32753c89-c3e7-47f1-84a3-f991463588c5/oauth2/v2.0/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: '01a4c2e8-16c8-4d19-9352-36437622c6b5',
                client_secret: 'nc_8Q~vyryytIAciqPxgvdqL4FFqLsbBAQIJxdmo',
                scope: 'https://analysis.windows.net/powerbi/api/.default',
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data); // Send the access token to the client
    } catch (error) {
        console.error('Error fetching access token:', error.message);
        res.status(500).json({ error: 'Failed to get access token' });
    }
}

const embbedToken = async (req,res) => {
    const { groupId, reportId, accessToken } = req.body;

    try {
        const response = await axios.post(
            `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports/${reportId}/GenerateToken`,
            { accessLevel: 'View', allowSaveAs: false },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching embed token:', error.toJSON ? error.toJSON() : error.message);
        res.status(500).json({ error: 'Failed to generate embed token' });
    }
};



module.exports = {accessToken,embbedToken};