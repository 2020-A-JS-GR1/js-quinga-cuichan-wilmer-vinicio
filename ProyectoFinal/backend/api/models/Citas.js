/**
 * Citas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  datastore: 'default', // nombre conexión
  tableName: 'Citas', // nombre tabla
  attributes: {

    CaracteristicaCita: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'CaracteristicaCita',
    },

    HoraCita: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'HoraCita',
    },

    FechaCita: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'FechaCita',
    },

    DiagnosticoCita: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'DiagnosticoCita',
    },

    ExamenesCita: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'ExamenesCita',
    },
    MedicamentosCita: {
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'MedicamentosCita',
    },

    // Citas <- Persona - Muchos a Uno
    idPersona: { // Nombre FK
      model: 'Persona', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    }


    // // Citas <- Pacientes - Muchos a Uno
    // idPaciente: { // Nombre FK
    //   model: 'Paciente', // Modelo con el cual relacionamos
    //   required: true, // Requerida 1 - N
    //   //false // Opcional  0 - N (por defecto)
    // },


  },
};

