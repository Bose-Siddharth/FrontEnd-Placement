import { LoginData, AccessToken } from "./types";

export const login = () => {
    return fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// export const register = (data: LoginData) => {
//     return fetch(`http://localhost:5000/register`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
// }

// export const getMe = (token: string) => {
//     return fetch(`http://localhost:5000/me`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     });
// }