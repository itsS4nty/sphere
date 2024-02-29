class TransformationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class PathNotProvidedError extends TransformationError {
    constructor() {
        super('No path provided');
    }
}

export class PathNotFoundError extends TransformationError {
    constructor(path: string) {
        super(`Path not found: ${path}`);
    }
}

export class SchemaNotProvided extends TransformationError {
    constructor() {
        super('No schema provided.');
    }
}

export class SchemaNotFound extends TransformationError {
    constructor(schema: string) {
        super(`Schema not found: ${schema}`);
    }
}

export class SchemaError extends TransformationError {
    constructor(err: unknown) {
        super(err as string);
    }
}
