import {
  LOAD_USERS_DATA,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  SET_OFFSET,
} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert() {
  return {
    type: SHOW_ALERT,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function setOffset(payload) {
  return {
    type: SET_OFFSET,
    payload,
  };
}

async function fetchData({ token, url }) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Leeloo-AuthToken": token,
    },
  });

  return await res.json();
}

export function fetchListOfUsers({ limit, offset, token }) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const generalUsersData = await fetchData({
        token,
        url: `https://api.leeloo.ai/api/v1/accounts?limit=${limit}&offset=${offset}`,
      });

      const fullUsersData = await Promise.all(
        generalUsersData.data.map(async (u) => {
          return {
            ...u,
            addUserData: await fetchData({
              token,
              url: `https://api.leeloo.ai/api/v1/accounts/${u.id}?include=contactedUsers,orders&limit=${limit}&offset=${offset}`,
            }),
          };
        })
      );

      dispatch({
        type: LOAD_USERS_DATA,
        payload: fullUsersData,
      });
      dispatch(hideLoader());
    } catch (e) {
      console.warn(e);
      // dispatch(showAlert())
    }
  };
}
