import { expect, test } from 'vitest';

/* ## BROWSER ## */

import { isMobile } from '../algorithms/browser/isMobile';
test('Is Mobile: O(1)', () => {
	expect(isMobile()).toBeTypeOf('boolean');
});