/**
 * Paciente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Paciente', // nombre tabla
  attributes: {

    EspeciePaciente: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'EspeciePaciente',
    },

    RazaPaciente: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'RazaPaciente',
    },

    // Paciente <- Persona - Muchos a Uno
    idPersona: { // Nombre FK
      model: 'Persona', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    // // Paciente -> Citas
    // citas: { // Uno a muchos (nombre en plural)
    //   collection: 'Citas', // Modelo a relacionarse
    //   via: 'idPaciente' // Nombre atributo FK en el modelo relacionada
    // },




    // Paciente -> Vacunas
    idVacunas: { // Uno a muchos (nombre en plural)
      collection: 'Vacunas', // Modelo a relacionarse
      via: 'idPaciente' // Nombre atributo FK en el modelo relacionada
    },

    // Paciente -> Peso
    idPeso: { // Uno a muchos (nombre en plural)
      collection: 'Peso', // Modelo a relacionarse
      via: 'idPaciente' // Nombre atributo FK en el modelo relacionada
    }


  }

};

