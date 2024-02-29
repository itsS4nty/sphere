import { Args, Command, Flags } from '@oclif/core';
import { Parser } from '../../lib/parser';

export default class JsonParse extends Command {
    static args = {
        file: Args.string(({ description: 'Specify a file to parse', required: false })),
    };

    static description = 'Parse a JSON to TS interface';

    static examples = [
        `$ sphere json-parse 
        `,
    ];

    static flags = {
        // from: Flags.string({ char: 'f', description: 'Who is saying hello', required: true }),
    };

    async run(): Promise<void> {
        const { args, flags } = await this.parse(JsonParse);

        const p = new Parser();

        if(args.file) p.parseSchema(args.file);
        else console.log('File not provided');
    }
}
