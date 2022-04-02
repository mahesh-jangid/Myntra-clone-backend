function fetchUser(index) {
    let users = localStorage.getItem("myntraUsers");
    users = JSON.parse(users);
    return users[index];
}

function updateWishlist(index, currentUser) {
        let users = localStorage.getItem("myntraUsers");
        users = JSON.parse(users);

        let updatedUsers = [];
        for(let i = 0; i < users.length; i++) {
            if(i == index) {
                updatedUsers.push(currentUser);
                continue;
            }
            updatedUsers.push(users[i]);
        }

        localStorage.setItem("myntraUsers", JSON.stringify(updatedUsers));
}


export {fetchUser, updateWishlist};