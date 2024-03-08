let userEmail = "Salman";
let userId = "123";

export const setUser = (email, id) => {
    userEmail = email;
    userId = id;
};

export const getUserEmail = () => userEmail;
export const getUserId = () => userId;