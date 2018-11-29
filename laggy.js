import { all } from 'rsvp';

/**
 * @param {Array<String>} x
 */
function laggy(x) {
  all(x);
}
