const datos = {
    usuarios:
    {
        mail: "carlos@email.com", 
        nombreUsuario: "Carlos",
        contraseña: "contraseñaCarlos", 
        fechaNacimiento: "2000-05-28",
        dni: 73840195,
        fotoPerfil: "carlos"
    }, 

    listaProductos: [{
        nombre: "Pistacho salado con cáscara",
        foto: <img src="'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/p/i/pistacho-con-c_scara-salado-y-tostado-x-300-gr.png" ></img>,
        descripcion: 'Ideal como snack. Viene con cáscara y cuenta con una textura crocante y sabor salado. No recomendado para hipertensos',
        comentarios: [{
            nombreUsuario: "Carlos",
            texto: "Muy ricos.",
            fotoPerfil: "Carlos"
        },
        {
            nombreUsuario: "Juan",
            texto: "Bastante saladitos.",
            fotoPerfil: "juan"

        },
        {
            nombreUsuario: "Ana",
            texto: "Muy nutritivos.",
            fotoPerfil: "ana"

        }],
       

    },
    {
        nombre: "Nuez pelada mariposa",
        foto: "nuez",
        descripcion: 'Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.',
        comentarios: [{
            nombreUsuario: "Carlos",
            texto: "Muy ricos.",
            fotoPerfil: "Carlos"
        },
        {
            nombreUsuario: "Juan",
            texto: "Bastante saladitos.",
            fotoPerfil: "juan"
        },
        {
            nombreUsuario: "Ana",
            texto: "Muy nutritivos.",
            fotoPerfil: "ana"

        }],
       
    },
    {
        nombre: "Nuez entera extra light",
    foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/n/u/nuez-pelada-mariposa-extra-light-300-gr.jpg"></img>',
    descripcion: 'Variedad de nuez entera, destacada para aprovechar sus aceites naturales cardioprotectores. De sabor y textura suave.',
    comentarios: [
        {
            nombreUsuario: "Carlos",
            texto: "Excelente para ensaladas.",
            fotoPerfil: "Carlos"
        },
        {
            nombreUsuario: "Maria",
            texto: "Me encanta con yogur.",
            fotoPerfil: "maria"
        },
        {
            nombreUsuario:"Ana", 
            texto: "Muy nutritivos", 
            fotoPerfil: "ana"
        }
    ],
   
},
{
    nombre: "Castañas de cajú tostadas con sal",
    foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/c/a/castana-de-caju-tostada-con-sal-x-350-gr-sin-tacc_1.jpg"></img>',
    descripcion: 'Gustosas castañas de cajú tostadas con sal. Ideal para picar entre horas.',
    comentarios: [
        {
            nombreUsuario: "Luis",
            texto: "Perfectas para picar entre horas.",
            fotoPerfil: "luis"
        },
        {
            nombreUsuario: "Ana",
            texto: "Un poco saladas para mi gusto.",
            fotoPerfil: "ana"
        },
        {
            nombreUsuario: "Juan",
            texto: "Riquísimas",
            fotoPerfil: "juan"
        }
    ]},
    {
        nombre: "Almendras tostadas",
        foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/a/l/almendras-tostadas-con-sal-x-300-gr.jpg"></img>',
        descripcion: 'Almendras tostadas con un toque de sal. Perfectas para un snack saludable.',
        comentarios: [
            {
                nombreUsuario: "Carlos",
                texto: "Perfectas para un snack saludable.",
                fotoPerfil: "Carlos"
            },
            {
                nombreUsuario: "Juan",
                texto: "Me encantan en ensaladas.",
                fotoPerfil: "juan"
            },
            {
                nombreUsuario: "Maria",
                texto: "Muy buena calidad",
                fotoPerfil:"maria"
            }
        ],
       
    

    },
    {
        nombre: "Pistachos sin cáscara",
        foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/p/i/pistachos-sin-c_scara-x-300-gr.jpg"></img>',
        descripcion: 'Pistachos sin cáscara, listos para comer. Deliciosos y prácticos.',
        comentarios: [
            {
                nombreUsuario: "Luis",
                texto: "Muy prácticos sin la cáscara.",
                fotoPerfil: "luis"
            },
            {
                nombreUsuario: "Maria",
                texto: "Deliciosos y fáciles de comer.",
                fotoPerfil: "maria"
            },
            {
                nombreUsuario:"Carlos",
                texto: "Buenísimos para hacer helado.",
                fotoPerfil:"carlos"
            }
        ],
       
    },
    {
        nombre: "Nueces de macadamia",
        foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/n/u/nueces-de-macadamia-x-300-gr.jpg"></img>',
        descripcion: 'Nueces de macadamia, conocidas por su sabor suave y textura cremosa. Excelentes para postres.',
        comentarios: [
            {
                nombreUsuario: "Ana",
                texto: "Un poco caras, pero deliciosas.",
                fotoPerfil: "ana"
            },
            {
                nombreUsuario: "Juan",
                texto: "Excelentes para postres.",
                fotoPerfil: "juan"
            },
            {
                nombreUsuario:"Carlos",
                texto: "Riquísimas.", 
                fotoPerfil: "carlos"
            }
        ],
        
    },  
    {
        nombre: "Avellanas tostadas",
        foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/a/v/avellanas-tostadas-con-sal-x-300-gr.jpg"></img>',
        descripcion: 'Avellanas tostadas con un toque de sal. Perfectas para un snack saludable.',
        comentarios: [
            {
                nombreUsuario: "Carlos",
                texto: "Perfectas para un snack saludable.",
                fotoPerfil: "Carlos"
            },
            {
                nombreUsuario: "Juan",
                texto: "Me encantan en ensaladas.",
                fotoPerfil: "juan"
            }
        ],
       
    },
    {
        nombre: "Nueces de Brasil",
        foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/n/u/nueces-de-brasil-x-300-gr.jpg"></img>',
        descripcion: 'Nueces de Brasil, conocidas por su sabor suave y textura cremosa. Excelentes para postres.',
        comentarios: [
            {
                nombreUsuario: "Ana",
                texto: "Un poco caras, pero deliciosas.",
                fotoPerfil: "ana"
            },
            {
                nombreUsuario: "Juan",
                texto: "Excelentes para postres.",
                fotoPerfil: "juan"
            },
            {
                nombreUsuario: "Maria",
                texto: "Súper blanditas"
            }

        ],
       
    
    },
    {
        nombre: "Maní tostado",
        foto: '<img src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/m/a/mani-tostado-con-sal-x-300-gr.jpg"></img>',
        descripcion: 'Maní tostado con un toque de sal. Perfectos para un snack saludable.',
        comentarios: [
            {
                nombreUsuario: "Carlos",
                texto: "Perfectos para un snack saludable.",
                fotoPerfil: "Carlos"
            },
            {
                nombreUsuario: "Juan",
                texto: "Me encantan en ensaladas.",
                fotoPerfil: "juan"
            },
            {
                nombreUsuario: "María",
                texto: "Buenísimos para las picadas.",
                fotoPerfil: "maria"
            }
        ],
        
    }
]
}




module.exports = datos;