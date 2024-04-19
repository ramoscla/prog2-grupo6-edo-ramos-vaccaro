-- a
create table usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario varchar(25) unique not null,
email varchar(100) unique not null,
contraseña varchar(100) not null,
fechaNacimiento date not null,
DNI int not null,
foto varchar(50),
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp on update current_timestamp,
deletedAt datetime null on update current_timestamp);
select * from usuarios;
-- b
create table productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre varchar(100) not null,
foto varchar(50) not null,
descripcion text not null,
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp on update current_timestamp,
deletedAt datetime null on update current_timestamp,
usuario_id int unsigned,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- c
create table comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id int unsigned,
producto_id int unsigned,
texto text not null,
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp on update current_timestamp,
deletedAt datetime null on update current_timestamp,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)

);

-- d (5 usuarios)

select * from usuarios;

INSERT INTO usuarios (usuario, email, contraseña, fechaNacimiento, DNI,foto) 
VALUES
('Carlos', 'carlos@email.com', 'contraseñaCarlos', 2000-05-28, 73840195,"carlos.jpg"),
('Ana', 'ana@email.com', 'contraseñaAna', 2004-06-22, 38274017,"ana.jpg"),
('Luis', 'luis@email.com', 'contraseñaLuis', 2008-05-15, 19284710,"luis.jpg"),
('Maria', 'maria@email.com', 'contraseñaMaria', 2010-03-05, 12748192,"maria.jpg"),
('Juan', 'juan@email.com', 'contraseñaJuan', 2001-09-10, 18491850,"juan.jpg");

select * from productos;

INSERT INTO productos (nombre, foto, descripcion, usuario_id) 
VALUES
('Pistacho con cáscara salado y tostado', 'pistachoconcascarasalado', 'Ideal como snack. Viene con cáscara y cuenta con una textura crocante y sabor salado. No recomendado para hipertensos', 1),
('Nuez pelada Mariposa Extra Light 300 gr','nuezpeladamariposaextralight', 'Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.', 1),
('Castañas de cajú tostadas con sal 350 gr','castañascajutostadascsal', 'Gustosas castañas de cajú tostadas con sal de textura crocante.', 2),
('Maní salado y tostado', 'manisalado', 'Energético y nutritivo.', 2),
('Nueces de macadamia','nuecesdemacadamia', 'Nueces de macadamia, conocidas por su sabor suave y textura cremosa. Excelentes para postres', 3),
('Pistachos sin cáscara', 'pistachosincascara', 'Pistachos sin cáscara, listos para comer. Deliciosos y prácticos.', 3),
('Nueces de Brasil','nuecesbrasil', 'Nueces de Brasil, conocidas por su sabor suave y textura cremosa. Excelentes para postres.', 4),
('Avellanas Tostadas', 'avellanastostadas', 'Avellanas tostadas con un toque de sal. Perfectas para un snack saludable.', 4),
('Nuez Entera Extra Light','nuezenteraextralight', 'Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.', 5),
('Almendras Tostadas','almendrastostadas', 'Almendras tostadas con un toque de sal. Perfectas para un snack saludable.', 5);

select * from comentarios;

INSERT INTO comentarios (usuario_id,producto_id,texto)
VALUES 
(1,1,"muy ricas"),
(3,6,"nutritivas"),
(5,1,"buen precio y muy buenas");