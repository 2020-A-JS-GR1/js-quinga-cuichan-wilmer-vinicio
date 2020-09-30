/**
 * Peso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Peso', // nombre tabla
  attributes: {

    FechaPeso: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'FechaPeso',
    },

    Peso: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'Peso',
    },

    // Peso <- Paciente - Muchos a Uno
    idPaciente: { // Nombre FK
      model: 'Paciente', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },


  }

};

