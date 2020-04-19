<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  rel="icon"   href="./images/Mlogo.jpg" type="image/jpg" >
    <link rel="stylesheet" href="design.css">
    <title>MATTHIAS</title>
</head>
<body>
    <nav>
        <div class="brand_image">
            <img src="../images/logo.png" alt="logo">
        </div>
        <div class="nav_options">
            <ul>
                <li><a href="preguntas.html">Preguntas frecuentes</a></li>
                <li><a href="index.html">Inicio</a></li>
            </ul>
        </div>
    </nav>
    <div class="form1">
        <form method="post">
            <div>Nombre: <input type="text" name="nombre" size="40" placeholder="Ingresa tu nombre aquí" required></div>
            <div>Correo: <input type="text" name="correo" size = "40" placeholder="Ejemplo@gmail.com" required></div>
            <div>Sexo:
                <input type="radio" name="hm" value="h"> Hombre
                <input type="radio" name="hm" value="m"> Mujer
                <input type="radio" name="hm" value="o"> otro
            </div>
            <div>
                <input type="submit" value="Enviar" id="Enviar">
                <input type="reset" value="Limpiar">
            </div>
        </form>
        <?php
            $nombre = $_POST["nombre"];
            echo "Hola $nombre";
        ?>
    </div>
</body>
</html>