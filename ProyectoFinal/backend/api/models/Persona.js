/**
 * Persona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Persona', // nombre tabla
  attributes: {

    NombrePesona: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'NomberPesona',
    },

    ApellidoPesona: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'ApellidoPesona',
    },

    CuentaBancoPesona: { // nombre atributo
      type: 'Number',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'CuentaBancoPesona',
    },

    TelefonoPesona: { // nombre atributo
      type: 'Number',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'TelefonoPesona',
    },

    // Relaciones
    // Persona <- Roles - Muchos a Uno
    idPersona: { // Nombre FK
      model: 'Roles', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    // Persona -> Citas
    citas: { // Uno a muchos (nombre en plural)
      collection: 'Citas', // Modelo a relacionarse
      via: 'idPersona' // Nombre atributo FK en el modelo relacionada
    },

    // Persona -> Notificaciones
    idNotificaciones: { // Uno a muchos (nombre en plural)
      collection: 'Notificaciones', // Modelo a relacionarse
      via: 'idPersona' // Nombre atributo FK en el modelo relacionada
    },

    // Persona -> Paciente
    idPaciente: { // Uno a muchos (nombre en plural)
      collection: 'Paciente', // Modelo a relacionarse
      via: 'idPersona' // Nombre atributo FK en el modelo relacionada
    }


  }

};

