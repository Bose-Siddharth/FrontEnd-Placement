import { LoginData, AccessToken } from "./types";

export const login = () => {
    return fetch(`${process.env.API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// export const register = (data: LoginData) => {
//     return fetch(`${process.env.API_URL}/register`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
// }

// export const getMe = (token: string) => {
//     return fetch(`${process.env.API_URL}/me`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     });
// }