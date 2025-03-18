import React from 'react';
import Sidebar from '../component/sidebar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../component/Navbar';

function Setting() {
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1 style={{ marginTop: '50px' }}>Settings</h1>
                    <Typography paragraph>
                        Welcome to the settings page of your application. Here, you can manage various configurations, user preferences, and system settings tailored to your project needs. Ensure you have the appropriate permissions to modify critical settings.
                    </Typography>
                    <Typography paragraph>
                        Below, you can find options to adjust notification preferences, integrate with other services, and configure API keys for secure access. This section allows you to customize your user experience and manage data access and application behavior.
                    </Typography>
                    <Typography paragraph>
                        For advanced settings such as API rate limits, data synchronization, and custom notifications, refer to the corresponding sections within this menu. These settings help you optimize the application's performance and maintain security compliance with your company's IT policies.
                    </Typography>
                    <Typography paragraph>
                        If you require assistance with these settings or would like to learn more about their functionalities, refer to the documentation or contact your system administrator.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Setting;
