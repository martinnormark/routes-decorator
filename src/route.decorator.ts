export function Route(value: string): MethodDecorator;

export function Route(options: any): MethodDecorator;

export function Route(urlOrOptions: string | any): MethodDecorator {
	// this is the decorator factory, it sets up
	// the returned decorator function
	console.log(urlOrOptions);

	return (target: object) => {
		// this is the decorator
		// do something with 'target' and 'value'...
		console.log(target);
	};
}
