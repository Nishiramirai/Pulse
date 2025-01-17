

/**
 * Remove a target object from array
 * @param {array} array
 * @param {object} target
 */

/**
 * Insert initial songs params
 * @param {array} songs
 */


/**
 * Shuffle songs.
 * @param {array} array
 */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export { shuffleArray };
