const mongoose = require('mongoose');
const bcrypt  = require("bcrypt");
const bcryptSalt = 10;
const User = require('../models/User');
const Kidheroes = require('../models/Kid');
const Centre = require('../models/Centre');

require('dotenv').load();

mongoose.connect('mongodb://localhost/sonrisas');

const centres = [
  {
    name:'Unidad de Madres Jaime Garralda, Madrid',
  	direction:'Juan de Vera, Madrid',
  	constructionYear: 2011,
  	cell: 33,
    description:`Los tonos morados de la fachada son lo primero que llama la atención
    al transeúnte que pasea por esta calle del distrito de Delicias, en Madrid. Nadie
    diría desde fuera que pertenecen a un centro penitenciario. La Unidad Externa de
    Madres Jaime Garralda destaca no sólo en su entorno, también dentro del mismo
    Centro de Inserción Social (CIS) del que depende.
    Una vez dentro se sigue sin tener la sensación de estar en un centro penitenciario.
    Sólo lo sugiere un arco detector de metales que da la bienvenida.Discretas cámaras controlan la
    normalidad del centro donde, en el momento de la visita (a mediados de marzo del 2016),
    viven 22 madres con 23 niños.
    En la planta baja se encuentran las zonas comunes: el patio y el comedor.
    En esta sala sólo se hace la comida. El desayuno y la cena lo recoge cada
    madre para llevarlo a su habitación y disfrutarlo en la intimidad con su hijo.
    Cada planta del edificio está pintada de un color diferente, todas dan a un gran patio central,
    como una de las corralas típicas en ese distrito 	madrileño. En el centro, unos
    columpios decoran el paisaje junto a una pequeña piscina para refrescarse en verano.`,
  	photo:'http://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2016/08/15/14712754417797.jpg',
    countNumber:470456678901,
  },

  {
    name:'La Unidad de Madres de Sevilla',
    direction:'Ctra. de Torreblanca - Mairena Alcor, Paraje de la Trinidad, Sevilla (Andalucía)',
    constructionYear: 2008,
    cell: 36,
    description:`Es un edificio de carácter residencial, complementado con diversos servicios
    dotacionales que son necesarios debido al carácter de privación de libertad
    y movimiento de las internas, además de incluir una serie de atenciones
    personalizadas que les permitan la adecuada reinserción social, mediante
    el apoyo de diversos profesionales.
    La unidad de madre de Sevilla tiene capacidad para 36 madres y sus hijos con 33 habitaciones,
    de las cuales 30 son sencillas, del tipo Madre+3 con una cama para ella, dos camas
    más y una cuna, y otras tres de doble dormitorio (M+5) para acoger a dos madres
    con sus respectivos hijos.
    Además de un patio central, dispone de comedor, economato, aulas (peluquería,
    costura, informática y polivalente), talleres, aseos infantiles y de madres,
    biblioteca, gimnasio, salas de juegos, consulta médica y lavandería, entre otras estancias.
    También tiene una zona de comunicaciones para las visitas, pues el objetivo es
    normalizar la relación con sus hijos y potenciar las relaciones familiares
    integrales, y todo el recinto está dotado de medidas de seguridad necesarias
    para asegurar el cumplimiento de la pena de las madres, pero sin un impacto
    negativo para los menores.`,
    photo: 'http://s03.s3c.es/imag/efe/2009/12/10/2737947w.jpg',
    countNumber:374647617940,
  },

  {
    name:'La Unidad de Madres de Mallorca',
    direction:'Camí Fondo. Vía Cintura, Mallorca (Baleares)’',
    constructionYear: 2009,
    cell: 36,
    description:` Este centro, que comparte un solar de 9.000 metros cuadrados
    en el Polígono 	de Llevant de Palma con el Centro de Inserción Social (CIS),
    que también dirige Juan Fernando Díaz --ex director de la cárcel de Palma--,
    tiene capacidad para una veintena de reclusas acompañadas por hijos menores
    de tres años de edad, y cuenta, entre otras particularidades, con consulta
    de pediatría propia. Es un centro penitenciario especial para mujeres con hijos/as.
    Este centro cuenta con 14 madres y 14 niños/as menores de 3 años, que a
    partir de esa edad deben abandonar el centro y comenzar una nueva vida lejos
    de este módulo. De esta forma el/la menor pasa sus primeros años de vida
    junto a su figura materna; el centro dispone de
    zona de guardería y juegos infantiles para que el niño/a comience a conocer
    lo que se puede encontrar en el exterior.`,
    photo: 'http://static.noticiasdealava.com/images/2016/09/12/import_8784470_11.jpg',
    countNumber: 120469698540,
  },
];



