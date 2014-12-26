'use strict';

var assign = require('object-assign');

var common = {
    'deckA.killTreble': 0x5c,
    'deckA.killMid': 0x5b,
    'deckA.killBass': 0x5a,
    'deckA.delete': 0x59,

    'deckA.effect': 0x63,

    'deckA.reloop': 0x55,
    'deckA.out': 0x54,
    'deckA.in': 0x53,
    'deckA.manual': 0x61,

    'deckA.sync': 0x40,
    'deckA.cue': 0x33,
    'deckA.play': 0x3b,
    'deckA.stutter': 0x4a,

    'deckA.scratch': 0x48,    
    'deckA.keylock': 0x51,
    'deckA.smallCue': 0x65,

    'deckB.killTreble': 0x60,
    'deckB.killMid': 0x5f,
    'deckB.killBass': 0x5e,
    'deckB.delete': 0x5d,

    'deckB.effect': 0x64,

    'deckB.manual': 0x62,
    'deckB.reloop': 0x58,
    'deckB.out': 0x57,
    'deckB.in': 0x56,

    'deckB.cue': 0x3C,
    'deckB.play': 0x42,
    'deckB.sync': 0x47,
    'deckB.stutter': 0x4c,

    'deckB.scratch': 0x50,
    'deckB.keylock': 0x52,
    'deckB.smallCue': 0x66
};

var outputs = assign({
    'deckA.pitch': 0x70,
    'deckB.pitch': 0x71,

    'folder': 0x73,
    'file': 0x72
}, common);

var inputs = assign({
    'deckA.load': 0x4b,
    'deckA.pitchDown': 0x43,
    'deckA.pitchUp': 0x44,

    'deckA.volume': 0x08,
    'deckA.pitch': 0x0d,
    'deckA.wheel': 0x19,
    'deckA.wheelTop': 0x4e,

    'deckA.select': 0x1b,
    'deckA.control1': 0x1c,
    'deckA.control2': 0x1d,

    'deckA.treble': 0x10,
    'deckA.mid': 0x12,
    'deckA.bass': 0x14,

    'deckB.treble': 0x11,
    'deckB.mid': 0x13,
    'deckB.bass': 0x15,

    'deckB.load': 0x34,
    'deckB.pitchUp': 0x46,
    'deckB.pitchDown': 0x45,

    'deckB.volume': 0x09,
    'deckB.pitch': 0x0e,
    'deckB.wheel': 0x18,
    'deckB.wheelTop': 0x4d,

    'deckB.select': 0x1e,
    'deckB.control1': 0x1f,
    'deckB.control2': 0x20,

    'cueGain': 0x0b,
    'cueMix': 0xc,

    'browse': 0x1a,
    'browsePress': 0x4f,
    'back': 0x69,

    'masterGain': 0x17,
    'crossfader': 0x0a
}, common);

module.exports.inputs = inputs;
module.exports.outputs = outputs;
