export const UPDATE_TIMER = 'UPDATE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const UPDATE_TIMER_STATE = 'UPDATE_TIMER_STATE';

export const updateTimer = (newTime: number) => {
    return {
        type: UPDATE_TIMER,
        payload: newTime
    };
};


export const resetTimer = () => {
    return {
        type: RESET_TIMER
    }
}

export const updateTimerState = (isRunning: boolean) => {
    return {
        type: UPDATE_TIMER_STATE,
        payload: isRunning
    };
};
