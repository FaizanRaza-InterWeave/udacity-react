// Define Action Enum
export const RECEIVE_USERS = "RECEIVE_USERS";

// Create Action Creator
export function receiveUsers(users) {
  return {
    action: RECEIVE_USERS,
    users,
  };
}
