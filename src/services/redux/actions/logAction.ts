export const UPDATE_LOG = 'UPDATE_LOG';
export const UPDATE_SPLIT_LOG = 'UPDATE_SPLIT_LOG';
export const RESET_LOGS = ' RESET_LOGS';

export const updateLog = (actionType: string, time: number) => {
    return {
        type: UPDATE_LOG,
        payload: { actionType, time }
    };
};

export const updateSplitLog = (actionType: string, time: number) => {
    return {
        type: UPDATE_SPLIT_LOG,
        payload: { actionType, time }
    }
}

export const resetLogs = () => {
    return {
        type: RESET_LOGS
    }
}