// TODO: Need better, more complete, and more methodical key definitions

const Keys = {
  backspace: 8,
  tab:       9,
  enter:     13,
  'return':  13,
  space:     32,
  esc:       27, 
  left:      37,
  up:        38,
  right:     39,
  down:      40,
  ';':       186,
  '=':       187,
  ',':       188,
  '-':       189,
  '.':       190,
  '/':       191,
  '`':       192,
  '[':       219,
  '\\':      220,
  ']':       221
};

// Add uppercase versions of keys above for backwards compatibility
Object.keys( Keys ).forEach( key => Keys[ key.toUpperCase() ] = Keys[ key ] );

'0123456789'.split( '' ).forEach( ( num, index ) => Keys[ num ] = index + 48 );

'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' ).forEach( ( letter, index ) => {
  Keys[letter] = index + 65;
  Keys[letter.toLowerCase()] = index + 65;
});

export const modifiers = {
  control: 'ctrl',
  ctrl:    'ctrl',
  shift:   'shift',
  meta:    'meta',
  cmd:     'meta',
  command: 'meta',
  option:  'alt',
  alt:     'alt'
};

export function allKeys( arg ) {
  return arg ? typeof arg === 'symbol' : Symbol( 'allKeys' );
}

export default Keys;
