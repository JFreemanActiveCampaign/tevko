<?php include("header.php"); ?>
    <script>
        function setWindowHeight(){
            var windowHeight = window.innerHeight;
            document.body.style.height = windowHeight + "px";
        }
        window.addEventListener("resize",setWindowHeight,false);
        window.addEventListener("load",setWindowHeight,false);
    </script>
    <nav class="Homenav" role="main">
        <ul>
            <li class="home-link header">
                <header class="header">
                    <div class="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <text class="logoAnimated colorfill" x="0" y="60">
                                // Tevko
                            </text>
                        </svg>
                    </div>
                </header>
            </li>

            <li class="home-link overview">
                <a href="#">overview</a>
            </li>
            <li class="home-link recent-work">
                <a href="#">Recent work</a>
            </li>
            <li class="home-link blog">
                <a href="#">Blog</a>
            </li>
            <li class="home-link contact">
                <a href="#">contact</a>
            </li>
        </ul>
    </nav>
<?php include("footer.php"); ?>

