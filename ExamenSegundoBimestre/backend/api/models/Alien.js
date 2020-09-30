/**
 * Alien.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Alien', // nombre tabla
  attributes: {

    nombreEspecie: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'nombreEspecie',
    },

    numeroOjos: {
      type: 'number',
      required: true, // Por defecto es false
      columnName: 'NumeroDeOjos',

    },

    poseeNavesGalaxticas: {
      type: 'string',
      required: true,
      maxLength: 3,
      isIn: ['Si', 'No'],
      columnName: 'poseeNavesGalaxticas',
    },

    colorPiel: {
      type: 'string',
      required: true, // Por defecto es false
      isIn: ['blanca', 'Negra', 'Azul', 'Oscura', 'Plateada'], // Solo estos valores
      columnName: 'colorPiel',

    },


// Relaciones
// Alien <- Universo - Muchos a Uno
    universo: { // Nombre FK
      model: 'Universo', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },





  },

};

// Relaciones
// Pokemon <- Usuario - Muchos a Uno
// usuario: { // Nombre FK
//   model: 'Usuario', // Modelo con el cual relacionamos
//     required: true, // Requerida 1 - N
//   //false // Opcional  0 - N (por defecto)
// },
//

