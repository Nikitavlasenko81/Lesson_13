function showNotification(options) {
    let notification = document.createElement('div');
    notification.classList.add('notification')
    notification.style.top = `${options.top} px`;
    notification.style.right = `${options.right} px`;
    notification.innerHTML = options.html;
    if (options.className) {
        notification.classList.add(options.className)
    }
    document.body.append(notification)

    setTimeout(()=>{
        notification.remove()
    },1500)

}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});







