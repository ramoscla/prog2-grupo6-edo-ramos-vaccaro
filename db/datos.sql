CREATE SCHEMA datos;

USE datos;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    usuario VARCHAR(25) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    DNI INT NOT NULL,
    foto VARCHAR(50),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(100) NOT NULL,
    foto VARCHAR(1000) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
    usuarioId INT UNSIGNED,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    usuarioId INT UNSIGNED,
    productoId INT UNSIGNED,
    comentario TEXT NOT NULL,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
    FOREIGN KEY (productoId) REFERENCES productos(id)
);

INSERT INTO usuarios (usuario, email, contrasenia, fechaNacimiento, DNI, foto) 
VALUES
    ("Carlos", "carlos@email.com", "contraseñaCarlos", "2000-05-28", 73840195, "carlos.jpg"),
    ("Ana", "ana@email.com", "contraseñaAna", "2004-06-22", 38274017, "ana.jpg"),
    ("Luis", "luis@email.com", "contraseñaLuis", "2008-05-15", 19284710, "luis.jpg"),
    ("Maria", "maria@email.com", "contraseñaMaria", "2010-03-05", 12748192, "maria.jpg"),
    ("Juan", "juan@email.com", "contraseñaJuan", "2001-09-10", 18491850, "juan.jpg");

INSERT INTO productos (nombre, foto, descripcion, usuarioId) 
VALUES
    ("Pistacho con cáscara salado y tostado", "pistacho-con-cascara.png", "Ideal como snack. Viene con cáscara y cuenta con una textura crocante y sabor salado. No recomendado para hipertensos", 1),
    ("Nuez pelada Mariposa Extra Light", "nuez-mariposa.png", "Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.", 1),
    ("Castañas de cajú tostadas con sal", "castañas-caju-tostadas.png", "Gustosas castañas de cajú tostadas con sal de textura crocante.", 2),
    ("Maní salado y tostado", "mani-tostado-salado.png", "Energético y nutritivo.", 2),
    ("Nueces de macadamia", "nueces-macadamia.png", "Nueces de macadamia, conocidas por su sabor suave y textura cremosa. Excelentes para postres", 3),
    ("Pistachos sin cáscara", "pistachos-sin-cascara.png", "Pistachos sin cáscara, listos para comer. Deliciosos y prácticos.", 3),
    ("Nueces de Brasil", "nueces-brasil.png", "Nueces de Brasil, conocidas por su sabor suave y textura cremosa. Excelentes para postres.", 4),
    ("Avellanas Tostadas", "avellana-tostada.png", "Avellanas tostadas con un toque de sal. Perfectas para un snack saludable.", 4),
    ("Nuez Entera Extra Light", "nuez-entera.jpg", "Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.", 5),
    ("Almendras Tostadas", "almendras-tostadas.png", "Almendras tostadas con un toque de sal. Perfectas para un snack saludable.", 5);

INSERT INTO comentarios (usuarioId, productoId, comentario)
VALUES 
    (1, 1, "Muy ricos"),
    (5, 1, "Bastante saladitos."),
    (2, 1, "Muy nutritivos. Me siento renovada cada vez que los como."),
    (1, 2, "Muy ricos"),
    (5, 2, "Bastante saladitos."),
    (2, 2, "Muy nutritivos."),
    (3, 3, "Perfectas para picar entre horas."),
    (2, 3, "Un poco saladas para mi gusto."),
    (5, 3, "Riquísimas"),
    (1, 4, "Perfectos para un snack saludable."),
    (5, 4, "Me encantan en ensaladas."),
    (4, 4, "Buenísimos para las picadas."),
    (2, 5, "Un poco caras, pero deliciosas."),
    (5, 5, "Excelentes para postres."),
    (1, 5, "Riquísimas."),
    (3, 6, "Muy prácticos sin la cáscara."),
    (4, 6, "Deliciosos y fáciles de comer."),
    (1, 6, "Buenísimos para hacer helado."),
    (2, 7, "Un poco caras, pero deliciosas."),
    (5, 7, "Excelentes para postres."),
    (4, 7, "Súper blanditas."),
    (1, 8, "Perfectas para un snack saludable."),
    (5, 8, "Me encantan en ensaladas."),
    (4, 8, "Tremendasss"),
    (1, 9, "Excelente para ensaladas."),
    (4, 9, "Me encanta con yogur."),
    (2, 9, "Muy nutritivos"),
    (1, 10, "Perfectas para un snack saludable."),
    (5, 10, "Me encantan en ensaladas."),
    (4, 10, "Muy buena calidad");
