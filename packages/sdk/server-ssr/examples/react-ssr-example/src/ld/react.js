import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LDContext = createContext(null);
const {Provider} = LDContext;

function withLDProvider(Component, ldClient) {
    return (props) => {
        return (
            <Provider value={ldClient}>
                <Component {...props} />
            </Provider>
        );
    };
}

function useFlags(flagsAndDefaults) {
    const ldClient = useContext(LDContext);
    const [flags, setFlags] = useState(flagsAndDefaults);
        
    useEffect(() => {
        if (ldClient !== null) {
            ldClient.waitForReady().then(() => {
                setFlags(Object.fromEntries(Object.entries(flags).map(([flag, defaultValue]) => {
                    const value = ldClient.variation(flag, defaultValue);
                    return [flag, value];
                })));
            });

           function onChange(changes) {
                const entries = Object.entries(changes).filter(([flag]) => flags.hasOwnProperty(flag)).map(([flag, value]) => {
                    return ldClient.variation(flag, value);
                });
                if (entries.length > 0) {
                    setFlags(Object.fromEntries(entries));
                }
            }
            ldClient.on('change', onChange);
            return () => {
                ldClient.off('change', onChange);
            }
        }
    }, [ldClient, flags]);
    return flags;
}

export {
    LDContext,
    withLDProvider,
    useFlags
}