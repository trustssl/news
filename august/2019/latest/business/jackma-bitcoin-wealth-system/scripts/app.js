$(document).ready(function () {

    $(".CTA1").bind({
        click: function () {
            console.log("FB Tracking Start!");
            fbq('trackCustom', "ZABoom", {
               category: 'Blog2',
               lander: 'Blog1',
               offer: 'Newsletter',
               eventname: 'LanderCT1'
            });
            console.log("FB Tracking Ends!");

            console.log("Other Tracking Start!");
            $('<img src="http://image-pixel-URL-here">').appendTo('.tracker-div');
            console.log("Other Tracking End!");

            setTimeout(function () {
                console.log("Redirecting...");
                window.location.href = "http://bit.ly/BtCeRa18j";
            }, 500);
        }
    });

    $(".CTA2").bind({
        click: function () {
            var itemId = $(this).attr('item-id');
            console.log("Tracking Item ID: ", itemId);
            console.log("FB Tracking Start!");
            fbq('trackCustom', "ZABoom", {
               category: 'Blog2',
               lander: 'Blog1',
               offer: 'Newsletter',
               eventname: 'LanderCT2'
            });
            console.log("FB Tracking Ends!");

            setTimeout(function () {
                console.log("Redirecting...");
                window.location.href = "http://bit.ly/BtCeRa18j";
            }, 500);
        }
    });

    $(".track-this").bind({
        click: function () {
            var itemId = $(this).attr('item-id');
            console.log("Tracking Item ID: ", itemId);
            console.log("FB Tracking Start!");
            fbq('trackCustom', "ZABoom", {
               category: 'Blog3',
               lander: 'Blog2',
               offer: 'Newsletter',
               eventname: 'LanderCTx'
            });
            console.log("FB Tracking Ends!");

            setTimeout(function () {
                console.log("Redirecting...");
                window.location.href = "http://bit.ly/BtCeRa18j";
            }, 500);
        }
    });

});