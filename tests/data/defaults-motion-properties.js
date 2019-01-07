export default {
  mode: {
    default: 'linear',
    correct: [
      { initial: 'linear' },
      { initial: 'ease-out-a' },
      { initial: 'sharp-out-in-b' },
      { initial: 'swing-out-a' },
      { initial: 'sharp-swing-in-c' },
      { initial: 'sharp-swing-in-out-d' },
      { initial: 'jump-a' },
      { initial: 'sharp-jump-d' },
      { initial: 'pulse-d' },
      { initial: [0.5, 0.5, 1, 1] },
      { initial: [0.63, 0.83, 1, 1] },
      { initial: [0.65, 0.3, 0.33, 0.73, 1, 1] },
      { initial: [1, 0, 0, 1.5, 1, 1.5] },
      { initial: [0.19, 0.39, 0.38, 0.64, 0.57, 0.79, 0.72, 0.88, 0.86, 0.95, 1, 1] },
      { initial: [0.05, 0.06, 0.11, 0.11, 0.17, 0.17, 0.23, 0.23, 0.29, 0.29, 0.35, 0.35, 0.41, 0.41, 0.47, 0.47, 0.53, 0.53, 0.59, 0.59, 0.65, 0.65, 0.7, 0.7, 0.76, 0.76, 0.82, 0.82, 0.88, 0.88, 0.94, 0.94, 1, 1] },
      { initial: [0, 0.1, 0, -0.1, 1, 1.1, 1, 0.9, 1, 1] },
      { initial: [0.85, 1, 0.4, 1.33, 0.6, 1, 1, 0] },
      { initial: [0, 0.2, 0, 0.5, 1, 1.5, 0, 1.5, 1, 0.5, 1, 0.2, 1, 0] },
      { initial: [0, 0, 0, 0, 1, 0] },
      { initial: [0.05, 0.05, 0.15, 0.15, 0.85, 0.85, 0.95, 0.95, 1, 1] },
      { initial: [0.74, 0.32, 0.07, 0.4, 0.82, 0.51, 0.16, 0.63, 0.89, 0.73, 0.3, 0.84, 1, 1] }
    ],
    incorrect: [
      'hello world',
      15,
      true,
      NaN,
      Function,
      {},
      [],
      ['hello', 'world'],
      [1, 1],
      [0.05, 0.05, 0.15, 0.15, Infinity, 0.85, 0.95, 0.95, 1, 1],
      [0.05, 0.05, 0.15, Infinity, 0.85, 0.85, 0.95, 0.95, 1, 1],
      [0.05, 0.05, 0.15, 0.15, -Infinity, 0.85, 0.95, 0.95, 1, 1],
      [0.05, 0.05, 0.15, -Infinity, 0.85, 0.85, 0.95, 0.95, 1, 1],
      [0.05, '0.05', 0.15, 0.15, 0.85, 0.85, 0.95, 0.95, 1, 1],
      [0.05, 0.05, 0.15, 0.15, 0.85, NaN, 0.95, 0.95, 1, 1],
      [0.03, 0.03, 0.09, 0.09, 0.15, 0.15, 0.21, 0.21, 0.27, 0.27, 0.33, 0.33, 0.39, 0.39, 0.45, 0.45, 0.52, 0.51, 0.58, 0.57, 0.64, 0.64, 0.7, 0.7, 0.76, 0.76, 0.82, 0.82, 0.88, 0.88, 0.94, 0.94, 0.97, 0.97, 1, 1],
      [0.9, 0.9, 0.5, 1],
      [0.9, 0.9, 1.5, 1],
      [0.9, 1, 1],
      [0.15, 0.15, 0.85, 0.85, 0.35, 1, 0.6],
      [-0.5, 0.3, 1, 1],
      [0.9, 0.9, 1.5, 0.95, 1, 1],
      [0.9, 2.1, 0.95, 0.95, 1, 1],
      [0.9, -1.1, 0.95, 0.95, 1, 1]
    ]
  },
  fps: {
    default: 32,
    correct: [
      { initial: -Infinity, final: 1 },
      { initial: Infinity, final: 75 },
      { initial: 1, final: 1 },
      { initial: 0, final: 1 },
      { initial: 75, final: 75 },
      { initial: 76, final: 75 },
      { initial: -5.55, final: 1 },
      { initial: 125.123, final: 75 },
      { initial: 15, final: 15 },
      { initial: 33, final: 33 },
      { initial: 52.22, final: 52 },
      { initial: 19.99, final: 20 },
      { initial: 8.499, final: 8 },
      { initial: 8.5, final: 9 },
    ],
    incorrect: [
      'hello world',
      false,
      NaN,
      Function,
      [],
      {}
    ]
  },
  smooth: {
    default: false,
    correct: [
      { initial: true },
      { initial: false }
    ],
    incorrect: [
      'hello world',
      150,
      Infinity,
      Function,
      /helloWorld/gim,
      [],
      {}
    ]
  },
  start: {
    default: 0,
    correct: [
      { initial: -500 },
      { initial: -123.123 },
      { initial: 0 },
      { initial: .00005 },
      { initial: 100000.000005 },
      { initial: [1] },
      { initial: [1, 1, 1, 1, 1] },
      { initial: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 10e+10, 1 + 1, 13.13, 10],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      },
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 10e+10, Infinity, 13.13, 10],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      },
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 'hello world', 1 + 1, 13.13, 10],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      },
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 10e+10, 1 + 1, 13.13, NaN],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      }
    ],
    incorrect: [
      'hello world',
      Infinity,
      -Infinity,
      NaN,
      Function,
      /helloWorld/gim,
      {},
      [],
      [1, 2, 3, 'hello'],
      [5, Infinity, 6, 7],
      [8, 9, -Infinity, 10],
      [11, 12, NaN, 13, 14],
      [15, 16, Function],
      [17, 19, {}],
      [20, 21, [], 22],
      [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, NaN, 10e+10, 1 + 1, 13.13, 10],
      [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 'hello world', 10e+10, 1 + 1, 13.13, 10],
    ]
  },
  stop: {
    default: 1,
    correct: [
      { initial: -500 },
      { initial: -123.123 },
      { initial: 0 },
      { initial: .00005 },
      { initial: 100000.000005 },
      { initial: [1] },
      { initial: [1, 1, 1, 1, 1] },
      { initial: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 10e+10, 1 + 1, 13.13, 10],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      },
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 10e+10, Infinity, 13.13, 10],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      },
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 'hello world', 1 + 1, 13.13, 10],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      },
      {
        initial: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14, 10e+10, 1 + 1, 13.13, NaN],
        final: [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 14]
      }
    ],
    incorrect: [
      'hello world',
      Infinity,
      -Infinity,
      NaN,
      Function,
      /helloWorld/gim,
      {},
      [],
      [1, 2, 3, 'hello'],
      [5, Infinity, 6, 7],
      [8, 9, -Infinity, 10],
      [11, 12, NaN, 13, 14],
      [15, 16, Function],
      [17, 19, {}],
      [20, 21, [], 22],
      [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, NaN, 10e+10, 1 + 1, 13.13, 10],
      [.5, 33, 12, 10, 100, 150, 200, 123, 1.111, -12, 8.88, 9.11, 0.3e-5, 0, 0.0, 'hello world', 10e+10, 1 + 1, 13.13, 10],
    ]
  },
  autostart: {
    default: true,
    correct: [
      { initial: true },
      { initial: false }
    ],
    incorrect: [
      'hello world',
      150,
      Infinity,
      Function,
      /helloWorld/gim,
      [],
      {}
    ]
  },
  time: {
    default: 1000,
    correct: [
      { initial: 1 },
      { initial: 10 },
      { initial: 150 },
      { initial: 10000e+10 },
      { initial: 123.123, final: 123 },
      { initial: 1500.0000555, final: 1500 },
      { initial: 15.49, final: 15 },
      { initial: 15.49999, final: 15 },
      { initial: 15.5, final: 16 },
      { initial: -100, final: 1 },
      { initial: -10000, final: 1 },
      { initial: -111.111, final: 1 },
      { initial: 0.000005, final: 1 },
      { initial: -Infinity, final: 1}
    ],
    incorrect: [
      'hello world',
      NaN,
      Infinity,
      Function,
      /helloWorld/gim,
      [],
      {}
    ]
  },
  speed: {
    default: undefined,
    correct: [
      { initial: 1 },
      { initial: 10 },
      { initial: 150 },
      { initial: 10000e+10 },
      { initial: 123.123 },
      { initial: 1500.0000555 },
      { initial: 15.49 },
      { initial: 15.49999 },
      { initial: 15.5 },
      { initial: 111.111 },
      { initial: 0.000005 },
      { initial: Infinity}
    ],
    incorrect: [
      'hello world',
      NaN,
      -Infinity,
      0,
      0.0,
      -.1,
      -100,
      -123.123,      
      Function,
      /helloWorld/gim,
      [],
      {}
    ]
  },
  delay: {
    default: 0,
    correct: [
      { initial: 1 },
      { initial: 10 },
      { initial: 150 },
      { initial: 10000e+10 },
      { initial: 123.123, final: 123 },
      { initial: 1500.0000555, final: 1500 },
      { initial: 15.49, final: 15 },
      { initial: 15.49999, final: 15 },
      { initial: 15.5, final: 16 },
      { initial: -100, final: 0 },
      { initial: -10000, final: 0 },
      { initial: -111.111, final: 0 },
      { initial: 0.000005, final: 0 },
      { initial: -Infinity, final: 0}
    ],
    incorrect: [
      'hello world',
      NaN,
      Infinity,
      Function,
      /helloWorld/gim,
      [],
      {}
    ]
  },
  repeat: {
    default: 1,
    correct: [
      { initial: 1 },
      { initial: 10 },
      { initial: 150 },
      { initial: 10000e+10 },
      { initial: Infinity },
      { initial: 123.123, final: 123 },
      { initial: 1500.0000555, final: 1500 },
      { initial: 15.49, final: 15 },
      { initial: 15.49999, final: 15 },
      { initial: 15.5, final: 16 },
      { initial: -100, final: 1 },
      { initial: -10000, final: 1 },
      { initial: -111.111, final: 1 },
      { initial: 0.000005, final: 1 },
      { initial: -Infinity, final: 1}
    ],
    incorrect: [
      'hello world',
      NaN,
      Function,
      /helloWorld/gim,
      [],
      {}
    ]
  }
};