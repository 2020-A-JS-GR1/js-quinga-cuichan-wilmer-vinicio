/**
 * Notificaciones.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Notificaciones', // nombre tabla
  attributes: {

    CaractetisticaNotificaciones: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'CaractetisticaNotificaciones',
    },
    HoraNotificaciones: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'HoraNotificaciones',
    },

    FechaNotificaciones: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'FechaNotificaciones',
    },

    // NombreVeterinarioNotificaciones: { // nombre atributo
    //   type: 'string',
    //   required: true, // Por defecto es false
    //   unique: true, // Por defecto es false
    //   columnName: 'NombreVeterinarioNotificaciones',
    // },


    // Notificaciones <- Pesona - Muchos a Uno
    idPersona: { // Nombre FK
      model: 'Persona', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },


  }

};

