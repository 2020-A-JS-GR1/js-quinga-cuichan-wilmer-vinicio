/**
 * Universo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Universo', // nombre tabla
  attributes: {

    NombreUniverso: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'NombreUniverso',
    },

    numeroPlanetas: {
      type: 'number',
      required: true, // Por defecto es false
      columnName: 'numeroPlanetas',

    },

    numeroSoloes: {
      type: 'number',
      required: true, // Por defecto es false
      columnName: 'numeroSoloes',

    },

    tieneAgujerosNegros: {
      type: 'string',
      required: true,
      maxLength: 3,
      isIn: ['Si', 'No'],
      columnName: 'tieneAgujerosNegros',
    },

    NombreConstelacion: {
      type: 'string',
      required: true, // Por defecto es false
      isIn: ['TAURO', 'GÉMINIS', 'VIRGO', 'Triangulum Australe', 'Telescopium'], // Solo estos valores
      columnName: 'NombreConstelacion',

    },

    // RELACIONES
// Universo -> Alien
    aliens: { // Uno a muchos (nombre en plural)
      collection: 'Alien', // Modelo a relacionarse
      via: 'universo' // Nombre atributo FK en el modelo relacionada
    }


  },

};

// RELACIONES
// Usuario -> Pokemon
// pokemones: { // Uno a muchos (nombre en plural)
//   collection: 'Pokemon', // Modelo a relacionarse
//     via: 'usuario' // Nombre atributo FK en el modelo relacionada
// }
