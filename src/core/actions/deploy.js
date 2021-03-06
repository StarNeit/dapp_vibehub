import constants from '../types';
import api from '../api';

export const deployBots = botspec => dispatch => {

    dispatch({
        type: constants.DEPLOYBOT_REQUEST
    });
    api.deploybot.deployBots(botspec).then(dBots => {
        dispatch({
            type: constants.DEPLOYBOT_SUCCESS,
            payload: dBots.data,
        });
    })
        .catch(error => {
            console.log(error.response.data.errors);
            dispatch({
                type: constants.DEPLOYBOT_FAILED,
                payload: error.response.data.errors
            });
        });
};

export const getBotlist = () => dispatch => {

    dispatch({
        type: constants.GETBOTLIST_REQUEST
    });
    api.deploybot.getBotlist().then(dBots => {
        dispatch({
            type: constants.GETBOTLIST_SUCCESS,
            payload: dBots.data,
        });
    })
        .catch(error => {
            console.log(error.response.data.errors);
            dispatch({
                type: constants.GETBOTLIST_FAILED,
                payload: error.response.data.errors
            });
        });
};