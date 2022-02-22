import { Vector } from 'dom-particle-system';
import magicball from './assets/purpleparticle.png';

let magicParticleOptions = {
    texture: magicball, //object for spritesheets, string for static image, or array of strings of images
    animation: false,
    isLiving: true,
    loop: false,
    size: [{ x: 10, y: 10 }], //function, vector, array of vectors
    angle: 0,
    angleVelocity: -1, //array, number, function
    velocity: function (a, p, d, s) {
        let x, y;
        if (Math.abs(a) > 360) {
        }

        y = a / 500;
        x = (-9 * Math.sin(degrees_to_radians(a))) / 6;
        return { x: x, y: y };
    }, //function, vector, array of vectors
    position: new Vector(), //function, vector, array of vectors
    clipString: '',
    blendStrength: 100, //opacity of innerdiv
    lifespan: 8, //int, array, function
    parentElement: 'divworld',
    emitterLabel: 'magic',
    zindex: 2,
    gravity: 0, //int, array, function
    transforms: {
        size: { time: { start: 0, end: 0.5 }, values: { start: { x: 1, y: 1 }, end: { x: 6, y: 6 } } },
        size: { time: { start: 0.5, end: 1 }, values: { start: { x: 6, y: 6 }, end: { x: 2, y: 2 } } },
    }, // "param": {time: {start: 0 end: 0}},{values: {start: 0, end: 0}};
};

export let magicEmitterOptions = {
    emitterLabel: 'magic',
    numParticles: 300,
    burstCount: 1,
    emittingPoint: new Vector(0, 0),
    loop: false,
    enable: false,
    shape: 'point', // circle, rectangle
    region: 'area', //area|edge
    size: { x: 1, y: 1 },
    position: new Vector(512, 455),
    emitRate: 100,
    particleOnCreate() {},
    particleOnDestroy() {},
    initialVelocityTransform() {},
    particleOptions: magicParticleOptions,
    texture: {},
    parentElement: 'divworld',
    zindex: 1,
};

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
