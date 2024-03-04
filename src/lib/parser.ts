import { existsSync, readFileSync } from 'fs';
import { config } from '../config/config';
import { PathNotFoundError, PathNotProvidedError, SchemaError, SchemaNotFound, SchemaNotProvided } from './errors';

export class Parser {
    private readonly path: string | null = null;
    private schema: string | null = null;

    constructor() {
        this.path = config.defaults.root;
    }

    parseSchema(_schema: string) {
        if(!this.path) throw new PathNotProvidedError();
        if(!this._pathExists(this.path)) throw new PathNotFoundError(this.path);
        if(!_schema) throw new SchemaNotProvided();

        this.schema = _schema;
        const _schemaPath = `${this.path}/${_schema}`;
        if(!this._pathExists(_schemaPath)) throw new SchemaNotFound(_schemaPath);

        const _content = this._parseAsJSON(this._getContent(_schemaPath));
        const data = this._getTypes(_content);
        if(!data) return;
        console.log(data);
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

    private _getInterfaceName() {
        if(!this.schema) return 'NoName';
        const _fileName = this.schema.split('.')[0] || this.schema.split('.')[1] || 'NoName';
        return _fileName.charAt(0).toUpperCase() + _fileName.slice(1);
    }

    private _getTypes(_content: unknown, isRecursive: boolean = false) {
        if(!isRecursive) {
            if(!_content) return; // TODO: custom error for null content
            if(typeof _content !== 'object') return; // TODO: custom error for non-object content
            if(Array.isArray(_content)) return;
        }

        const contentTyped = _content as { [key: string | number]: unknown };
        const keys = Object.keys(contentTyped);

        let _interface = isRecursive ? '{ ' : `interface ${this._getInterfaceName()} { `; // TODO: get fileName to name the interface

        for(const key of keys) {
            let type = this._getType(contentTyped[key]);
            if(type === 'object') {
                const newType = Array.isArray(contentTyped[key])
                    ? this._getArrTypes(contentTyped[key] as [])
                    : this._getTypes(contentTyped[key], true);
                if(!newType) return;
                type = newType;
            }
            _interface += `${key.includes('-') ? `'${key}'` : key}: ${type};`;
        }
        _interface += ' }';
        // console.log(_interface);
        return _interface;
    }

    private _getArrTypes(_data: unknown[]) {
        const _acc: unknown[] = [];
        for(const d of _data) {
            let type = this._getType(d);
            if(type === 'object') {
                const newType = Array.isArray(d) ? this._getArrTypes(d) : this._getTypes(d, true);
                if(!newType) continue;
                type = newType;
            }
            if(!_acc.includes(type)) {
                _acc.push(type);
            }
        }
        const _isSameType = _acc.every(value => value === _acc[0]);

        return _isSameType ? `${_acc[0]}[]` : `(${_acc.join(' | ')})[]`;
    }

    private _getType(_value: unknown): string {
        return typeof _value;
    }
}
