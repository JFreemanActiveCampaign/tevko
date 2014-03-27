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
                        // Tevko
                    </div>
                </header>
            </li>

            <li class="home-link overview">
                <a href="overview">overview</a>
            </li>
            <li class="home-link recent-work">
                <a href="recent-work">Recent work</a>
            </li>
            <li class="home-link blog">
                <a href="coming-soon">Blog</a>
            </li>
            <li class="home-link contact">
                <a href="contact">contact</a>
            </li>
        </ul>
    </nav>
<?php include("footer.php"); ?>

