import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

export const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter(
                (user) => user !== action.authedUser
              )
            : state[action.id].likes.concat([action.authedUser]),
          hasLiked: !state[action.id].hasLiked
        }
      };
    default:
      return state;
  }
};
