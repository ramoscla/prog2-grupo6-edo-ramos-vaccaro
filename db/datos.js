const datos = {
    usuario:
    {
        mail: "carlos@email.com", 
        nombreUsuario: "Carlos",
        contrasena: "contraseñaCarlos", 
        fechaNacimiento: "2000-05-28",
        dni: 73840195,
        fotoPerfil: "carlos.jpg"
    }, 

    listaProductos: [{
        nombre: "Pistacho con cáscara salado y tostado ",
        foto: "pistachos-con-cascara.png",
        descripcion: 'Ideal como snack. Viene con cáscara y cuenta con una textura crocante y sabor salado. No recomendado para hipertensos',
        comentarios: [{
            nombreUsuario: "Carlos",
            texto: "Muy ricos.",
            fotoPerfil: "carlos.jpg"
        },
        {
            nombreUsuario: "Juan",
            texto: "Bastante saladitos.",
            fotoPerfil: "juan.jpg"

        },
        {
            nombreUsuario: "Ana",
            texto: "Muy nutritivos. Me siento renovada cada vez que los como.",
            fotoPerfil: "ana.jpg"

        }],
       

    },
    {
        nombre: "Nuez Entera Extra Light",
        foto: "nuez-entera.jpg",
        descripcion: 'Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.',
        comentarios: [{
            nombreUsuario: "Carlos",
            texto: "Muy ricos.",
            fotoPerfil: "carlos.jpg"
        },
        {
            nombreUsuario: "Juan",
            texto: "Bastante saladitos.",
            fotoPerfil: "juan.jpg"
        },
        {
            nombreUsuario: "Ana",
            texto: "Muy nutritivos.",
            fotoPerfil: "ana.jpg"

        }],
       
    },
    {
        nombre: "Nuez Mariposa extra light",
    foto: 'nuez-mariposa.png',
    descripcion: 'Variedad de nuez mariposa, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.',
    comentarios: [
        {
            nombreUsuario: "Carlos",
            texto: "Excelente para ensaladas.",
            fotoPerfil: "carlos.jpg"
        },
        {
            nombreUsuario: "Maria",
            texto: "Me encanta con yogur.",
            fotoPerfil: "maria.jpg"
        },
        {
            nombreUsuario:"Ana", 
            texto: "Muy nutritivos", 
            fotoPerfil: "ana.jpg"
        }
    ],
   
},
{
    nombre: "Castañas de cajú tostadas con sal",
    foto: 'castañas-caju-tostadas.png',
    descripcion: 'Gustosas castañas de cajú tostadas con sal. Ideal para picar entre horas.',
    comentarios: [
        {
            nombreUsuario: "Luis",
            texto: "Perfectas para picar entre horas.",
            fotoPerfil: "luis.jpg"
        },
        {
            nombreUsuario: "Ana",
            texto: "Un poco saladas para mi gusto.",
            fotoPerfil: "ana.jpg"
        },
        {
            nombreUsuario: "Juan",
            texto: "Riquísimas",
            fotoPerfil: "juan.jpg"
        }
    ]},
    {
        nombre: "Almendras tostadas",
        foto: 'almendras-tostadas.png',
        descripcion: 'Almendras tostadas con un toque de sal. Perfectas para un snack saludable.',
        comentarios: [
            {
                nombreUsuario: "Carlos",
                texto: "Perfectas para un snack saludable.",
                fotoPerfil: "carlos.jpg"
            },
            {
                nombreUsuario: "Juan",
                texto: "Me encantan en ensaladas.",
                fotoPerfil: "juan.jpg"
            },
            {
                nombreUsuario: "Maria",
                texto: "Muy buena calidad",
                fotoPerfil:"maria.jpg"
            }
        ],
       
    

    },
    {
        nombre: "Pistachos sin cáscara",
        foto: 'pistachos-sin-cascara.png',
        descripcion: 'Pistachos sin cáscara, listos para comer. Deliciosos y prácticos.',
        comentarios: [
            {
                nombreUsuario: "Luis",
                texto: "Muy prácticos sin la cáscara.",
                fotoPerfil: "luis.jpg"
            },
            {
                nombreUsuario: "Maria",
                texto: "Deliciosos y fáciles de comer.",
                fotoPerfil: "maria.jpg"
            },
            {
                nombreUsuario:"Carlos",
                texto: "Buenísimos para hacer helado.",
                fotoPerfil:"carlos.jpg"
            }
        ],
       
    },
    {
        nombre: "Nueces de macadamia",
        foto: 'nueces-macadamia.png',
        descripcion: 'Nueces de macadamia, conocidas por su sabor suave y textura cremosa. Excelentes para postres.',
        comentarios: [
            {
                nombreUsuario: "Ana",
                texto: "Un poco caras, pero deliciosas.",
                fotoPerfil: "ana.jpg"
            },
            {
                nombreUsuario: "Juan",
                texto: "Excelentes para postres.",
                fotoPerfil: "juan.jpg"
            },
            {
                nombreUsuario:"Carlos",
                texto: "Riquísimas.", 
                fotoPerfil: "carlos.jpg"
            }
        ],
        
    },  
    {
        nombre: "Avellanas tostadas",
        foto: 'avellana-tostada.png',
        descripcion: 'Avellanas tostadas con un toque de sal. Perfectas para un snack saludable.',
        comentarios: [
            {
                nombreUsuario: "Carlos",
                texto: "Perfectas para un snack saludable.",
                fotoPerfil: "carlos.jpg"
            },
            {
                nombreUsuario: "Juan",
                texto: "Me encantan en ensaladas.",
                fotoPerfil: "juan.jpg"
            },
            {
                nombreUsuario: "María",
                texto: "Tremendassss",
                fotoPerfil: "maria.jpg"
            }
        ],
       
    },
    {
        nombre: "Nueces de Brasil",
        foto: 'nueces-brasil.png',
        descripcion: 'Nueces de Brasil, conocidas por su sabor suave y textura cremosa. Excelentes para postres.',
        comentarios: [
            {
                nombreUsuario: "Ana",
                texto: "Un poco caras, pero deliciosas.",
                fotoPerfil: "ana.jpg"
            },
            {
                nombreUsuario: "Juan",
                texto: "Excelentes para postres.",
                fotoPerfil: "juan.jpg"
            },
            {
                nombreUsuario: "Maria",
                texto: "Súper blanditas.",
                fotoPerfil :"maria.jpg"
            }

        ],
       
    
    },
    {
        nombre: "Maní salado y tostado",
        foto: 'mani-tostado-salado.png',
        descripcion: 'Maní tostado con un toque de sal. Perfectos para un snack saludable.',
        comentarios: [
            {
                nombreUsuario: "Carlos",
                texto: "Perfectos para un snack saludable.",
                fotoPerfil: "carlos.jpg"
            },
            {
                nombreUsuario: "Juan",
                texto: "Me encantan en ensaladas.",
                fotoPerfil: "juan.jpg"
            },
            {
                nombreUsuario: "María",
                texto: "Buenísimos para las picadas.",
                fotoPerfil: "maria.jpg"
            }
        ],
        
    }
]};

module.exports = datos;