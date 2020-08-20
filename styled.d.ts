// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            appBackground: string;
            text: string;
            cardBackground: string;
            linkHover: string;
            cardBorder: string;
        };
    }
}
