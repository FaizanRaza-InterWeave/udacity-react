// Define Action Enum
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

// Create Action Creator
export function receiveTweets(tweets) {
  return {
    action: RECEIVE_TWEETS,
    tweets,
  };
}
