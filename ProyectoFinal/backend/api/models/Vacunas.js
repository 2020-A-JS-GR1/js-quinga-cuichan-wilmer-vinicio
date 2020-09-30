/**
 * Vacunas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Vacunas', // nombre tabla
  attributes: {

    FechaVacuna: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'FechaVacuna',
    },

    Enfermedad: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'Enfermedad',
    },

    FechaProxima: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'FechaProxima',
    },



    // Pacientes <- Vacunas - Muchos a Uno
    idPaciente: { // Nombre FK
      model: 'Paciente', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },


  },





};

