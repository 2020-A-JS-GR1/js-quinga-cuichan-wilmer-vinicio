/**
 * Roles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', // nombre conexión
  tableName: 'Rol', // nombre tabla
  attributes: {

    TipoRol: { // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      columnName: 'TipoRol',
    },

    // RELACIONES
    // Roles -> Persona
    personas: { // Uno a muchos (nombre en plural)
      collection: 'Persona', // Modelo a relacionarse
      via: 'idPersona' // Nombre atributo FK en el modelo relacionada
    }
  }

};

