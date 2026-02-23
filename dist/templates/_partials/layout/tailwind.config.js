import { pixelBasedPreset } from '@react-email/components';
export default {
    presets: [pixelBasedPreset],
    theme: {
        extend: {
            colors: {
                text: {
                    primary: '#111111',
                    secondary: '#323232',
                    tertiary: '#586081',
                },
                septeo: {
                    primary: '#2E3862',
                },
                button: {
                    primary: '#4D54D1',
                },
                link: {
                    primary: '#366CFC',
                },
            },
        },
    },
};
