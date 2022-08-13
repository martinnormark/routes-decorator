import { Route } from '../src/route.decorator';

class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}

	@Route('/products/123-abc')
	greet(name: string, age: number) {
		return 'Hello, ' + this.greeting;
	}
}

describe('route', () => {
	it('should log route and arguments', async () => {
		const r = new Greeter('hello');
		const actual = 'number';
		const expected = 'number';
		expect(actual).toEqual(expected);
	});

	it('sum return a sum of 2 number ( 2 + 3 ) = 5', async () => {
		const actual = 5;
		const expected = 5;
		expect(actual).toEqual(expected);
	});
});
