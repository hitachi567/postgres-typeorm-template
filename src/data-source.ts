import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import 'reflect-metadata';

export const dataSource = new DataSource(getOptions());

function getOptions(): Options {
    config();

    return {
        type: 'postgres',
        host: process.env.DATASOURCE_HOST,
        port: toNumber(process.env.DATASOURCE_PORT),
        username: process.env.DATASOURCE_USERNAME,
        password: process.env.DATASOURCE_PASSWORD,
        database: process.env.DATASOURCE_DATABASE,
        logging: false,
        entities: [],
    };
}

function toNumber(value?: string) {
    if (typeof value === 'string') {
        return parseInt(value, 10);
    }
    return NaN;
}

interface Options {
    type: 'postgres';
    host?: string;
    port: number;
    username?: string;
    password?: string;
    database?: string;
    logging: false;
    entities: Array<any>;
}
