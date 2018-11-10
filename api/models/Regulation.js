/**
 * Regulation.js
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
      required: true,
    },

    date: {
      type: 'ref',
      columnType: 'datetime',
      required: true,
    },

    tag: {
      type: 'string',
      required: true,
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
