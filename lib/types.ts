export type LoginScope = 'student' | 'staff' | 'admin';

export type LoginData = {
    email: string;
    password: string;
    rememberMe: boolean;
    scope: LoginScope;
};


export type AccessToken = {
    token: string;
};

