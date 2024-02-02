import {
    RESET_TIMER,
    UPDATE_TIMER,
    UPDATE_TIMER_STATE
} from '../actions/timerActions';

type State = { currentTime: number; timerState: boolean };

const initialState: State = {
    currentTime: 0,
    timerState: false
};

const timerReducer = (
    state: State = initialState,
    action: { payload: number; type: string }
): State => {
    const { payload, type } = action;
    switch (type) {
        case UPDATE_TIMER:
            return {
                ...state,
                currentTime: payload
            };
        
        case UPDATE_TIMER_STATE:
            return {
                ...state,
                timerState: payload ? true : false
            };

        case RESET_TIMER:
            return initialState;

        default:
            return state
    }
};

export default timerReducer;