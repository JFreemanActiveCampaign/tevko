<?php include("header.php"); ?>
    <style>
        .Homenav{height:100%;width:100%}.Homenav ul{margin:0;padding:0;height:100%}.Homenav li{list-style-type:none;text-align:center}.home-link{height:20%;display:table;width:100%;transition:.5s linear}.home-link:hover{opacity:.9}.home-link a{text-decoration:none;padding:rem;position:relative;color:#fff;text-transform:uppercase;display:table-cell;vertical-align:middle;font-size:1.5em;border-bottom:0}.overview{background-color:#AAAAA2}.recent-work{background-color:#9E8C69}.blog{background-color:#745E5E}.contact{background-color:#395353}
    </style>
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
                    <div class="logo">tevko</div>
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

