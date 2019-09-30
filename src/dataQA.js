const dataQA = [
  {
    id: 1,
    text: 'We can go for keys when there is possibility that our user could change the data',
    choices: [
      {
        id: 'a',
        text: 'Keys'
      },
      {
        id: 'b',
        text: 'ref'
      },
      {
        id: 'c',
        text: 'both'
      },
      {
        id: 'd',
        text: 'none of above'
      }
    ],
    correct: 'a'
  },
  {
    id: 2,
    text: 'JSX is typesafe',
    choices: [
      {
        id: 'a',
        text: 'True'
      },
      {
        id: 'b',
        text: 'False'
      }
    ],
    correct: 'a'
  },
  {
    id: 3,
    text: 'React merges the object you provide into the current state using __________',
    choices: [
      {
        id: 'a',
        text: 'setState()'
      },
      {
        id: 'b',
        text: 'State()'
      }
    ],
    correct: 'a'
  },
  {
    id: 4,
    text: 'Arbitrary inputs of components are called __________',
    choices: [
      {
        id: 'a',
        text: 'Keys'
      },
      {
        id: 'b',
        text: 'Props'
      },
      {
        id: 'c',
        text: 'Elements'
      },
      {
        id: 'd',
        text: 'Ref'
      }
    ],
    correct: 'b'
  },
  {
    id: 5,
    text: '_________ can be done while more than one element needs to be returned from a component',
    choices: [
      {
        id: 'a',
        text: 'Abstraction'
      },
      {
        id: 'b',
        text: 'Packing'
      },
      {
        id: 'c',
        text: 'Insulation'
      },
      {
        id: 'd',
        text: 'Wrapping'
      }
    ],
    correct: 'd'
  },
  {
    id: 6,
    text: 'Which of the following needs to be updated to achieve dynamic UI updates',
    choices: [
      {
        id: 'a',
        text: 'State'
      },
      {
        id: 'b',
        text: 'Props'
      },

    ],
    correct: 'a'
  },
  {
    id: 7,
    text: 'Lifecycle methods are mainly used ___________',
    choices: [
      {
        id: 'a',
        text: 'To keep track of event history'
      },
      {
        id: 'b',
        text: 'to enhance components'
      },
      {
        id: 'c',
        text: 'freeup resources'
      },
      {
        id: 'd',
        text: 'none of the options'
      }
    ],
    correct: 'c'
  },
  {
    id: 8,
    text: 'State can be initialized when code is loaded or state can be set on event changes',
    choices: [
      {
        id: 'a',
        text: 'False'
      },
      {
        id: 'b',
        text: 'True'
      }
    ],
    correct: 'b'
  },
  {
    id: 9,
    text: 'ref is used to refer a element / component returned by _______________',
    choices: [
      {
        id: 'a',
        text: 'react()'
      },
      {
        id: 'b',
        text: 'render()'
      },
      {
        id: 'c',
        text: 'reduce()'
      },
      {
        id: 'd',
        text: 'refer()'
      }
    ],
    correct: 'b'
  },
  {
    id: 10,
    text: ' In JSX most of the errors can be caught during _________',
    choices: [
      {
        id: 'a',
        text: 'Interpretation'
      },
      {
        id: 'b',
        text: 'Execution'
      },
      {
        id: 'c',
        text: 'Compilation'
      },
      {
        id: 'd',
        text: 'Build'
      }
    ],
    correct: 'c'
  },
  {
    id: 11,
    text: 'Components cannot refer to other components in their output',
    choices: [
      {
        id: 'a',
        text: 'True'
      },
      {
        id: 'b',
        text: 'False'
      }
    ],
    correct: 'b'
  },
  {
    id: 12,
    text: 'JSX is faster because it performs ____________ while compiling code to JavaScript',
    choices: [
      {
        id: 'a',
        text: 'Modification'
      },
      {
        id: 'b',
        text: 'Compression'
      },
      {
        id: 'c',
        text: 'Optimization'
      },
      {
        id: 'd',
        text: 'Encryption'
      }
    ],
    correct: 'c'
  },
  {
    id: 13,
    text: ' If our elements are dynamic, react can keep track of the changes usig keys',
    choices: [
      {
        id: 'a',
        text: 'True'
      },
      {
        id: 'b',
        text: 'False'
      }
    ],
    correct: 'a'
  },
  {
    id: 14,
    text: 'Function that does not change its results for the same set of inputs are called __________',
    choices: [
      {
        id: 'a',
        text: 'Pure functions'
      },
      {
        id: 'b',
        text: 'Impure Functions'
      }
    ],
    correct: 'a'
  },
  {
    id: 15,
    text: 'What is the smallest building block of ReactJS',
    choices: [
      {
        id: 'a',
        text: 'none of the options'
      },
      {
        id: 'b',
        text: 'props'
      },
      {
        id: 'c',
        text: 'elements'
      },
      {
        id: 'd',
        text: 'components'
      }
    ],
    correct: 'c'
  },
  {
    id: 16,
    text: 'An altered component may be uniquely identified with the help of ref',
    choices: [
      {
        id: 'a',
        text: 'True'
      },
      {
        id: 'b',
        text: 'False'
      }
    ],
    correct: 'b'
  },
  {
    id: 17,
    text: 'React considers everything as _______',
    choices: [
      {
        id: 'a',
        text: 'User interface'
      },
      {
        id: 'b',
        text: 'elements'
      },
      {
        id: 'c',
        text: 'components'
      },
      {
        id: 'd',
        text: 'Objects'
      }
    ],
    correct: 'c'
  },
  {
    id: 18,
    text: 'React keeps track of what items have changed, been added, or been removed from a list using ________',
    choices: [
      {
        id: 'a',
        text: 'state'
      },
      {
        id: 'b',
        text: 'props'
      },
      {
        id: 'c',
        text: 'keys'
      },
      {
        id: 'd',
        text: 'ref'
      }
    ],
    correct: 'c'
  },
  {
    id: 19,
    text: 'React is mainly for building _____________',
    choices: [
      {
        id: 'a',
        text: 'Database'
      },
      {
        id: 'b',
        text: 'Connectivity'
      },
      {
        id: 'c',
        text: 'User interface'
      },
      {
        id: 'd',
        text: 'Design platform'
      }
    ],
    correct: 'c'
  },
  {
    id: 20,
    text: 'React supports all the syntax of _________________',
    choices: [
      {
        id: 'a',
        text: 'ES6'
      },
      {
        id: 'b',
        text: 'Redux'
      },
      {
        id: 'c',
        text: 'None of options'
      },
      {
        id: 'd',
        text: 'Native Java'
      }
    ],
    correct: 'a'
  },
  {
    id: 21,
    text: 'In React state can be accessed using ________',
    choices: [
      {
        id: 'a',
        text: 'current'
      },
      {
        id: 'b',
        text: 'state'
      },
      {
        id: 'c',
        text: 'current()'
      },
      {
        id: 'd',
        text: 'state()'
      }
    ],
    correct: 'b'
  },
  {
    id: 22,
    text: 'How can we prevent default behavior in React',
    choices: [
      {
        id: 'a',
        text: 'None of the options'
      },
      {
        id: 'b',
        text: 'using revokeDefault()'
      },
      {
        id: 'c',
        text: 'Using preventDefault()'
      },
      {
        id: 'd',
        text: 'using avoidDefault()'
      }
    ],
    correct: 'c'
  },
  {
    id: 23,
    text: 'Invoked once, only on the client, after rendering occurs',
    choices: [
      {
        id: 'a',
        text: 'componentWillUnmount'
      },
      {
        id: 'b',
        text: 'shouldComponentUpdate'
      },
      {
        id: 'c',
        text: 'componentWillMount'
      },
      {
        id: 'd',
        text: 'componentDidMount'
      }
    ],
    correct: 'd'
  }
];

export default dataQA;