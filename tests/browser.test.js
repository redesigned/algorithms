import { expect, test } from 'vitest';

/* ## BROWSER ## */

import { isMobile } from '../algorithms/browser/isMobile';
test('Is Mobile:', () => {
	expect(isMobile()).toBeTypeOf('boolean');
});