// 網頁的主程式寫在這裡

// 等待畫面內容載入完成後 再執行以下程序
// document整份文件 ready載入完成
$(document).ready(function () {
    // 載入完成後的流程
    console.log('loaded!');
    // 啟動wow.js的流程
    new WOW().init();
    // 選到navbar裡面的nav-link
    $('.navbar .nav-link, #goBackBtn').click(function () {
        // 檢查有沒有被點到
        console.log('this:', this);
        // 點擊後移動目標
        let target = $(this).attr('href');
        console.log('targrt:', target);
        // 設計滾動流程 取得移動目標的y軸座標（上下滾動）
        let targetPosition = $(target).offset().top;
        console.log('position:', targetPosition);
        //取得導覽列高度
        let navbarHeight = $('.navbar').outerHeight();
        console.log('navbarHeight', navbarHeight);
        // 準備動畫時間
        let duration = 400; // 3s
        // 先停止動畫 再觸發動畫 .animate({object}, time)
        $('html, body').stop().animate({
            scrollTop: targetPosition - navbarHeight
        }, duration);
        console.log('**************************');
    });
});
