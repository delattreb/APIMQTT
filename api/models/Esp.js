/**
 * Esp.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    updatedAt: false,
    createdAt: false,
    
    name: {
      type: 'string',
      unique: true,
      required: true,
    },

    connected: {
      type: 'number',
      allowNull: true,
      defaultsTo: 0,
    },

    state: {
      type: 'number',
      allowNull: true,
      defaultsTo: 0,
    },

  },
  customToJSON: function () {
    return _.omit(this, ['createdAt', 'updatedAt'])
  }
};
