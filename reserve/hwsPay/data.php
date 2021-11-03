<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <title>HWS PAY</title>
</head>
<body>
    <header>
        <nav id="navbar">
            <div class="nav navbar-items" id="navbar-items">
                <div class="logo">
                    <h2>HWS</h2>
                </div>
                <div class="navbar-links">
                    <ul>
                        <li>
                            <a href="../../index.html" class="navbar-link-item">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="" class="navbar-link-item">
                                Galería
                            </a>
                        </li>
                        <li>
                            <a href="" class="navbar-link-item">
                                Explora
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <svg id="svg-triangle" width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 0H0L15.1837 20L31 0Z" fill="black"/>
            </svg>
        </nav>
        <div class="titles">
            <h1>HWS</h1>
            <h2>PAY</h2>
        </div>
    </header>
    <div class="main">
        <div class="check">
            <div class="check-table">
                <div class="row">
                    <div class="container-main-title">
                        <h4 class="main-title">HWS PAY</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="container-reserve-title">
                        <div class="reserve-info-title">
                            <h5>Información de la reserva</h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container-reserve-titles">
                        <div class="reserve-titles-entry-title">
                            <h5>Fecha de entrada</h5>
                        </div>
                        <div class="reserve-titles-exit-title">
                            <h5>Fecha de salida</h5>
                        </div>
                        <div class="reserve-titles-room-persons">
                            <h5>Habitaciones</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-reserve-data">
                            <div class="reserve-data-entry">
                                <span>
                                    
                                    <?php

                                    print_r($_POST['date-entry']);

                                    ?>
                                </span>
                            </div>
                            <div class="reserve-data-exit">
                                <span>
                                <?php

                                print_r($_POST['date-exit']);

                                ?>
                                </span>
                            </div>
                            <div class="reserve-data-room-persons">
                                <span>
                                <?php

                                print_r($_POST['select']);

                                ?>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-pay-title">
                            <h5>Información del pago</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="pay-data">
                            <div class="container-pay-titles">
                                <h5>1 habitación para 6 noches</h5>
                                <h5>Impuestos y tasas</h5>
                                <h5>Total</h5>
                            </div>
                            <div class="container-pay-data">
                                <h5>423 $</h5>
                                <h5>38,34 $</h5>
                                <h5>461.34 $</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="extra-info">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu hendrerit massa. Proin pellentesque enim nibh, vel iaculis nibh ultrices at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sodales lorem ac elit egestas, facilisis congue mi consectetur. Morbi accumsan purus vel quam dictum sodales. Integer convallis, nulla eget sodales faucibus, augue massa malesuada augue, sed dignissim sem nisi quis sapien. Vivamus venenatis risus non metus bibendum, et auctor orci laoreet. Nunc vel fermentum velit, in pharetra felis. Phasellus eu posuere neque. Donec porta, nisl eget tincidunt pretium, nisi sapien bibendum nisi, vitae laoreet ligula purus et elit. Curabitur et nisl tortor. Sed sed hendrerit libero, a aliquet metus. Donec euismod sem nibh, eu facilisis dui pharetra non. Morbi nec varius urna. Aliquam maximus diam in felis tempus, a congue velit suscipit. 
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="buttons-container">
                            <div class="button-back">
                                <a href="../reserve.html">
                                    <button>Volver</button>
                                </a>
                            </div>
                            <div class="button-buy">
                                <a href="">
                                    <button>Pagar</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="animations.js"></script>
    <script src="main.js"></script>
</body>
</html>