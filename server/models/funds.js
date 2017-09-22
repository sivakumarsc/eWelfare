"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FundSchema = new Schema({
    requestedAmount: {
      type: Number,
      required: true
    },
    sanctionedAmount: {
      type: Number
    },
    requestedDate: {
      type: Date,
      required: true
    },
    sanctionedDate: {
      type: Date
    },
    isEmergencyFund: {
      type: Boolean,
      default: false
    },
    comments: {
      type: Array,
      default: [{}]
    },
    status: {
      type: String,
      default: 'FUND_REQUESTED'
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('Fund', FundSchema);