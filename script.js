//Constants and new notification number.
const asread = document.getElementById("mark_asread");
const notifications = document.querySelectorAll(".notification");
const unread_sign = document.getElementsByClassName("unread");
const number_n = document.getElementById("number_n");
const container = document.getElementsByClassName("sign_container");
let notification_number = unread_sign.length;

//This event listener marks all new notifications as read and updates number of new notifications.
asread.addEventListener("click", function mark_as_read() {
    number_n.innerHTML = 0;
    const unreadList = document.querySelectorAll(".unread");
    if (unread_sign.length > 0) {
        unreadList.forEach((unread) => {
            asread.innerHTML = "No new notifications";
            unread.remove();
            notification_number = 0;
        });
    }
    const notification_back = document.querySelectorAll(".notification");
    notification_back.forEach((notification) => {
        notification.style.background = "white";
    });
});

//This function changes color for each element which will be double clicked and updates number of new notifications.
const colorchange = Array.from(document.querySelectorAll(".notifications"));
function changeColor(elem) {
    if (elem.style.background != "white") {
        elem.style.background = "white";
        notification_number--;
        number_n.innerHTML = notification_number;
        const child = elem.querySelectorAll("* > .unread");
        for (let i = 0; i < child.length; i++) {
            child[i].remove();
            textChange();
        }
    };
    //Mark as unread function need to be add some fetures
    // else {
    //     elem.style.background = "#F7FAFD";
    //     notification_number++;
    //     number_n.innerHTML = notification_number;
    //     textChange();
    // }
};
//This function updates innerHTML text for mark all as read.
function textChange() {
    if (notification_number == 0) {
        asread.innerHTML = "No new notifications";
    } else {
        asread.innerHTML = "Mark all as read";
    }
}


