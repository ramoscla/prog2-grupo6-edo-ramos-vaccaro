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
('Carlos', 'carlos@email.com', 'contraseñaCarlos', 2000-05-28, 73840195,"https://media.istockphoto.com/id/1334102192/photo/adult-young-woman-silhouette-portrait-in-studio.jpg?s=612x612&w=0&k=20&c=VBGQoLTr3DrdM2O4hf8_DdwzlUJjhk5YmRZXxoziK5E="),
('Ana', 'ana@email.com', 'contraseñaAna', 2004-06-22, 38274017,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTkw6Wj7PHREerdtSv3U6Xl3QQ0zjQQXzRQ&usqp=CAU"),
('Luis', 'luis@email.com', 'contraseñaLuis', 2008-05-15, 19284710,"https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg"),
('Maria', 'maria@email.com', 'contraseñaMaria', 2010-03-05, 12748192,"https://cdn4.sharechat.com/attitudegirl'sprofileloveyourself_2e9b2657_1657120193022_sc_cmprsd_75.jpg?tenant=sc&referrer=tag-service&f=rsd_75.jpg"),
('Juan', 'juan@email.com', 'contraseñaJuan', 2001-09-10, 18491850,"https://s.cafebazaar.ir/images/icons/com.satomi.wallpaperboy-0270cc9e-882a-4429-b305-6cc609a0c754_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize");

select * from productos;

INSERT INTO productos (foto, descripcion, usuario_id) 
VALUES
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/p/i/pistacho-con-c_scara-salado-y-tostado-x-300-gr.png', 'Ideal como snack. Viene con cáscara y cuenta con una textura crocante y sabor salado. No recomendado para hipertensos', 1),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/n/u/nuez-pelada-mariposa-extra-light-300-gr.jpg', 'Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.', 1),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/c/a/castana-de-caju-tostada-con-sal-x-350-gr-sin-tacc_1.jpg', 'Gustosas castañas de cajú tostadas con sal de textura crocante.', 2),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/a/mani-repelado-salado-y-tostado_1_1.jpg', 'Energético y nutritivo.', 2),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/a/maiz-frito_1.jpg', 'Maíz Frito Y Salado x 200 gr.', 3),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/a/l/almendras-tostadas-con-sal_2.jpg', 'Almendra pelada grande, de calidad premium. De color claro y sabor agradable.', 3),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/1/0/105105-nuez-con-cascara-.jpg', 'Nuez Con Cáscara x 1 Kg.', 4),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/a/mani-japones_2_1.jpg', 'Alimento a base de maní tostado, harina, fécula de maíz, glucosa, salsa de soja y sal.', 4),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/a/maiz-frito-chili_1_2.jpg', 'Maíz Frito Chili (Picante) x 200 gr.', 5),
('https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/a/r/arroz-basmati-integral-x-1-kg.jpg', 'Arroz de grano fino y largo, posee una delicada fragancia y delicioso sabor que recuerda a las frutas secas.', 5);

select * from comentarios;

INSERT INTO comentarios (usuario_id,producto_id,texto)
VALUES 
(2,1,"muy ricas"),
(3,6,"nutritivas"),
(5,1,"buen precio y muy buenas");