const kids = [
  {
    photo:'https://res.cloudinary.com/dmxe1gmbm/image/upload/v1513181422/bat_ridunk.png',
    name:"Batman",
    age:1,
    about:`Un niño de año y medio y unos ojos grises enormes. Mira serio a María,
    que intenta sin éxito hacerle sonreír. Permanece impasible a las carantoñas.
    No tuerce el gesto. Ni para reír ni para llorar. Su vida transcurre entre los
    muros de la cárcel de Aranjuez, donde vive junto a su madre presa. Parece más
    adulto que la mayoría de los adultos que le rodean.`,
  },
  {
    photo:'https://res.cloudinary.com/dmxe1gmbm/image/upload/v1513181422/cat_qklvtj.png',
    name:"CatWoman",
    age:2,
    about:`La mirada de Alba también inquieta. No conoce otra vida que la que hay
    en prisión. Tiene un año y medio y ha nacido dentro. Hasta hace unos meses
    compartía celda con su hermana Jessica. Ahora ella está fuera porque ha
    sobrepasado el límite de tres años que fija la ley para que los niños
    permanezcan junto a sus progenitoras. Tras su tercer cumpleaños, Jessica
    salió del centro penitenciario para seguir creciendo en un centro de acogida.`,
  },
  {
    photo:'https://res.cloudinary.com/dmxe1gmbm/image/upload/v1513181422/iron_zfab91.png',
    name:"Ironman",
    age:1,
    about:`Un niño de año y medio y unos ojos grises enormes. Mira serio a María,
    que intenta sin éxito hacerle sonreír. Permanece impasible a las carantoñas.
    No tuerce el gesto. Ni para reír ni para llorar. Su vida transcurre entre los
    muros de la cárcel de Aranjuez, donde vive junto a su madre presa. Parece más
    adulto que la mayoría de los adultos que le rodean.`,
  },
  {
    photo:'https://res.cloudinary.com/dmxe1gmbm/image/upload/v1513181422/hulk_m3vffx.png',
    name:"Hulk",
    age:2,
    about:`La mirada de Alba también inquieta. No conoce otra vida que la que hay
    en prisión. Tiene un año y medio y ha nacido dentro. Hasta hace unos meses
    compartía celda con su hermana Jessica. Ahora ella está fuera porque ha
    sobrepasado el límite de tres años que fija la ley para que los niños
    permanezcan junto a sus progenitoras. Tras su tercer cumpleaños, Jessica
    salió del centro penitenciario para seguir creciendo en un centro de acogida.`,
  },
  {
    photo:'https://res.cloudinary.com/dmxe1gmbm/image/upload/v1513181422/hawgirl_obxlvd.png',
    name:"Hawk Girl",
    age:2,
    about:`La mirada de Alba también inquieta. No conoce otra vida que la que hay
    en prisión. Tiene un año y medio y ha nacido dentro. Hasta hace unos meses
    compartía celda con su hermana Jessica. Ahora ella está fuera porque ha
    sobrepasado el límite de tres años que fija la ley para que los niños
    permanezcan junto a sus progenitoras. Tras su tercer cumpleaños, Jessica
    salió del centro penitenciario para seguir creciendo en un centro de acogida.`,
  },
  {
    photo:'https://res.cloudinary.com/dmxe1gmbm/image/upload/v1513181422/wonder_tfoqz8.png',
    name:"Wonder Woman",
    age:2,
    about:`La mirada de Alba también inquieta. No conoce otra vida que la que hay
    en prisión. Tiene un año y medio y ha nacido dentro. Hasta hace unos meses
    compartía celda con su hermana Jessica. Ahora ella está fuera porque ha
    sobrepasado el límite de tres años que fija la ley para que los niños
    permanezcan junto a sus progenitoras. Tras su tercer cumpleaños, Jessica
    salió del centro penitenciario para seguir creciendo en un centro de acogida.`,
  },
];



Centre.create(centres, (err, centres) => {
  if (err){ throw(err) }
  console.log("Success", centres);
  mongoose.connection.close();
})

Kidheroes.create(kids, (err, kids) => {
  if (err){ throw(err) }
  console.log("Success", kids);
  mongoose.connection.close();
})
