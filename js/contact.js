document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn form gửi đi mặc định

    // Lấy giá trị từ các trường nhập liệu
    var nameValue = document.getElementsByName("name")[0].value;
    var emailValue = document.getElementsByName("email")[0].value;
    var titleValue = document.getElementsByName("title")[0].value;
    var messageValue = document.getElementsByName("message")[0].value;
    var numberPhone = document.getElementsByName ("phone")[0].value;

    // Tạo object templateParams chứa thông tin email
    var templateParams = {
        to_name: nameValue,
        email: emailValue,
        title: titleValue,
        message: messageValue,
        phone: numberPhone
    };
    emailjs.init("OpUAuRjWkfe9j2u7i");
    // Gửi email bằng Email.js
    emailjs.send("service_r9jh5kl", "template_d7pjmr9", templateParams)
        .then(function (response) {
            alert("Thông tin đã được gửi thành công!", response);
            // Thực hiện các xử lý khác sau khi gửi email thành công
        })
        .catch(function (error) {
          alert("Lỗi khi gửi email: ", error);
            // Xử lý lỗi nếu có
        });
});