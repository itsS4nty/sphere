import { existsSync, readFileSync } from 'fs';
import { config } from '../config/config';
import {
    PathNotFoundError,
    PathNotProvidedError,
    SchemaError,
    SchemaNotFound,
    SchemaNotProvided,
} from './errors';

export class Parser {
    private readonly path: string | null = null;

    constructor() {
        this.path = config.defaults.root;
    }

    parseSchema(_schema: string) {
        if (!this.path) throw new PathNotProvidedError();
        if (!this._pathExists(this.path)) throw new PathNotFoundError(this.path);
        if (!_schema) throw new SchemaNotProvided();

        const _schemaPath = `${this.path}/${_schema}`;
        if (!this._pathExists(_schemaPath)) throw new SchemaNotFound(_schemaPath);

        const _content = this._parseAsJSON(this._getContent(_schemaPath));
        this._getTypes(_content);
    }

    private _pathExists(_path: string) {
        return existsSync(_path);
    }

    private _getContent(_path: string) {
        return readFileSync(_path, 'utf-8');
    }

    private _parseAsJSON(content: string) {
        try {
            return JSON.parse(content);
        } catch (err) {
            // console.log(err)
            throw new SchemaError(err);
        }
    }

    private _getTypes(_content: unknown) {
        if (!_content) return; // TODO: custom error for null content
        if (typeof _content !== 'object') return; // TODO: custom error for non-object content
        if (Array.isArray(_content)) return;

        const contentTyped = _content as { [key: string]: unknown };
        const keys = Object.keys(contentTyped);

        let _interface = 'interface Test { ';

        for (const key of keys) {
            const type = this._getType(contentTyped[key]);
            if(type === 'object') continue; // TODO: make function recursive for this
            _interface += `${key}: ${type};`;
        }

        console.log(_interface);
    }

    private _getType(_value: unknown) {
        return typeof _value;
    }
}
