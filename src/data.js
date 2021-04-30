const users = [
    { name: "Shane", premium: true },
    { name: "Hazel", premium: false },
    { name: "Bill", premium: false },
    { name: "Bob", premium: true },
];

const getPremUsers = (users) => {
    return users.filter((user) => user.premium);
};

export { getPremUsers, users as default };
