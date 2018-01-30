var ImageContainer = (function() {
    //DOM Selectors
    var container = $(".container");
    //Consts initialisation
    var mascots = [{
            src: "images/mascot1.png",
            alt: "Hug Mascot",
            className: "square"
        },
        {
            src: "images/mascot2.png",
            alt: "Hug Mascot",
            className: "square"
        },
        {
            src: "images/mascot3.png",
            alt: "Hug Mascot",
            className: "square"
        },
        {
            src: "images/mascot4.png",
            alt: "Hug Mascot",
            className: "square"
        },
        {
            src: "images/mascot5.png",
            alt: "Hug Mascot",
            className: "square"
        }
    ];
    var random = [{
            src: "images/random1.jpg",
            alt: "Mountain",
            className: "square"
        },
        {
            src: "images/random2.jpg",
            alt: "Sea",
            className: "square"
        },
        {
            src: "images/random3.jpg",
            alt: "Rocks",
            className: "square"
        }
    ];
    var minDistance = 10;
    //ImageContainer Component API
    return {
        init: initComponent
    };

    function initComponent() {
        container.html(function() {
            var imgsName = $(this).attr("data-images");
            var imagesArray = [];
            switch (imgsName) {
                case "mascots":
                    imagesArray = mascots;
                    break;
                case "random":
                    imagesArray = random;
                    break;
            }
            return addImages(imagesArray);
        });
        spaceImages();
        $(window).resize(function() {
            spaceImages();
        });
    }

    function spaceImages() {
        container.each(function() {
            var distance = getDistaceBetweenImages($(this), this.clientWidth);
            addDistanceToImages($(this), distance);
        });
    }

    function getDistaceBetweenImages(containerElement, clientWidth) {
        var countImgs = containerElement.children().length;
        var imgWidth = containerElement.children().width();
        var totalImgsWidth = countImgs * (imgWidth + minDistance) - minDistance;
        var spaceBetween = minDistance;
        if (clientWidth < totalImgsWidth) {
            while (clientWidth < totalImgsWidth) {
                totalImgsWidth -= imgWidth + minDistance;
                countImgs--;
            }
            spaceBetween = (clientWidth - totalImgsWidth) / countImgs;
        }
        return spaceBetween;
    }

    function addDistanceToImages(element, distance) {
        element.children().css("margin-right", distance + "px");
        element
            .children()
            .last()
            .css("margin-right", 0);
    }

    function addImages(array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result +=
                "<img class='" +
                array[i].className +
                "' src='" +
                array[i].src +
                "' alt='" +
                array[i].alt +
                "' >";
        }
        return result;
    }
})();