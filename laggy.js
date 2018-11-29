import { all } from 'rsvp';

/**
 * @param {Array<String>} xy
 */
function laggy(x) {
  all(x);
}