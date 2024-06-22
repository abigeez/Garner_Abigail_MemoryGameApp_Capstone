import React from 'react'
import "../components/MemoryMatch.css";

const symbols = [1,2,3,4,5];
const allSym = shuffle([...symbols,...symbols]);
///creating symbols to represent the cards that will be used in the game//
///using the shuffle method and spreading the symbols so that they will be shuffled every time 
// the game restarts.//

//// creating component for the actual game .///
export default function MemoryMatch() {
  return (
    <div>MemoryMatch</div>
  )
}
